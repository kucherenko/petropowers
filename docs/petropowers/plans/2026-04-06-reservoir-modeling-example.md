# Reservoir Modeling Example Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use petropowers:subagent-driven-development (recommended) or petropowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `examples/generate_reservoir_dataset.py` — a runnable script that generates a complete synthetic oil-field dataset for reservoir `ppr-1` using the petropowers `synthetic_data` framework.

**Architecture:** Single flat Python script with one function per data type, wired by `main()`. Three missing components must be built first (`TimeSeriesGenerator`, `SEGYMapper`, `SCADAMapper`) using TDD; the script then imports them like the other generators. Generated output goes to `examples/data/ppr-1/` (gitignored).

**Tech Stack:** Python 3, numpy, lasio, segyio, pandas, pytest, existing `synthetic_data.*` package.

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `synthetic_data/scada/__init__.py` | Export `TimeSeriesGenerator` |
| Create | `synthetic_data/scada/timeseries_generator.py` | Generate SCADA production CSV (oil/gas/water rate, pressure, temp) |
| Create | `synthetic_data/osdu/seismic_mapper.py` | Map SEG-Y metadata to OSDU `SeismicTraceData` manifest |
| Create | `synthetic_data/osdu/scada_mapper.py` | Map SCADA CSV path to OSDU `Facility` manifest |
| Modify | `synthetic_data/osdu/__init__.py` | Export `SEGYMapper`, `SCADAMapper` |
| Create | `tests/synthetic_data/test_scada_generator.py` | Tests for `TimeSeriesGenerator` |
| Create | `tests/synthetic_data/test_seismic_osdu_mapper.py` | Tests for `SEGYMapper` |
| Create | `tests/synthetic_data/test_scada_osdu_mapper.py` | Tests for `SCADAMapper` |
| Create | `examples/generate_reservoir_dataset.py` | Main example script |
| Modify | `.gitignore` | Add `examples/data/` |

---

## Task 1: TimeSeriesGenerator (SCADA production data)

**Files:**
- Create: `synthetic_data/scada/timeseries_generator.py`
- Create: `synthetic_data/scada/__init__.py`
- Create: `tests/synthetic_data/test_scada_generator.py`

### Step 1.1 — Write failing tests

- [ ] Create `tests/synthetic_data/test_scada_generator.py`:

```python
"""Tests for SCADA time series generator."""
import pytest
import tempfile
import os
import pandas as pd
from synthetic_data.scada import TimeSeriesGenerator


def test_timeseries_generator_creates_file():
    """Generator should create a CSV file."""
    gen = TimeSeriesGenerator(seed=42)
    with tempfile.TemporaryDirectory() as tmpdir:
        path = gen.create_record(
            well_name="Test-Well-001",
            n_days=10,
            output_dir=tmpdir,
        )
        assert os.path.exists(path)
        assert path.endswith(".csv")


def test_timeseries_generator_columns():
    """Generated CSV must have all required columns."""
    gen = TimeSeriesGenerator(seed=42)
    with tempfile.TemporaryDirectory() as tmpdir:
        path = gen.create_record(
            well_name="Test-Well-001",
            n_days=10,
            output_dir=tmpdir,
        )
        df = pd.read_csv(path, parse_dates=["date"])
        for col in ["date", "oil_rate_bbl_d", "gas_rate_mscf_d",
                    "water_rate_bbl_d", "wellhead_pressure_psi", "temperature_f"]:
            assert col in df.columns, f"Missing column: {col}"


def test_timeseries_generator_row_count():
    """CSV should have exactly n_days rows."""
    gen = TimeSeriesGenerator(seed=42)
    with tempfile.TemporaryDirectory() as tmpdir:
        path = gen.create_record(
            well_name="Test-Well-001",
            n_days=730,
            output_dir=tmpdir,
        )
        df = pd.read_csv(path)
        assert len(df) == 730


def test_timeseries_generator_physical_ranges():
    """Rates and pressures must be non-negative."""
    gen = TimeSeriesGenerator(seed=42)
    with tempfile.TemporaryDirectory() as tmpdir:
        path = gen.create_record(
            well_name="Test-Well-001",
            n_days=100,
            output_dir=tmpdir,
        )
        df = pd.read_csv(path)
        assert (df["oil_rate_bbl_d"] >= 0).all()
        assert (df["gas_rate_mscf_d"] >= 0).all()
        assert (df["water_rate_bbl_d"] >= 0).all()
        assert (df["wellhead_pressure_psi"] >= 0).all()


def test_timeseries_generator_filename():
    """Output filename should embed well name."""
    gen = TimeSeriesGenerator(seed=42)
    with tempfile.TemporaryDirectory() as tmpdir:
        path = gen.create_record(
            well_name="PPR1-Well-007",
            n_days=5,
            output_dir=tmpdir,
        )
        assert "PPR1-Well-007" in os.path.basename(path)


def test_timeseries_generator_dataset():
    """create_dataset should return one file per well."""
    gen = TimeSeriesGenerator(seed=42)
    with tempfile.TemporaryDirectory() as tmpdir:
        paths = gen.create_dataset(
            n_records=3,
            well_names=["W-001", "W-002", "W-003"],
            n_days=5,
            output_dir=tmpdir,
        )
        assert len(paths) == 3
        for p in paths:
            assert os.path.exists(p)
```

### Step 1.2 — Run tests to confirm they fail

- [ ] Run: `pytest tests/synthetic_data/test_scada_generator.py -v`
- Expected: `ModuleNotFoundError: No module named 'synthetic_data.scada'`

### Step 1.3 — Implement TimeSeriesGenerator

- [ ] Create `synthetic_data/scada/timeseries_generator.py`:

```python
"""SCADA time series generator for well production history."""
import os
import tempfile
from typing import List, Optional
import numpy as np
import pandas as pd
from datetime import date, timedelta

from synthetic_data.base import Generator


class TimeSeriesGenerator(Generator):
    """Generate synthetic SCADA production history as CSV files.

    Each file contains daily measurements for one well:
    oil rate (bbl/d), gas rate (Mscf/d), water rate (bbl/d),
    wellhead pressure (psi), temperature (°F).
    """

    def __init__(self, seed: int = None):
        """Initialize generator.

        Args:
            seed: Random seed for reproducibility.
        """
        self.rng = np.random.default_rng(seed)

    def create_record(
        self,
        well_name: str,
        n_days: int = 730,
        start_date: str = "2022-01-01",
        peak_oil_rate: float = None,
        output_dir: str = None,
        **kwargs,
    ) -> str:
        """Generate a single well production CSV.

        Args:
            well_name: Well identifier used in the filename.
            n_days: Number of daily samples to generate.
            start_date: ISO date string for first sample (default 2022-01-01).
            peak_oil_rate: Peak oil rate in bbl/d (randomised if None).
            output_dir: Directory to write the file (default: temp dir).

        Returns:
            Path to generated CSV file.
        """
        if output_dir is None:
            output_dir = tempfile.mkdtemp()
        os.makedirs(output_dir, exist_ok=True)

        # Dates
        t0 = date.fromisoformat(start_date)
        dates = [t0 + timedelta(days=i) for i in range(n_days)]

        # Exponential decline with noise — typical production profile
        if peak_oil_rate is None:
            peak_oil_rate = float(self.rng.uniform(200, 1500))
        decline_rate = float(self.rng.uniform(0.001, 0.004))  # per day
        t = np.arange(n_days, dtype=float)
        oil_rate = peak_oil_rate * np.exp(-decline_rate * t)
        oil_rate += self.rng.normal(0, oil_rate * 0.05)  # 5% noise
        oil_rate = np.clip(oil_rate, 0, None)

        # Gas-oil ratio 500–2000 Mscf/Mstb
        gor = float(self.rng.uniform(500, 2000))
        gas_rate = oil_rate * gor / 1000.0
        gas_rate += self.rng.normal(0, gas_rate * 0.05)
        gas_rate = np.clip(gas_rate, 0, None)

        # Water cut rises with time (0→60%)
        water_cut = 0.6 * (1 - np.exp(-decline_rate * 2 * t))
        water_rate = oil_rate * water_cut / (1 - water_cut + 1e-9)
        water_rate = np.clip(water_rate, 0, None)

        # Wellhead pressure declines gently
        peak_pressure = float(self.rng.uniform(1500, 4000))
        pressure = peak_pressure * np.exp(-decline_rate * 0.5 * t)
        pressure += self.rng.normal(0, 20, n_days)
        pressure = np.clip(pressure, 0, None)

        # Temperature — roughly constant with small noise
        base_temp = float(self.rng.uniform(150, 280))
        temperature = base_temp + self.rng.normal(0, 2, n_days)

        df = pd.DataFrame(
            {
                "date": [d.isoformat() for d in dates],
                "oil_rate_bbl_d": oil_rate.round(2),
                "gas_rate_mscf_d": gas_rate.round(2),
                "water_rate_bbl_d": water_rate.round(2),
                "wellhead_pressure_psi": pressure.round(1),
                "temperature_f": temperature.round(1),
            }
        )

        file_path = os.path.join(output_dir, f"{well_name}_production.csv")
        df.to_csv(file_path, index=False)
        return file_path

    def create_dataset(
        self,
        n_records: int,
        well_names: Optional[List[str]] = None,
        n_days: int = 730,
        start_date: str = "2022-01-01",
        output_dir: str = None,
        **kwargs,
    ) -> List[str]:
        """Generate production CSVs for multiple wells.

        Args:
            n_records: Number of wells.
            well_names: Well identifiers (auto-generated if None).
            n_days: Daily samples per well.
            start_date: ISO date string for first sample.
            output_dir: Directory to write files.

        Returns:
            List of paths to generated CSV files.
        """
        if well_names is None:
            well_names = [f"Well-{i:03d}" for i in range(n_records)]
        if len(well_names) < n_records:
            well_names = list(well_names) + [
                f"Well-{i:03d}" for i in range(len(well_names), n_records)
            ]
        if output_dir is None:
            output_dir = tempfile.mkdtemp()
        os.makedirs(output_dir, exist_ok=True)

        return [
            self.create_record(
                well_name=well_names[i],
                n_days=n_days,
                start_date=start_date,
                output_dir=output_dir,
            )
            for i in range(n_records)
        ]
```

- [ ] Create `synthetic_data/scada/__init__.py`:

```python
"""SCADA time series synthetic data generation."""
from synthetic_data.scada.timeseries_generator import TimeSeriesGenerator

__all__ = ["TimeSeriesGenerator"]
```

### Step 1.4 — Run tests to confirm they pass

- [ ] Run: `pytest tests/synthetic_data/test_scada_generator.py -v`
- Expected: all 6 tests PASS

### Step 1.5 — Commit

- [ ] Run:

```bash
git add synthetic_data/scada/ tests/synthetic_data/test_scada_generator.py
git commit -m "feat: add TimeSeriesGenerator for SCADA production history"
```

---

## Task 2: SEGYMapper (seismic OSDU manifest)

**Files:**
- Create: `synthetic_data/osdu/seismic_mapper.py`
- Modify: `synthetic_data/osdu/__init__.py`
- Create: `tests/synthetic_data/test_seismic_osdu_mapper.py`

### Step 2.1 — Write failing tests

- [ ] Create `tests/synthetic_data/test_seismic_osdu_mapper.py`:

```python
"""Tests for SEGYMapper OSDU manifest generator."""
import pytest
import tempfile
import os
import segyio
import numpy as np
from synthetic_data.osdu import SEGYMapper


def _make_segy(tmpdir: str, survey_name: str = "test-survey") -> str:
    """Write a minimal valid SEG-Y file and return its path."""
    path = os.path.join(tmpdir, f"{survey_name}.sgy")
    spec = segyio.spec()
    spec.format = 1
    spec.sorting = 2
    spec.iline = 5
    spec.xline = 21
    spec.samples = np.arange(10) * 0.004
    spec.ilines = np.array([1, 2])
    spec.xlines = np.array([1, 2])
    with segyio.create(path, spec) as f:
        f.trace = np.zeros((4, 10), dtype=np.float32)
        f.bin.update({
            segyio.BinField.Traces: 4,
            segyio.BinField.Samples: 10,
            segyio.BinField.Interval: 4000,
        })
        for i in range(4):
            f.header[i].update({
                segyio.TraceField.INLINE_3D: spec.ilines[i // 2],
                segyio.TraceField.CROSSLINE_3D: spec.xlines[i % 2],
            })
    return path


def test_segy_mapper_returns_manifest():
    """to_manifest should return a dict with OSDU structure."""
    mapper = SEGYMapper()
    with tempfile.TemporaryDirectory() as tmpdir:
        segy_path = _make_segy(tmpdir)
        manifest = mapper.to_manifest(
            segy_path,
            legal_tags={"legaltags": ["test-tag"]},
        )
        assert isinstance(manifest, dict)
        assert "data" in manifest
        assert "WorkProduct" in manifest["data"]


def test_segy_mapper_kind():
    """Manifest WorkProduct kind should be SeismicTraceData."""
    mapper = SEGYMapper()
    with tempfile.TemporaryDirectory() as tmpdir:
        segy_path = _make_segy(tmpdir)
        manifest = mapper.to_manifest(
            segy_path,
            legal_tags={"legaltags": ["test-tag"]},
        )
        kind = manifest["data"]["WorkProduct"]["kind"]
        assert "SeismicTraceData" in kind


def test_segy_mapper_legal_tags():
    """Manifest should include provided legal tags."""
    mapper = SEGYMapper()
    with tempfile.TemporaryDirectory() as tmpdir:
        segy_path = _make_segy(tmpdir)
        manifest = mapper.to_manifest(
            segy_path,
            legal_tags={"legaltags": ["my-legal-tag"]},
        )
        legal = manifest["data"]["WorkProduct"]["legal"]
        assert "my-legal-tag" in legal["legaltags"]


def test_segy_mapper_survey_name_in_id():
    """Manifest ID should contain the survey name derived from filename."""
    mapper = SEGYMapper()
    with tempfile.TemporaryDirectory() as tmpdir:
        segy_path = _make_segy(tmpdir, survey_name="ppr-1_3d_survey")
        manifest = mapper.to_manifest(
            segy_path,
            legal_tags={"legaltags": ["tag"]},
        )
        entity_id = manifest["data"]["WorkProduct"]["id"]
        assert "ppr-1" in entity_id or "ppr" in entity_id
```

### Step 2.2 — Run tests to confirm they fail

- [ ] Run: `pytest tests/synthetic_data/test_seismic_osdu_mapper.py -v`
- Expected: `ImportError` — `SEGYMapper` not yet exported

### Step 2.3 — Implement SEGYMapper

- [ ] Create `synthetic_data/osdu/seismic_mapper.py`:

```python
"""Map SEG-Y files to OSDU SeismicTraceData manifests."""
import os
from typing import Dict
from datetime import datetime, timezone
import segyio

from synthetic_data.osdu.mapper import OSDUMapper


class SEGYMapper(OSDUMapper):
    """Convert SEG-Y files to OSDU SeismicTraceData manifests."""

    def to_manifest(self, segy_path: str, legal_tags: Dict) -> Dict:
        """Convert a SEG-Y file to an OSDU SeismicTraceData manifest.

        Args:
            segy_path: Path to SEG-Y file.
            legal_tags: OSDU legal tags dictionary.

        Returns:
            OSDU manifest dictionary.
        """
        survey_name = os.path.splitext(os.path.basename(segy_path))[0]

        with segyio.open(segy_path, ignore_geometry=True) as f:
            n_traces = f.tracecount
            n_samples = len(f.samples)
            sample_interval_us = int(f.bin[segyio.BinField.Interval])

        sample_interval_ms = sample_interval_us / 1000.0
        total_time_ms = n_samples * sample_interval_ms

        manifest = {
            "kind": "osdu:wks:Manifest:1.0.0",
            "data": {
                "WorkProduct": {
                    "kind": "osdu:wks:work-product--SeismicTraceData:1.0.0",
                    "id": self._build_id("work-product--SeismicTraceData", survey_name),
                    "legal": self._build_legal(legal_tags),
                    "data": {
                        "Name": survey_name,
                        "Description": f"Synthetic 3D seismic survey: {survey_name}",
                        "Source": "Synthetic Data Generator",
                        "CreationDateTime": datetime.now(timezone.utc).isoformat(),
                        "TraceCount": n_traces,
                        "SampleCount": n_samples,
                        "SampleIntervalMs": sample_interval_ms,
                        "TotalTimeMs": total_time_ms,
                    },
                }
            },
        }

        return manifest
```

- [ ] Update `synthetic_data/osdu/__init__.py`:

```python
"""OSDU schema mapping for synthetic data."""
from synthetic_data.osdu.mapper import OSDUMapper
from synthetic_data.osdu.well_log_mapper import LASMapper
from synthetic_data.osdu.seismic_mapper import SEGYMapper
from synthetic_data.osdu.scada_mapper import SCADAMapper

__all__ = ["OSDUMapper", "LASMapper", "SEGYMapper", "SCADAMapper"]
```

> Note: `SCADAMapper` will be added in Task 3. Add the import here now but it will cause an ImportError until Task 3 is done. Alternatively, add only `SEGYMapper` now and add `SCADAMapper` in Task 3 — **do it in two steps**: add `SEGYMapper` in this step, add `SCADAMapper` after Task 3 is done.

For this step only, set `__init__.py` to:

```python
"""OSDU schema mapping for synthetic data."""
from synthetic_data.osdu.mapper import OSDUMapper
from synthetic_data.osdu.well_log_mapper import LASMapper
from synthetic_data.osdu.seismic_mapper import SEGYMapper

__all__ = ["OSDUMapper", "LASMapper", "SEGYMapper"]
```

### Step 2.4 — Run tests to confirm they pass

- [ ] Run: `pytest tests/synthetic_data/test_seismic_osdu_mapper.py -v`
- Expected: all 4 tests PASS

### Step 2.5 — Commit

- [ ] Run:

```bash
git add synthetic_data/osdu/seismic_mapper.py synthetic_data/osdu/__init__.py \
        tests/synthetic_data/test_seismic_osdu_mapper.py
git commit -m "feat: add SEGYMapper for OSDU SeismicTraceData manifests"
```

---

## Task 3: SCADAMapper (production OSDU manifest)

**Files:**
- Create: `synthetic_data/osdu/scada_mapper.py`
- Modify: `synthetic_data/osdu/__init__.py`
- Create: `tests/synthetic_data/test_scada_osdu_mapper.py`

### Step 3.1 — Write failing tests

- [ ] Create `tests/synthetic_data/test_scada_osdu_mapper.py`:

```python
"""Tests for SCADAMapper OSDU manifest generator."""
import pytest
import tempfile
import os
import pandas as pd
from synthetic_data.osdu import SCADAMapper


def _make_csv(tmpdir: str, well_name: str = "Test-Well-001") -> str:
    """Write a minimal production CSV and return its path."""
    path = os.path.join(tmpdir, f"{well_name}_production.csv")
    df = pd.DataFrame({
        "date": ["2022-01-01", "2022-01-02"],
        "oil_rate_bbl_d": [500.0, 490.0],
        "gas_rate_mscf_d": [1000.0, 980.0],
        "water_rate_bbl_d": [50.0, 55.0],
        "wellhead_pressure_psi": [2000.0, 1990.0],
        "temperature_f": [200.0, 201.0],
    })
    df.to_csv(path, index=False)
    return path


def test_scada_mapper_returns_manifest():
    """to_manifest should return a dict with OSDU structure."""
    mapper = SCADAMapper()
    with tempfile.TemporaryDirectory() as tmpdir:
        csv_path = _make_csv(tmpdir)
        manifest = mapper.to_manifest(
            csv_path,
            legal_tags={"legaltags": ["test-tag"]},
        )
        assert isinstance(manifest, dict)
        assert "data" in manifest
        assert "WorkProduct" in manifest["data"]


def test_scada_mapper_kind():
    """Manifest WorkProduct kind should reference Facility."""
    mapper = SCADAMapper()
    with tempfile.TemporaryDirectory() as tmpdir:
        csv_path = _make_csv(tmpdir)
        manifest = mapper.to_manifest(
            csv_path,
            legal_tags={"legaltags": ["test-tag"]},
        )
        kind = manifest["data"]["WorkProduct"]["kind"]
        assert "Facility" in kind or "ProductionData" in kind


def test_scada_mapper_legal_tags():
    """Manifest should include provided legal tags."""
    mapper = SCADAMapper()
    with tempfile.TemporaryDirectory() as tmpdir:
        csv_path = _make_csv(tmpdir)
        manifest = mapper.to_manifest(
            csv_path,
            legal_tags={"legaltags": ["my-legal-tag"]},
        )
        legal = manifest["data"]["WorkProduct"]["legal"]
        assert "my-legal-tag" in legal["legaltags"]


def test_scada_mapper_well_name_in_id():
    """Manifest ID should contain the well name."""
    mapper = SCADAMapper()
    with tempfile.TemporaryDirectory() as tmpdir:
        csv_path = _make_csv(tmpdir, well_name="PPR1-Well-007")
        manifest = mapper.to_manifest(
            csv_path,
            legal_tags={"legaltags": ["tag"]},
        )
        entity_id = manifest["data"]["WorkProduct"]["id"]
        assert "PPR1" in entity_id or "PPR1-Well-007" in entity_id
```

### Step 3.2 — Run tests to confirm they fail

- [ ] Run: `pytest tests/synthetic_data/test_scada_osdu_mapper.py -v`
- Expected: `ImportError` — `SCADAMapper` not yet exported

### Step 3.3 — Implement SCADAMapper

- [ ] Create `synthetic_data/osdu/scada_mapper.py`:

```python
"""Map SCADA CSV files to OSDU Facility production manifests."""
import os
import re
from typing import Dict
from datetime import datetime, timezone
import pandas as pd

from synthetic_data.osdu.mapper import OSDUMapper


class SCADAMapper(OSDUMapper):
    """Convert SCADA production CSV files to OSDU Facility manifests."""

    def to_manifest(self, csv_path: str, legal_tags: Dict) -> Dict:
        """Convert a SCADA CSV to an OSDU Facility production manifest.

        Args:
            csv_path: Path to production CSV file (output of TimeSeriesGenerator).
            legal_tags: OSDU legal tags dictionary.

        Returns:
            OSDU manifest dictionary.
        """
        filename = os.path.splitext(os.path.basename(csv_path))[0]
        # Remove trailing _production suffix if present
        well_name = re.sub(r"_production$", "", filename)

        df = pd.read_csv(csv_path, parse_dates=["date"])
        start_date = df["date"].min().isoformat()
        end_date = df["date"].max().isoformat()
        n_samples = len(df)

        manifest = {
            "kind": "osdu:wks:Manifest:1.0.0",
            "data": {
                "WorkProduct": {
                    "kind": "osdu:wks:master-data--Facility:1.0.0",
                    "id": self._build_id("master-data--Facility", well_name),
                    "legal": self._build_legal(legal_tags),
                    "data": {
                        "FacilityName": well_name,
                        "FacilityTypeID": "Well",
                        "Source": "Synthetic Data Generator",
                        "CreationDateTime": datetime.now(timezone.utc).isoformat(),
                        "ProductionDateRange": {
                            "Start": start_date,
                            "End": end_date,
                        },
                        "SampleCount": n_samples,
                        "Measurements": [
                            "oil_rate_bbl_d",
                            "gas_rate_mscf_d",
                            "water_rate_bbl_d",
                            "wellhead_pressure_psi",
                            "temperature_f",
                        ],
                    },
                }
            },
        }

        return manifest
```

- [ ] Update `synthetic_data/osdu/__init__.py` to add `SCADAMapper`:

```python
"""OSDU schema mapping for synthetic data."""
from synthetic_data.osdu.mapper import OSDUMapper
from synthetic_data.osdu.well_log_mapper import LASMapper
from synthetic_data.osdu.seismic_mapper import SEGYMapper
from synthetic_data.osdu.scada_mapper import SCADAMapper

__all__ = ["OSDUMapper", "LASMapper", "SEGYMapper", "SCADAMapper"]
```

### Step 3.4 — Run all OSDU mapper tests

- [ ] Run: `pytest tests/synthetic_data/test_scada_osdu_mapper.py tests/synthetic_data/test_seismic_osdu_mapper.py tests/synthetic_data/test_osdu_mappers.py -v`
- Expected: all tests PASS

### Step 3.5 — Commit

- [ ] Run:

```bash
git add synthetic_data/osdu/scada_mapper.py synthetic_data/osdu/__init__.py \
        tests/synthetic_data/test_scada_osdu_mapper.py
git commit -m "feat: add SCADAMapper for OSDU Facility production manifests"
```

---

## Task 4: Update .gitignore

**Files:**
- Modify: `.gitignore`

### Step 4.1 — Add examples/data/ to .gitignore

- [ ] Add the following line to `.gitignore` (after the existing entries):

```
examples/data/
```

### Step 4.2 — Commit

- [ ] Run:

```bash
git add .gitignore
git commit -m "chore: gitignore examples/data/ generated output"
```

---

## Task 5: Main example script

**Files:**
- Create: `examples/generate_reservoir_dataset.py`

### Step 5.1 — Create the script

- [ ] Create `examples/generate_reservoir_dataset.py`:

```python
#!/usr/bin/env python3
"""Generate a complete synthetic dataset for reservoir ppr-1.

Usage:
    python examples/generate_reservoir_dataset.py
    python examples/generate_reservoir_dataset.py --reservoir ppr-2
    python examples/generate_reservoir_dataset.py --reservoir ppr-1 --seed 42

This script demonstrates the petropowers synthetic_data framework by
generating all major data types for a synthetic oil field.
"""
import argparse
import json
import os
import sys
from pathlib import Path
from typing import Dict, List

import numpy as np

# ---------------------------------------------------------------------------
# Generator imports — these show the petropowers framework API explicitly
# ---------------------------------------------------------------------------
from synthetic_data.well_log import LASGenerator
from synthetic_data.seismic import SEGYGenerator
from synthetic_data.scada import TimeSeriesGenerator
from synthetic_data.osdu import LASMapper, SEGYMapper, SCADAMapper

# Core photos require an AI API key — import is deferred and guarded
CORE_PHOTOS_AVAILABLE = True
try:
    from synthetic_data.core_photos import CorePhotoGenerator
except Exception:
    CORE_PHOTOS_AVAILABLE = False

# ---------------------------------------------------------------------------
# Constants
# ---------------------------------------------------------------------------
N_WELLS = 50
WELL_PREFIX = "PPR1-Well"
LITHOLOGIES = (
    ["sandstone"] * 30 + ["shale"] * 15 + ["carbonate"] * 5
)
DEPTH_RANGE = (1500.0, 3500.0)
SAMPLE_INTERVAL = 0.15
CURVES = ["GR", "RHOB", "NPHI", "RT", "DT"]

SEISMIC_INLINE_START = 100
SEISMIC_CROSSLINE_START = 200
SEISMIC_N = 50  # 50 inlines × 50 crosslines
SEISMIC_N_SAMPLES = 251  # 0–1000 ms @ 4 ms
SEISMIC_SAMPLE_INTERVAL_US = 4000  # 4 ms in microseconds

N_PRODUCTION_DAYS = 730  # 2 years
CORE_PHOTO_WELLS = ["PPR1-Well-001", "PPR1-Well-002"]
CORE_PHOTOS_PER_WELL = 5
CORE_PHOTO_DEPTH_RANGE = (2000.0, 2500.0)

LEGAL_TAGS = {
    "legaltags": ["synthetic-data-example"],
    "otherRelevantDataCountries": ["US"],
}


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def well_names(n: int = N_WELLS, prefix: str = WELL_PREFIX) -> List[str]:
    return [f"{prefix}-{i:03d}" for i in range(1, n + 1)]


def _print(msg: str) -> None:
    print(f"[ppr-1] {msg}", flush=True)


# ---------------------------------------------------------------------------
# Per-type generation functions
# ---------------------------------------------------------------------------

def generate_well_logs(output_dir: str, names: List[str], seed: int) -> List[str]:
    """Generate 50 LAS well log files."""
    _print(f"Generating {len(names)} LAS well logs …")
    gen = LASGenerator(seed=seed)
    paths = []
    for i, name in enumerate(names):
        lithology = LITHOLOGIES[i % len(LITHOLOGIES)]
        try:
            path = gen.create_record(
                well_name=name,
                curves=CURVES,
                depth_range=DEPTH_RANGE,
                sample_interval=SAMPLE_INTERVAL,
                lithology=lithology,
                field_name="PPR-1 Field",
                company="PetroPowers Synthetic",
                output_dir=output_dir,
            )
            paths.append(path)
        except Exception as exc:
            _print(f"  [WARN] {name}: {exc}")
    _print(f"  → {len(paths)} LAS files written to {output_dir}")
    return paths


def generate_seismic(output_dir: str, reservoir: str, seed: int) -> str:
    """Generate one 3D SEG-Y volume."""
    _print("Generating 3D seismic volume …")
    gen = SEGYGenerator(seed=seed)
    survey_name = f"{reservoir}_3d_survey"
    try:
        path = gen.create_record(
            survey_name=survey_name,
            n_inlines=SEISMIC_N,
            n_crosslines=SEISMIC_N,
            n_samples=SEISMIC_N_SAMPLES,
            sample_interval=SEISMIC_SAMPLE_INTERVAL_US,
            inline_start=SEISMIC_INLINE_START,
            crossline_start=SEISMIC_CROSSLINE_START,
            output_dir=output_dir,
        )
        _print(f"  → SEG-Y written to {path}")
        return path
    except Exception as exc:
        _print(f"  [WARN] SEG-Y generation failed: {exc}")
        return ""


def generate_production(output_dir: str, names: List[str], seed: int) -> List[str]:
    """Generate 50 SCADA production CSV files (2 years daily)."""
    _print(f"Generating {len(names)} production history files …")
    gen = TimeSeriesGenerator(seed=seed)
    paths = []
    for name in names:
        try:
            path = gen.create_record(
                well_name=name,
                n_days=N_PRODUCTION_DAYS,
                output_dir=output_dir,
            )
            paths.append(path)
        except Exception as exc:
            _print(f"  [WARN] {name}: {exc}")
    _print(f"  → {len(paths)} production CSV files written to {output_dir}")
    return paths


def generate_well_paths(output_dir: str, names: List[str], seed: int) -> List[str]:
    """Generate 50 deviated well path JSON files (S-curve trajectories).

    NOTE: No WellPathGenerator exists in synthetic_data/ yet.
    This function implements a minimal S-curve inline using numpy.
    See spec §Implementation Notes for details.
    """
    _print(f"Generating {len(names)} well path JSON files …")
    rng = np.random.default_rng(seed)
    os.makedirs(output_dir, exist_ok=True)
    paths = []

    for name in names:
        # S-curve: vertical section → build angle → hold angle
        total_md = float(rng.uniform(2000, 4000))
        n_points = 200
        md = np.linspace(0, total_md, n_points)

        # Build-up from 0° to target inclination over first 40% of MD
        target_inc = float(rng.uniform(20, 60))
        build_end = total_md * 0.4
        inclination = np.where(
            md <= build_end,
            target_inc * (md / build_end),
            target_inc,
        )

        # Azimuth — constant (N45E ± some noise)
        azimuth_base = float(rng.uniform(0, 360))
        azimuth = np.full(n_points, azimuth_base) + rng.normal(0, 1, n_points)

        # TVD via numerical integration of cos(inc)
        inc_rad = np.deg2rad(inclination)
        d_md = np.diff(md, prepend=md[0])
        tvd = np.cumsum(d_md * np.cos(inc_rad))

        well_path = {
            "well_name": name,
            "md_m": md.round(2).tolist(),
            "tvd_m": tvd.round(2).tolist(),
            "inclination_deg": inclination.round(2).tolist(),
            "azimuth_deg": azimuth.round(2).tolist(),
        }

        file_path = os.path.join(output_dir, f"{name}_path.json")
        with open(file_path, "w") as f:
            json.dump(well_path, f, indent=2)
        paths.append(file_path)

    _print(f"  → {len(paths)} well path JSON files written to {output_dir}")
    return paths


def generate_core_photos(output_dir: str, seed: int) -> List[str]:
    """Generate core photos for PPR1-Well-001 and PPR1-Well-002 (up to 5 each).

    Requires GOOGLE_AI_API_KEY. If unavailable, skips with a clear message.
    """
    api_key = os.environ.get("GOOGLE_AI_API_KEY")
    if not api_key or not CORE_PHOTOS_AVAILABLE:
        _print(
            "[SKIP] Core photo generation requires AI API access "
            "(set GOOGLE_AI_API_KEY environment variable).\n"
            "       To generate core photos, configure your API key and re-run."
        )
        return []

    _print(f"Generating core photos for {CORE_PHOTO_WELLS} …")
    paths = []
    try:
        gen = CorePhotoGenerator(api_key=api_key, seed=seed)
        for well in CORE_PHOTO_WELLS:
            well_dir = os.path.join(output_dir, well)
            os.makedirs(well_dir, exist_ok=True)
            for _ in range(CORE_PHOTOS_PER_WELL):
                try:
                    result = gen.create_record(
                        well_name=well,
                        depth_range=CORE_PHOTO_DEPTH_RANGE,
                        lithology="sandstone",
                        field_name="PPR-1 Field",
                        formation="PPR-1 Formation",
                        output_dir=well_dir,
                    )
                    paths.append(result["image_path"])
                except Exception as exc:
                    _print(f"  [WARN] {well} photo failed: {exc}")
    except Exception as exc:
        _print(f"  [WARN] CorePhotoGenerator init failed: {exc}")

    _print(f"  → {len(paths)} core photos written")
    return paths


def generate_osdu_manifests(
    output_dir: str,
    las_paths: List[str],
    segy_path: str,
    scada_paths: List[str],
) -> List[str]:
    """Generate OSDU manifests for all entities."""
    _print("Generating OSDU manifests …")
    paths = []

    las_mapper = LASMapper()
    segy_mapper = SEGYMapper()
    scada_mapper = SCADAMapper()

    # Well / Wellbore / WellLog manifests (one per LAS file)
    well_log_dir = os.path.join(output_dir, "well_log")
    os.makedirs(well_log_dir, exist_ok=True)
    for las_path in las_paths:
        try:
            manifest = las_mapper.to_manifest(las_path, LEGAL_TAGS)
            well_name = manifest["data"]["WorkProduct"]["data"]["WellboreID"]
            safe_name = well_name.replace(":", "_").replace("/", "_")
            out_path = os.path.join(well_log_dir, f"{safe_name}.json")
            with open(out_path, "w") as f:
                json.dump(manifest, f, indent=2)
            paths.append(out_path)
        except Exception as exc:
            _print(f"  [WARN] LAS manifest for {las_path}: {exc}")

    # SeismicTraceData manifest
    if segy_path:
        seismic_dir = os.path.join(output_dir, "seismic")
        os.makedirs(seismic_dir, exist_ok=True)
        try:
            manifest = segy_mapper.to_manifest(segy_path, LEGAL_TAGS)
            survey_name = manifest["data"]["WorkProduct"]["data"]["Name"]
            safe_name = survey_name.replace(":", "_").replace("/", "_")
            out_path = os.path.join(seismic_dir, f"{safe_name}.json")
            with open(out_path, "w") as f:
                json.dump(manifest, f, indent=2)
            paths.append(out_path)
        except Exception as exc:
            _print(f"  [WARN] SEG-Y manifest: {exc}")

    # Facility (production) manifests
    facility_dir = os.path.join(output_dir, "facility")
    os.makedirs(facility_dir, exist_ok=True)
    for scada_path in scada_paths:
        try:
            manifest = scada_mapper.to_manifest(scada_path, LEGAL_TAGS)
            facility_name = manifest["data"]["WorkProduct"]["data"]["FacilityName"]
            safe_name = facility_name.replace(":", "_").replace("/", "_")
            out_path = os.path.join(facility_dir, f"{safe_name}.json")
            with open(out_path, "w") as f:
                json.dump(manifest, f, indent=2)
            paths.append(out_path)
        except Exception as exc:
            _print(f"  [WARN] SCADA manifest for {scada_path}: {exc}")

    _print(f"  → {len(paths)} OSDU manifests written to {output_dir}")
    return paths


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    parser = argparse.ArgumentParser(
        description="Generate synthetic reservoir dataset using petropowers."
    )
    parser.add_argument(
        "--reservoir",
        default="ppr-1",
        help="Reservoir name (default: ppr-1). Controls output folder.",
    )
    parser.add_argument(
        "--seed",
        type=int,
        default=42,
        help="Random seed for reproducibility (default: 42).",
    )
    args = parser.parse_args()

    reservoir = args.reservoir
    seed = args.seed

    # Output root: examples/data/<reservoir>/
    script_dir = Path(__file__).parent
    data_root = script_dir / "data" / reservoir

    dirs: Dict[str, str] = {
        "well_logs": str(data_root / "well_logs"),
        "seismic": str(data_root / "seismic"),
        "production": str(data_root / "production"),
        "well_paths": str(data_root / "well_paths"),
        "core_photos": str(data_root / "core_photos"),
        "osdu_manifests": str(data_root / "osdu_manifests"),
    }
    for d in dirs.values():
        os.makedirs(d, exist_ok=True)

    print(f"\n{'='*60}")
    print(f"  petropowers — Reservoir Dataset Generator")
    print(f"  Reservoir : {reservoir}")
    print(f"  Output    : {data_root}")
    print(f"  Seed      : {seed}")
    print(f"{'='*60}\n")

    names = well_names()

    las_paths = generate_well_logs(dirs["well_logs"], names, seed)
    segy_path = generate_seismic(dirs["seismic"], reservoir, seed)
    scada_paths = generate_production(dirs["production"], names, seed)
    _path_well_paths = generate_well_paths(dirs["well_paths"], names, seed)
    _photo_paths = generate_core_photos(dirs["core_photos"], seed)
    _manifest_paths = generate_osdu_manifests(
        dirs["osdu_manifests"], las_paths, segy_path, scada_paths
    )

    print(f"\n{'='*60}")
    print(f"  Dataset complete: {data_root}")
    print(f"  Well logs     : {len(las_paths)}")
    print(f"  Seismic       : {'1' if segy_path else '0'}")
    print(f"  Production    : {len(scada_paths)}")
    print(f"  Well paths    : {len(_path_well_paths)}")
    print(f"  Core photos   : {len(_photo_paths)}")
    print(f"  OSDU manifests: {len(_manifest_paths)}")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
```

### Step 5.2 — Smoke-test the script (dry run)

- [ ] Run (from repo root):

```bash
python examples/generate_reservoir_dataset.py --help
```

- Expected: help text printed, no import errors.

### Step 5.3 — Run the full script

- [ ] Run:

```bash
python examples/generate_reservoir_dataset.py --reservoir ppr-1 --seed 42
```

- Expected: script completes, prints summary table, no unhandled exceptions.

### Step 5.4 — Spot-check outputs

- [ ] Run:

```bash
python - <<'EOF'
import lasio, os, glob
files = glob.glob("examples/data/ppr-1/well_logs/*.las")
print(f"LAS files: {len(files)}")
log = lasio.read(files[0])
print(f"First well curves: {list(log.keys())}")
EOF
```

- Expected: `LAS files: 50` and curves list including `GR`, `RHOB`, etc.

- [ ] Run:

```bash
python - <<'EOF'
import segyio, glob
files = glob.glob("examples/data/ppr-1/seismic/*.sgy")
print(f"SEG-Y files: {len(files)}")
with segyio.open(files[0], ignore_geometry=True) as f:
    print(f"Traces: {f.tracecount}, Samples: {len(f.samples)}")
EOF
```

- Expected: `SEG-Y files: 1`, trace count 2500 (50×50).

- [ ] Run:

```bash
python - <<'EOF'
import pandas as pd, glob
files = glob.glob("examples/data/ppr-1/production/*.csv")
print(f"Production files: {len(files)}")
df = pd.read_csv(files[0])
print(f"Rows: {len(df)}, Columns: {list(df.columns)}")
EOF
```

- Expected: `Production files: 50`, `Rows: 730`.

- [ ] Run:

```bash
python - <<'EOF'
import json, glob
files = glob.glob("examples/data/ppr-1/well_paths/*.json")
print(f"Well path files: {len(files)}")
with open(files[0]) as f:
    wp = json.load(f)
print(f"Keys: {list(wp.keys())}, MD points: {len(wp['md_m'])}")
EOF
```

- Expected: `Well path files: 50`, 200 MD points.

### Step 5.5 — Commit

- [ ] Run:

```bash
git add examples/generate_reservoir_dataset.py
git commit -m "feat: add generate_reservoir_dataset.py example script for ppr-1"
```

---

## Task 6: Run full test suite

### Step 6.1 — Run all tests

- [ ] Run: `pytest tests/ -v`
- Expected: all tests pass, no regressions.

### Step 6.2 — Commit if any fixups were needed

- [ ] If fixes were required, commit them:

```bash
git add -A
git commit -m "fix: address test suite issues after example script integration"
```

---

## Self-Review Checklist

After writing this plan, I checked it against the spec:

| Spec requirement | Covered in |
|---|---|
| 50 LAS files (GR, RHOB, NPHI, RT, DT) | Task 5 `generate_well_logs` |
| 30 sandstone / 15 shale / 5 carbonate | Task 5 `LITHOLOGIES` constant |
| 1 SEG-Y 50×50 inlines, 0–1000 ms @ 4 ms | Task 5 `generate_seismic` |
| 50 SCADA CSV, 730 rows, 5 measurements | Task 1 + Task 5 `generate_production` |
| 50 well path JSON (S-curve, MD/TVD/inc/az) | Task 5 `generate_well_paths` |
| Core photos 2 wells × 5, guarded skip | Task 5 `generate_core_photos` |
| OSDU WellLog manifests ×50 | Task 5 `generate_osdu_manifests` |
| OSDU SeismicTraceData manifest ×1 | Task 2 + Task 5 |
| OSDU Facility manifests ×50 | Task 3 + Task 5 |
| `--reservoir` CLI arg | Task 5 `main()` |
| `examples/data/` gitignored | Task 4 |
| TDD for new generators | Tasks 1–3 |
| Frequent commits | Each task has a commit step |
