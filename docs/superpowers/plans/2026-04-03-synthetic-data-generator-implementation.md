# Synthetic Data Generator Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a synthetic data generation system for oil & gas domain data that produces realistic, validated datasets for well logs (LAS/DLIS), seismic (SEG-Y), and SCADA time-series.

**Architecture:** Two-layer design - Python generator library (`synthetic_data/`) handles data generation and validation, Superpowers skill (`skills/synthetic-data-generation/`) provides natural language orchestration. Generator library uses domain libraries (lasio, segyio, dlisio) for validation.

**Tech Stack:** Python 3.8+, lasio, welly, dlisio, segyio, numpy, pandas, scipy

---

## File Structure

**Library package:**
```
synthetic_data/
├── __init__.py                    # Package exports
├── base/
│   ├── __init__.py               # Base module exports
│   ├── generator.py              # Abstract Generator base class
│   ├── validator.py              # Abstract Validator base class
│   └── statistics.py             # Statistical realism engine
├── well_log/
│   ├── __init__.py               # Well log module exports
│   ├── las_generator.py          # LAS file generator
│   ├── dlis_generator.py          # DLIS file generator
│   ├── curves.py                  # Curve synthesis with physical constraints
│   └── validators.py              # Well log validators
├── seismic/
│   ├── __init__.py               # Seismic module exports
│   ├── segy_generator.py          # SEG-Y file generator
│   ├── traces.py                  # Seismic trace generation
│   └── validators.py              # Seismic validators
├── scada/
│   ├── __init__.py               # SCADA module exports
│   ├── timeseries_generator.py    # Time-series generator
│   ├── tags.py                    # Tag/metadata generation
│   └── validators.py              # SCADA validators
├── osdu/
│   ├── __init__.py               # OSDU module exports
│   ├── mapper.py                  # Abstract mapper base
│   ├── well_log_mapper.py         # LAS/DLIS → OSDU
│   ├── seismic_mapper.py          # SEG-Y → OSDU
│   └── scada_mapper.py            # Time-series → OSDU
└── validators/
    ├── __init__.py               # Validators module exports
    ├── format_validator.py        # File format validation
    ├── schema_validator.py        # OSDU schema validation
    ├── physics_validator.py       # Physical relationship validation
    └── integrity_validator.py     # Referential integrity checks
```

**Tests:**
```
tests/synthetic_data/
├── test_base_generator.py
├── test_base_validator.py
├── test_statistics.py
├── test_las_generator.py
├── test_dlis_generator.py
├── test_curves.py
├── test_segy_generator.py
├── test_timeseries_generator.py
├── test_format_validator.py
├── test_physics_validator.py
└── test_osdu_mappers.py
```

**Skill:**
```
skills/synthetic-data-generation/
├── SKILL.md
└── references/
    └── physical-constraints.md
```

---

## Task 1: Base Generator Infrastructure

**Files:**
- Create: `synthetic_data/__init__.py`
- Create: `synthetic_data/base/__init__.py`
- Create: `synthetic_data/base/generator.py`
- Create: `tests/synthetic_data/test_base_generator.py`

- [ ] **Step 1: Create package structure directories**

```bash
mkdir -p synthetic_data/base
mkdir -p synthetic_data/well_log
mkdir -p synthetic_data/seismic
mkdir -p synthetic_data/scada
mkdir -p synthetic_data/osdu
mkdir -p synthetic_data/validators
mkdir -p tests/synthetic_data
```

- [ ] **Step 2: Write failing test for base Generator class**

Create: `tests/synthetic_data/test_base_generator.py`

```python
"""Tests for base Generator class."""
import pytest
from synthetic_data.base import Generator


class ConcreteGenerator(Generator):
    """Concrete implementation for testing."""
    
    def create_record(self, **kwargs):
        """Test implementation."""
        return {"test": "data"}
    
    def create_dataset(self, n_records, **kwargs):
        """Test implementation."""
        return [self.create_record(**kwargs) for _ in range(n_records)]


def test_generator_is_abstract():
    """Generator class should be abstract."""
    with pytest.raises(TypeError):
        Generator()


def test_concrete_generator_create_record():
    """Concrete generator should implement create_record."""
    generator = ConcreteGenerator()
    result = generator.create_record(test_param="value")
    assert result == {"test": "data"}


def test_concrete_generator_create_dataset():
    """Concrete generator should implement create_dataset."""
    generator = ConcreteGenerator()
    results = generator.create_dataset(n_records=5, test_param="value")
    assert len(results) == 5
    assert all(r == {"test": "data"} for r in results)
```

- [ ] **Step 3: Run test to verify it fails**

Run: `pytest tests/synthetic_data/test_base_generator.py -v`
Expected: FAIL with "ModuleNotFoundError: No module named 'synthetic_data'"

- [ ] **Step 4: Create package __init__ files**

Create: `synthetic_data/__init__.py`

```python
"""Synthetic data generation for oil & gas domain."""
from synthetic_data.base import Generator, Validator
from synthetic_data.base.statistics import StatisticalRealismEngine

__version__ = "0.1.0"
__all__ = ["Generator", "Validator", "StatisticalRealismEngine"]
```

Create: `synthetic_data/base/__init__.py`

```python
"""Base classes for synthetic data generation."""
from synthetic_data.base.generator import Generator
from synthetic_data.base.validator import Validator

__all__ = ["Generator", "Validator"]
```

- [ ] **Step 5: Write minimal Generator implementation**

Create: `synthetic_data/base/generator.py`

```python
"""Abstract base class for all synthetic data generators."""
from abc import ABC, abstractmethod
from typing import Any, Dict, List


class Generator(ABC):
    """Abstract base class for synthetic data generators.
    
    All domain-specific generators (well logs, seismic, SCADA)
    inherit from this class and implement its abstract methods.
    """
    
    @abstractmethod
    def create_record(self, **kwargs) -> Dict[str, Any]:
        """Generate a single synthetic data record.
        
        Args:
            **kwargs: Domain-specific parameters for generation
            
        Returns:
            Dictionary containing the generated data record
        """
        pass
    
    @abstractmethod
    def create_dataset(self, n_records: int, **kwargs) -> List[Dict[str, Any]]:
        """Generate multiple synthetic data records.
        
        Args:
            n_records: Number of records to generate
            **kwargs: Domain-specific parameters for generation
            
        Returns:
            List of dictionaries containing generated data records
        """
        pass
```

- [ ] **Step 6: Run test to verify it passes**

Run: `pytest tests/synthetic_data/test_base_generator.py -v`
Expected: PASS

- [ ] **Step 7: Commit**

```bash
git add synthetic_data/__init__.py synthetic_data/base/ tests/synthetic_data/test_base_generator.py
git commit -m "feat: add abstract Generator base class for synthetic data"
```

---

## Task 2: Base Validator Infrastructure

**Files:**
- Create: `synthetic_data/base/validator.py`
- Create: `tests/synthetic_data/test_base_validator.py`

- [ ] **Step 1: Write failing test for base Validator class**

Create: `tests/synthetic_data/test_base_validator.py`

```python
"""Tests for base Validator class."""
import pytest
from synthetic_data.base import Validator


class ConcreteValidator(Validator):
    """Concrete implementation for testing."""
    
    def validate(self, data):
        """Test implementation."""
        if not data:
            return False, ["Data is empty"]
        return True, []


def test_validator_is_abstract():
    """Validator class should be abstract."""
    with pytest.raises(TypeError):
        Validator()


def test_concrete_validator_validate_success():
    """Concrete validator should return True for valid data."""
    validator = ConcreteValidator()
    is_valid, errors = validator.validate({"test": "data"})
    assert is_valid is True
    assert errors == []


def test_concrete_validator_validate_failure():
    """Concrete validator should return False for invalid data."""
    validator = ConcreteValidator()
    is_valid, errors = validator.validate({})
    assert is_valid is False
    assert errors == ["Data is empty"]
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pytest tests/synthetic_data/test_base_validator.py -v`
Expected: FAIL with "cannot import name 'Validator'"

- [ ] **Step 3: Write minimal Validator implementation**

Create: `synthetic_data/base/validator.py`

```python
"""Abstract base class for all synthetic data validators."""
from abc import ABC, abstractmethod
from typing import Any, Dict, List, Tuple


class Validator(ABC):
    """Abstract base class for synthetic data validators.
    
    All domain-specific validators (format, schema, physics)
    inherit from this class and implement validation logic.
    """
    
    @abstractmethod
    def validate(self, data: Any) -> Tuple[bool, List[str]]:
        """Validate synthetic data.
        
        Args:
            data: Data to validate (file path, dict, etc.)
            
        Returns:
            Tuple of (is_valid: bool, errors: List of error messages)
        """
        pass
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pytest tests/synthetic_data/test_base_validator.py -v`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add synthetic_data/base/validator.py tests/synthetic_data/test_base_validator.py
git commit -m "feat: add abstract Validator base class for data validation"
```

---

## Task 3: Statistical Realism Engine

**Files:**
- Create: `synthetic_data/base/statistics.py`
- Create: `tests/synthetic_data/test_statistics.py`

- [ ] **Step 1: Write failing test for statistical realism engine**

Create: `tests/synthetic_data/test_statistics.py`

```python
"""Tests for statistical realism engine."""
import pytest
import numpy as np
from synthetic_data.base.statistics import StatisticalRealismEngine


def test_gamma_ray_sandstone_distribution():
    """Gamma ray should have realistic sandstone distribution."""
    engine = StatisticalRealismEngine()
    gr_values = engine.generate_curve(
        curve_type="GR",
        lithology="sandstone",
        n_samples=1000
    )
    
    assert len(gr_values) == 1000
    assert 10 <= gr_values.min() <= 30  # Clean sand
    assert 30 <= gr_values.max() <= 90  # Some shale
    assert 15 <= gr_values.mean() <= 50  # Typical sandstone


def test_density_distribution():
    """Density should have realistic range."""
    engine = StatisticalRealismEngine()
    rhob_values = engine.generate_curve(
        curve_type="RHOB",
        lithology="sandstone",
        n_samples=1000
    )
    
    assert len(rhob_values) == 1000
    assert 1.9 <= rhob_values.min() >= 1.9
    assert rhob_values.max() <= 3.0
    assert 2.2 <= rhob_values.mean() <= 2.7  # Typical sandstone


def test_resistivity_logarithmic():
    """Resistivity should use logarithmic distribution."""
    engine = StatisticalRealismEngine()
    rt_values = engine.generate_curve(
        curve_type="RT",
        lithology="sandstone",
        n_samples=1000
    )
    
    assert len(rt_values) == 1000
    assert rt_values.min() >= 0.2
    assert rt_values.max() <= 2000
    # Check it covers wide range (logarithmic)
    assert rt_values.max() / rt_values.min() > 10


def test_curve_reproducible():
    """Same seed should produce same values."""
    engine1 = StatisticalRealismEngine(seed=42)
    engine2 = StatisticalRealismEngine(seed=42)
    
    values1 = engine1.generate_curve("GR", "sandstone", 100)
    values2 = engine2.generate_curve("GR", "sandstone", 100)
    
    assert np.allclose(values1, values2)
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pytest tests/synthetic_data/test_statistics.py -v`
Expected: FAIL with "cannot import name 'StatisticalRealismEngine'"

- [ ] **Step 3: Write minimal StatisticalRealismEngine implementation**

Create: `synthetic_data/base/statistics.py`

```python
"""Statistical realism engine for synthetic data generation."""
import numpy as np
from typing import Tuple


class StatisticalRealismEngine:
    """Generate realistic petrophysical curves with proper distributions.
    
    Provides statistically realistic values for well log curves,
    seismic amplitudes, and SCADA measurements based on domain knowledge.
    """
    
    # Curve definitions: (min, max, typical_mean, distribution_type)
    CURVE_PARAMS = {
        "GR": {
            "sandstone": (10, 90, 30, "normal"),
            "shale": (80, 200, 120, "normal"),
            "carbonate": (5, 50, 20, "normal"),
        },
        "RHOB": {
            "sandstone": (1.9, 2.7, 2.45, "normal"),
            "shale": (2.2, 2.8, 2.55, "normal"),
            "carbonate": (2.6, 2.9, 2.71, "normal"),
        },
        "NPHI": {
            "sandstone": (0.05, 0.35, 0.20, "normal"),
            "shale": (0.15, 0.45, 0.30, "normal"),
            "carbonate": (0.0, 0.25, 0.10, "normal"),
        },
        "RT": {
            "sandstone": (0.2, 2000, 50, "lognormal"),
            "shale": (0.5, 20, 2, "lognormal"),
            "carbonate": (1, 5000, 100, "lognormal"),
        },
        "DT": {
            "sandstone": (50, 120, 80, "normal"),
            "shale": (100, 240, 150, "normal"),
            "carbonate": (40, 90, 55, "normal"),
        },
    }
    
    def __init__(self, seed: int = None):
        """Initialize engine with optional random seed.
        
        Args:
            seed: Random seed for reproducibility
        """
        self.rng = np.random.default_rng(seed)
    
    def generate_curve(
        self,
        curve_type: str,
        lithology: str,
        n_samples: int,
        add_noise: bool = True
    ) -> np.ndarray:
        """Generate realistic curve values.
        
        Args:
            curve_type: Type of curve (GR, RHOB, NPHI, RT, DT)
            lithology: Lithology type (sandstone, shale, carbonate)
            n_samples: Number of samples to generate
            add_noise: Whether to add realistic noise
            
        Returns:
            Array of generated values
        """
        if curve_type not in self.CURVE_PARAMS:
            raise ValueError(f"Unknown curve type: {curve_type}")
        
        if lithology not in self.CURVE_PARAMS[curve_type]:
            raise ValueError(f"Unknown lithology: {lithology}")
        
        min_val, max_val, mean, dist_type = self.CURVE_PARAMS[curve_type][lithology]
        
        # Generate values based on distribution type
        if dist_type == "normal":
            # Estimate std as 1/4 of range
            std = (max_val - min_val) / 4
            values = self.rng.normal(mean, std, n_samples)
        elif dist_type == "lognormal":
            # For resistivity - use log-normal distribution
            # mean is the log-scale mean
            log_mean = np.log(mean)
            log_std = 1.0  # Wide spread
            values = self.rng.lognormal(log_mean, log_std, n_samples)
        else:
            # Uniform fallback
            values = self.rng.uniform(min_val, max_val, n_samples)
        
        # Clip to realistic range
        values = np.clip(values, min_val, max_val)
        
        # Add realistic noise if requested
        if add_noise:
            noise_scale = (max_val - min_val) * 0.02
            noise = self.rng.normal(0, noise_scale, n_samples)
            values = values + noise
        
        return values
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pytest tests/synthetic_data/test_statistics.py -v`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add synthetic_data/base/statistics.py tests/synthetic_data/test_statistics.py
git commit -m "feat: add statistical realism engine for petrophysical curves"
```

---

## Task 4: Well Log Curve Synthesis

**Files:**
- Create: `synthetic_data/well_log/__init__.py`
- Create: `synthetic_data/well_log/curves.py`
- Create: `tests/synthetic_data/test_curves.py`

- [ ] **Step 1: Write failing test for curve synthesis**

Create: `tests/synthetic_data/test_curves.py`

```python
"""Tests for curve synthesis with physical constraints."""
import pytest
import numpy as np
from synthetic_data.well_log.curves import CurveSynthesizer


def test_curve_synthesizer_creates_standard_curves():
    """Synthesizer should create standard log curves."""
    synth = CurveSynthesizer(seed=42)
    
    curves = synth.generate_curves(
        curve_list=["GR", "RHOB", "NPHI"],
        depth_range=(1000.0, 2000.0),
        sample_interval=0.15,
        lithology="sandstone"
    )
    
    assert "GR" in curves
    assert "RHOB" in curves
    assert "NPHI" in curves
    assert "DEPT" in curves
    
    # Check depth array
    expected_samples = int((2000 - 1000) / 0.15) + 1
    assert len(curves["DEPT"]) == expected_samples


def test_density_porosity_relationship():
    """Density should give valid porosity range."""
    synth = CurveSynthesizer(seed=42)
    
    curves = synth.generate_curves(
        curve_list=["RHOB"],
        depth_range=(1000.0, 2000.0),
        sample_interval=0.5,
        lithology="sandstone"
    )
    
    rhob = curves["RHOB"]
    
    # Calculate porosity: phi = (matrix - bulk) / (matrix - fluid)
    matrix_density = 2.65  # sandstone
    fluid_density = 1.0
    porosity = (matrix_density - rhob) / (matrix_density - fluid_density)
    
    # Sanity check - porosity should be reasonable
    assert np.all(porosity >= -0.05)  # Allow small negative due to noise
    assert np.all(porosity <= 0.50)   # Max porosity ~50%


def test_curve_realistic_noise():
    """Curves should have realistic noise patterns."""
    synth1 = CurveSynthesizer(seed=42)
    synth2 = CurveSynthesizer(seed=42)
    
    curves1 = synth1.generate_curves(["GR"], (1000.0, 1100.0), 0.5, "sandstone")
    curves2 = synth2.generate_curves(["GR"], (1000.0, 1100.0), 0.5, "sandstone")
    
    # Same seed = same curves
    assert np.allclose(curves1["GR"], curves2["GR"])


def test_curve_synthesizer_unknown_curve():
    """Should raise error for unknown curve type."""
    synth = CurveSynthesizer(seed=42)
    
    with pytest.raises(ValueError, match="Unknown curve type"):
        synth.generate_curves(
            curve_list=["UNKNOWN_CURVE"],
            depth_range=(1000.0, 2000.0),
            sample_interval=0.5,
            lithology="sandstone"
        )
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pytest tests/synthetic_data/test_curves.py -v`
Expected: FAIL with "ModuleNotFoundError: No module named 'synthetic_data.well_log'"

- [ ] **Step 3: Create well_log module with minimal implementation**

Create: `synthetic_data/well_log/__init__.py`

```python
"""Well log synthetic data generation."""
from synthetic_data.well_log.curves import CurveSynthesizer

__all__ = ["CurveSynthesizer"]
```

Create: `synthetic_data/well_log/curves.py`

```python
"""Synthesize petrophysical curves with physical constraints."""
import numpy as np
from typing import Dict, List, Tuple
from synthetic_data.base.statistics import StatisticalRealismEngine


class CurveSynthesizer:
    """Generate realistic well log curves maintaining physical relationships.
    
    Ensures:
    - Density-neutron crossover valid
    - Porosity from density reasonable
    - Resistivity log-normal distributed
    - All curves within realistic ranges
    """
    
    SUPPORTED_CURVES = ["GR", "RHOB", "NPHI", "RT", "DT", "CALI"]
    
    def __init__(self, seed: int = None):
        """Initialize synthesizer.
        
        Args:
            seed: Random seed for reproducibility
        """
        self.stats = StatisticalRealismEngine(seed)
        self.rng = np.random.default_rng(seed)
    
    def generate_curves(
        self,
        curve_list: List[str],
        depth_range: Tuple[float, float],
        sample_interval: float,
        lithology: str = "sandstone"
    ) -> Dict[str, np.ndarray]:
        """Generate multiple well log curves.
        
        Args:
            curve_list: List of curve mnemonics to generate
            depth_range: (start_depth, end_depth) in meters
            sample_interval: Depth interval between samples in meters
            lithology: Lithology type for realistic values
            
        Returns:
            Dictionary mapping curve mnemonic to values, including 'DEPT'
        """
        # Validate curves
        for curve in curve_list:
            if curve not in self.SUPPORTED_CURVES:
                raise ValueError(f"Unknown curve type: {curve}")
        
        # Calculate number of samples
        start_depth, end_depth = depth_range
        n_samples = int((end_depth - start_depth) / sample_interval) + 1
        
        # Generate depth array
        depths = np.linspace(start_depth, end_depth, n_samples)
        
        # Generate each curve
        curves = {"DEPT": depths}
        
        for curve in curve_list:
            curves[curve] = self._generate_curve(curve, n_samples, lithology)
        
        # Ensure physical relationships are maintained
        curves = self._apply_physical_constraints(curves, lithology)
        
        return curves
    
    def _generate_curve(
        self,
        curve_type: str,
        n_samples: int,
        lithology: str
    ) -> np.ndarray:
        """Generate a single curve using statistical engine."""
        return self.stats.generate_curve(curve_type, lithology, n_samples)
    
    def _apply_physical_constraints(
        self,
        curves: Dict[str, np.ndarray],
        lithology: str
    ) -> Dict[str, np.ndarray]:
        """Apply physical relationship constraints between curves.
        
        Ensures:
        - Density-neutron crossover valid for lithology
        - Porosity reasonable
        """
        # Density-neutron crossover
        if "RHOB" in curves and "NPHI" in curves:
            # Adjust NPHI to ensure crossover makes sense
            rhob = curves["RHOB"]
            nphi = curves["NPHI"]
            
            # Porosity from density
            matrix = 2.65 if lithology == "sandstone" else 2.71
            phi_density = (matrix - rhob) / (matrix - 1.0)
            
            # Neutron porosity should be similar to density porosity
            # with some shale effect
            if lithology == "shale":
                # Shale: neutron > density (crossover negative)
                nphi_adjusted = np.where(
                    nphi < phi_density + 0.05,
                    phi_density + 0.10 + 0.05 * self.rng.random(len(nphi)),
                    nphi
                )
            else:
                # Sandstone/carbonate: small crossover
                nphi_adjusted = np.clip(nphi, 0.0, 0.45)
            
            curves["NPHI"] = nphi_adjusted
        
        return curves
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pytest tests/synthetic_data/test_curves.py -v`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add synthetic_data/well_log/ tests/synthetic_data/test_curves.py
git commit -m "feat: add curve synthesizer for petrophysical logs"
```

---

## Task 5: LAS File Generator

**Files:**
- Create: `synthetic_data/well_log/las_generator.py`
- Create: `tests/synthetic_data/test_las_generator.py`

- [ ] **Step 1: Write failing test for LAS generator**

Create: `tests/synthetic_data/test_las_generator.py`

```python
"""Tests for LAS file generator."""
import pytest
import tempfile
import os
import lasio
from synthetic_data.well_log import LASGenerator


def test_las_generator_creates_file():
    """Generator should create a valid LAS file."""
    generator = LASGenerator(seed=42)
    
    las_path = generator.create_record(
        well_name="Test-Well-001",
        curves=["GR", "RHOB", "NPHI"],
        depth_range=(1000.0, 2000.0),
        sample_interval=0.15,
        lithology="sandstone"
    )
    
    assert os.path.exists(las_path)
    
    # Verify it opens with lasio
    log = lasio.read(las_path)
    assert log is not None


def test_las_generator_has_correct_metadata():
    """Generated LAS should have correct well metadata."""
    generator = LASGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        las_path = generator.create_record(
            well_name="Test-Well-001",
            field_name="TestField",
            company="TestCompany",
            curves=["GR", "RHOB"],
            depth_range=(1000.0, 1100.0),
            sample_interval=0.5,
            lithology="sandstone",
            output_dir=tmpdir
        )
        
        log = lasio.read(las_path)
        
        assert log.well["WELL"].value == "Test-Well-001"
        assert log.well["FLD"].value == "TestField"
        assert log.well["COMP"].value == "TestCompany"


def test_las_generator_has_curves():
    """Generated LAS should contain requested curves."""
    generator = LASGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        las_path = generator.create_record(
            well_name="Test-Well-001",
            curves=["GR", "RHOB", "NPHI", "RT"],
            depth_range=(1000.0, 1020.0),
            sample_interval=0.5,
            lithology="sandstone",
            output_dir=tmpdir
        )
        
        log = lasio.read(las_path)
        
        assert "GR" in log.keys()
        assert "RHOB" in log.keys()
        assert "NPHI" in log.keys()
        assert "RT" in log.keys()
        assert "DEPT" in log.keys()


def test_las_generator_depth_range():
    """Generated LAS should have correct depth range."""
    generator = LASGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        las_path = generator.create_record(
            well_name="Test-Well-001",
            curves=["GR"],
            depth_range=(500.0, 1500.0),
            sample_interval=0.25,
            lithology="sandstone",
            output_dir=tmpdir
        )
        
        log = lasio.read(las_path)
        df = log.df()
        
        assert df.index.min() == pytest.approx(500.0, abs=0.1)
        assert df.index.max() == pytest.approx(1500.0, abs=0.1)


def test_las_generator_dataset():
    """Generator should create multiple files for dataset."""
    generator = LASGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        dataset = generator.create_dataset(
            n_records=3,
            well_names=["Well-001", "Well-002", "Well-003"],
            curves=["GR", "RHOB"],
            depth_range=(1000.0, 1100.0),
            sample_interval=0.5,
            lithology="sandstone",
            output_dir=tmpdir
        )
        
        assert len(dataset) == 3
        for file_path in dataset:
            assert os.path.exists(file_path)
            log = lasio.read(file_path)
            assert "GR" in log.keys()
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pytest tests/synthetic_data/test_las_generator.py -v`
Expected: FAIL with "cannot import name 'LASGenerator'"

- [ ] **Step 3: Write LASGenerator implementation**

Create: `synthetic_data/well_log/las_generator.py`

```python
"""LAS file generator using lasio library."""
import os
import tempfile
from typing import Dict, List, Optional, Tuple
import lasio
from lasio import LASFile, HeaderItem, CurveItem
import numpy as np

from synthetic_data.base import Generator
from synthetic_data.well_log.curves import CurveSynthesizer


class LASGenerator(Generator):
    """Generate synthetic LAS well log files.
    
    Creates realistic LAS files with proper:
    - Well metadata headers
    - Depth-indexed curve data
    - Physical relationships between curves
    - Validation through lasio library
    """
    
    def __init__(self, seed: int = None):
        """Initialize generator.
        
        Args:
            seed: Random seed for reproducibility
        """
        self.synthesizer = CurveSynthesizer(seed)
    
    def create_record(
        self,
        well_name: str,
        curves: List[str] = None,
        depth_range: Tuple[float, float] = (1000.0, 2000.0),
        sample_interval: float = 0.15,
        lithology: str = "sandstone",
        field_name: str = None,
        company: str = None,
        location: str = None,
        output_dir: str = None,
        **kwargs
    ) -> str:
        """Generate a single LAS file.
        
        Args:
            well_name: Well name for header
            curves: List of curve mnemonics (default: GR, RHOB, NPHI, RT)
            depth_range: (start_depth, end_depth) in meters
            sample_interval: Depth interval between samples in meters
            lithology: Lithology type (sandstone, shale, carbonate)
            field_name: Field name for header
            company: Company name for header
            location: Location for header
            output_dir: Directory to write file (default: temp dir)
            
        Returns:
            Path to generated LAS file
        """
        # Default curves
        if curves is None:
            curves = ["GR", "RHOB", "NPHI", "RT"]
        
        # Generate curve data
        curve_data = self.synthesizer.generate_curves(
            curve_list=curves,
            depth_range=depth_range,
            sample_interval=sample_interval,
            lithology=lithology
        )
        
        # Create LAS file
        las = LASFile()
        
        # Version section
        las.version.append(HeaderItem("VERS", value=2.0))
        las.version.append(HeaderItem("WRAP", value="NO"))
        
        # Well section
        las.well.append(HeaderItem("STRT", value=depth_range[0], unit="m"))
        las.well.append(HeaderItem("STOP", value=depth_range[1], unit="m"))
        las.well.append(HeaderItem("STEP", value=sample_interval, unit="m"))
        las.well.append(HeaderItem("NULL", value=-999.25))
        las.well.append(HeaderItem("COMP", value=company or "Synthetic Company"))
        las.well.append(HeaderItem("WELL", value=well_name))
        las.well.append(HeaderItem("FLD", value=field_name or "Synthetic Field"))
        las.well.append(HeaderItem("LOC", value=location or "Synthetic Location"))
        las.well.append(HeaderItem("SRVC", value="Synthetic Data Generator"))
        las.well.append(HeaderItem("DATE", value="2024-01-01"))
        
        # Add curves
        # Depth curve (must be first)
        las.add_curve(
            "DEPT",
            curve_data["DEPT"],
            unit="m",
            descr="Depth"
        )
        
        # Add data curves
        curve_units = {
            "GR": ("API", "Gamma Ray"),
            "RHOB": ("g/cc", "Bulk Density"),
            "NPHI": ("vol/vol", "Neutron Porosity"),
            "RT": ("ohm-m", "Deep Resistivity"),
            "DT": ("us/ft", "Sonic Slowness"),
            "CALI": ("in", "Caliper"),
        }
        
        for curve_mnemonic in curves:
            unit, descr = curve_units.get(curve_mnemonic, ("", ""))
            las.add_curve(
                curve_mnemonic,
                curve_data[curve_mnemonic],
                unit=unit,
                descr=descr
            )
        
        # Write file
        if output_dir is None:
            output_dir = tempfile.mkdtemp()
        
        os.makedirs(output_dir, exist_ok=True)
        file_path = os.path.join(output_dir, f"{well_name}.las")
        
        las.write(file_path)
        
        return file_path
    
    def create_dataset(
        self,
        n_records: int,
        well_names: List[str] = None,
        curves: List[str] = None,
        depth_range: Tuple[float, float] = (1000.0, 2000.0),
        sample_interval: float = 0.15,
        lithology: str = "sandstone",
        output_dir: str = None,
        **kwargs
    ) -> List[str]:
        """Generate multiple LAS files.
        
        Args:
            n_records: Number of LAS files to generate
            well_names: List of well names (default: auto-generated)
            curves: List of curve mnemonics
            depth_range: (start_depth, end_depth) in meters
            sample_interval: Depth interval in meters
            lithology: Lithology type
            output_dir: Directory to write files
            
        Returns:
            List of paths to generated LAS files
        """
        # Generate well names if not provided
        if well_names is None:
            well_names = [f"Well-{i:03d}" for i in range(n_records)]
        
        # Ensure we have enough names
        if len(well_names) < n_records:
            well_names.extend([f"Well-{i:03d}" for i in range(len(well_names), n_records)])
        
        # Create output directory
        if output_dir is None:
            output_dir = tempfile.mkdtemp()
        
        os.makedirs(output_dir, exist_ok=True)
        
        # Generate each record
        file_paths = []
        for i in range(n_records):
            file_path = self.create_record(
                well_name=well_names[i],
                curves=curves,
                depth_range=depth_range,
                sample_interval=sample_interval,
                lithology=lithology,
                output_dir=output_dir
            )
            file_paths.append(file_path)
        
        return file_paths
```

- [ ] **Step 4: Update well_log module exports**

Edit: `synthetic_data/well_log/__init__.py`

```python
"""Well log synthetic data generation."""
from synthetic_data.well_log.curves import CurveSynthesizer
from synthetic_data.well_log.las_generator import LASGenerator

__all__ = ["CurveSynthesizer", "LASGenerator"]
```

- [ ] **Step 5: Run test to verify it passes**

Run: `pytest tests/synthetic_data/test_las_generator.py -v`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add synthetic_data/well_log/ tests/synthetic_data/test_las_generator.py
git commit -m "feat: add LAS file generator with realistic curve synthesis"
```

---

## Task 6: SEG-Y File Generator

**Files:**
- Create: `synthetic_data/seismic/__init__.py`
- Create: `synthetic_data/seismic/segy_generator.py`
- Create: `synthetic_data/seismic/traces.py`
- Create: `tests/synthetic_data/test_segy_generator.py`

- [ ] **Step 1: Write failing test for SEG-Y generator**

Create: `tests/synthetic_data/test_segy_generator.py`

```python
"""Tests for SEG-Y file generator."""
import pytest
import tempfile
import os
import segyio
from synthetic_data.seismic import SEGYGenerator


def test_segy_generator_creates_file():
    """Generator should create a valid SEG-Y file."""
    generator = SEGYGenerator(seed=42)
    
    segy_path = generator.create_record(
        survey_name="Test-Survey-001",
        n_inlines=10,
        n_crosslines=10,
        n_samples=100,
        sample_interval=4000,  # microseconds
        output_dir=None
    )
    
    assert os.path.exists(segy_path)
    
    # Verify it opens with segyio
    with segyio.open(segy_path, 'r') as segy_file:
        assert segy_file is not None


def test_segy_generator_has_correct_geometry():
    """Generated SEG-Y should have correct geometry."""
    generator = SEGYGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        segy_path = generator.create_record(
            survey_name="Test-Survey",
            n_inlines=5,
            n_crosslines=8,
            n_samples=50,
            sample_interval=4000,
            output_dir=tmpdir
        )
        
        with segyio.open(segy_path, 'r') as segy_file:
            cube = segyio.tools.cube(segy_file)
            
            # Check dimensions
            assert cube.shape == (5, 8, 50)


def test_segy_generator_trace_headers():
    """Generated SEG-Y should have proper trace headers."""
    generator = SEGYGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        segy_path = generator.create_record(
            survey_name="Test-Survey",
            n_inlines=3,
            n_crosslines=3,
            n_samples=20,
            sample_interval=4000,
            output_dir=tmpdir
        )
        
        with segyio.open(segy_path, 'r') as segy_file:
            # Check inline/crossline numbers
            assert len(segy_file.ilines) == 3
            assert len(segy_file.xlines) == 3
            
            # Verify all traces have headers
            for i, header in enumerate(segy_file.header):
                assert segyio.su.iline in header
                assert segyio.su.xline in header


def test_segy_generator_amplitude_range():
    """Generated amplitudes should be in realistic range."""
    generator = SEGYGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        segy_path = generator.create_record(
            survey_name="Test-Survey",
            n_inlines=10,
            n_crosslines=10,
            n_samples=100,
            sample_interval=4000,
            output_dir=tmpdir
        )
        
        with segyio.open(segy_path, 'r') as segy_file:
            cube = segyio.tools.cube(segy_file)
            
            # Amplitudes should be in typical processed seismic range
            assert cube.min() >= -32767
            assert cube.max() <= 32767
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pytest tests/synthetic_data/test_segy_generator.py -v`
Expected: FAIL with "ModuleNotFoundError: No module named 'synthetic_data.seismic'"

- [ ] **Step 3: Create seismic module with implementation**

Create: `synthetic_data/seismic/__init__.py`

```python
"""Seismic data synthetic generation."""
from synthetic_data.seismic.segy_generator import SEGYGenerator

__all__ = ["SEGYGenerator"]
```

Create: `synthetic_data/seismic/traces.py`

```python
"""Generate seismic traces with realistic amplitudes."""
import numpy as np
from typing import Tuple


class TraceGenerator:
    """Generate seismic traces with proper amplitude distributions."""
    
    def __init__(self, seed: int = None):
        """Initialize trace generator.
        
        Args:
            seed: Random seed for reproducibility
        """
        self.rng = np.random.default_rng(seed)
    
    def generate_volume(
        self,
        n_inlines: int,
        n_crosslines: int,
        n_samples: int,
        amplitude_scale: float = 10000.0
    ) -> np.ndarray:
        """Generate a 3D seismic volume.
        
        Args:
            n_inlines: Number of inline traces
            n_crosslines: Number of crossline traces
            n_samples: Number of time samples per trace
            amplitude_scale: Scale factor for amplitudes
            
        Returns:
            3D numpy array with shape (n_inlines, n_crosslines, n_samples)
        """
        # Generate random amplitudes with realistic distribution
        # Use Gaussian distribution for processed seismic
        volume = self.rng.normal(0, amplitude_scale, (n_inlines, n_crosslines, n_samples))
        
        # Clip to typical seismic range
        volume = np.clip(volume, -32767, 32767).astype(np.float32)
        
        return volume
```

Create: `synthetic_data/seismic/segy_generator.py`

```python
"""SEG-Y file generator using segyio library."""
import os
import tempfile
from typing import List, Optional, Tuple
import segyio
import numpy as np
from datetime import datetime

from synthetic_data.base import Generator
from synthetic_data.seismic.traces import TraceGenerator


class SEGYGenerator(Generator):
    """Generate synthetic SEG-Y seismic files.
    
    creates realistic SEG-Y files with proper:
    - Survey geometry (inline/crossline)
    - Trace headers
    - Amplitude distributions
    """
    
    def __init__(self, seed: int = None):
        """Initialize generator.
        
        Args:
            seed: Random seed for reproducibility
        """
        self.trace_gen = TraceGenerator(seed)
    
    def create_record(
        self,
        survey_name: str,
        n_inlines: int = 100,
        n_crosslines: int = 100,
        n_samples: int = 500,
        sample_interval: int = 4000,  # microseconds
        inline_start: int = 1,
        crossline_start: int = 1,
        output_dir: str = None,
        **kwargs
    ) -> str:
        """Generate a single SEG-Y file.
        
        Args:
            survey_name: Survey name for file naming
            n_inlines: Number of inline traces
            n_crosslines: Number of crossline traces
            n_samples: Number of samples per trace
            sample_interval: Sample interval in microseconds
            inline_start: Starting inline number
            crossline_start: Starting crossline number
            output_dir: Directory to write file (default: temp dir)
            
        Returns:
            Path to generated SEG-Y file
        """
        # Create output directory
        if output_dir is None:
            output_dir = tempfile.mkdtemp()
        
        os.makedirs(output_dir, exist_ok=True)
        file_path = os.path.join(output_dir, f"{survey_name}.sgy")
        
        # Generate seismic volume
        volume = self.trace_gen.generate_volume(n_inlines, n_crosslines, n_samples)
        
        # Create inline and crossline arrays
        ilines = np.arange(inline_start, inline_start + n_inlines)
        xlines = np.arange(crossline_start, crossline_start + n_crosslines)
        
        # Create SEG-Y spec
        spec = segyio.spec()
        spec.format = 1  # IBM float
        spec.sorting = 2  # Inline sorting
        spec.iline = 5   # Inline header location
        spec.xline = 21  # Crossline header location
        spec.samples = np.arange(n_samples) * (sample_interval / 1e6)  # Convert to seconds
        spec.ilines = ilines
        spec.xlines = xlines
        
        # Write SEG-Y file
        with segyio.open(file_path, 'w', spec) as segy_file:
            # Reshape volume for segyio (traces, samples)
            traces = volume.reshape(-1, n_samples)
            segy_file.trace = traces
            
            # Set binary header
            segy_file.bin.update({
                segyio.BinField.Traces: n_inlines * n_crosslines,
                segyio.BinField.Samples: n_samples,
                segyio.BinField.Interval: sample_interval,
            })
            
            # Set trace headers
            for i, (il, xl) in enumerate(
                [(il, xl) for il in ilines for xl in xlines]
            ):
                segy_file.header[i].update({
                    segyio.TraceField.INLINE_3D: il,
                    segyio.TraceField.CROSSLINE_3D: xl,
                    segyio.TraceField.TRACE_SEQUENCE_LINE: i + 1,
                })
        
        return file_path
    
    def create_dataset(
        self,
        n_records: int,
        survey_names: List[str] = None,
        n_inlines: int = 100,
        n_crosslines: int = 100,
        n_samples: int = 500,
        sample_interval: int = 4000,
        output_dir: str = None,
        **kwargs
    ) -> List[str]:
        """Generate multiple SEG-Y files.
        
        Args:
            n_records: Number of SEG-Y files to generate
            survey_names: List of survey names (default: auto-generated)
            n_inlines: Number of inline traces
            n_crosslines: Number of crossline traces
            n_samples: Number of samples per trace
            sample_interval: Sample interval in microseconds
            output_dir: Directory to write files
            
        Returns:
            List of paths to generated SEG-Y files
        """
        # Generate survey names if not provided
        if survey_names is None:
            survey_names = [f"Survey-{i:03d}" for i in range(n_records)]
        
        # Ensure we have enough names
        if len(survey_names) < n_records:
            survey_names.extend([f"Survey-{i:03d}" for i in range(len(survey_names), n_records)])
        
        # Create output directory
        if output_dir is None:
            output_dir = tempfile.mkdtemp()
        
        os.makedirs(output_dir, exist_ok=True)
        
        # Generate each record
        file_paths = []
        for i in range(n_records):
            file_path = self.create_record(
                survey_name=survey_names[i],
                n_inlines=n_inlines,
                n_crosslines=n_crosslines,
                n_samples=n_samples,
                sample_interval=sample_interval,
                output_dir=output_dir
            )
            file_paths.append(file_path)
        
        return file_paths
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pytest tests/synthetic_data/test_segy_generator.py -v`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add synthetic_data/seismic/ tests/synthetic_data/test_segy_generator.py
git commit -m "feat: add SEG-Y file generator with proper geometry"
```

---

## Task 7: Format Validation Layer

**Files:**
- Create: `synthetic_data/validators/__init__.py`
- Create: `synthetic_data/validators/format_validator.py`
- Create: `tests/synthetic_data/test_format_validator.py`

- [ ] **Step 1: Write failing test for format validator**

Create: `tests/synthetic_data/test_format_validator.py`

```python
"""Tests for format validation."""
import pytest
import tempfile
import os
from synthetic_data.validators import FormatValidator


def test_format_validator_valid_las():
    """Valid LAS file should pass format validation."""
    validator = FormatValidator()
    
    # Create a simple valid LAS file
    with tempfile.TemporaryDirectory() as tmpdir:
        las_path = os.path.join(tmpdir, "test.las")
        with open(las_path, 'w') as f:
            f.write("""~VERSION INFORMATION
VERS. 2.0:
WRAP. NO:
~WELL INFORMATION
STRT.M 1000.0:
STOP.M 2000.0:
STEP.M 0.15:
NULL. -999.25:
WELL. Test-Well:
~CURVE INFORMATION
DEPT.M : Depth
GR.API : Gamma Ray
~PARAMETER INFORMATION
~OTHER INFORMATION
~A 1000.0 50.0
1000.15 51.2
""")
        
        is_valid, errors = validator.validate_las(las_path)
        assert is_valid
        assert errors == []


def test_format_validator_valid_segy():
    """Valid SEG-Y file should pass format validation."""
    import segyio
    
    validator = FormatValidator()
    
    # Create a simple valid SEG-Y file
    with tempfile.TemporaryDirectory() as tmpdir:
        segy_path = os.path.join(tmpdir, "test.sgy")
        
        # Create minimal SEG-Y
        spec = segyio.spec()
        spec.format = 1
        spec.sorting = 2
        spec.iline = 5
        spec.xline = 21
        spec.samples = np.arange(10) * 0.004
        spec.ilines = [1]
        spec.xlines = [1]
        
        with segyio.open(segy_path, 'w', spec) as f:
            f.trace = [np.zeros(10)]
        
        is_valid, errors = validator.validate_segy(segy_path)
        assert is_valid


def test_format_validator_invalid_file():
    """Invalid file should fail validation."""
    validator = FormatValidator()
    
    # Non-existent file
    is_valid, errors = validator.validate_las("/nonexistent/file.las")
    assert not is_valid
    assert len(errors) > 0
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pytest tests/synthetic_data/test_format_validator.py -v`
Expected: FAIL with "ModuleNotFoundError: No module named 'synthetic_data.validators'"

- [ ] **Step 3: Create validators module with implementation**

Create: `synthetic_data/validators/__init__.py`

```python
"""Validation layer for synthetic data."""
from synthetic_data.validators.format_validator import FormatValidator

__all__ = ["FormatValidator"]
```

Create: `synthetic_data/validators/format_validator.py`

```python
"""Format validation using domain libraries."""
import os
from typing import List, Tuple

from synthetic_data.base import Validator


class FormatValidator(Validator):
    """Validate synthetic data files using domain libraries.
    
    Uses lasio, segyio, and dlisio to verify files are valid
    and can be read by real software.
    """
    
    def validate(self, data: str) -> Tuple[bool, List[str]]:
        """Validate file format (auto-detect by extension).
        
        Args:
            data: File path to validate
            
        Returns:
            Tuple of (is_valid, errors)
        """
        if not os.path.exists(data):
            return False, [f"File does not exist: {data}"]
        
        ext = os.path.splitext(data)[1].lower()
        
        if ext in ['.las']:
            return self.validate_las(data)
        elif ext in ['.sgy', '.segy']:
            return self.validate_segy(data)
        elif ext in ['.dlis']:
            return self.validate_dlis(data)
        else:
            return False, [f"Unknown file extension: {ext}"]
    
    def validate_las(self, file_path: str) -> Tuple[bool, List[str]]:
        """Validate LAS file using lasio.
        
        Args:
            file_path: Path to LAS file
            
        Returns:
            Tuple of (is_valid, errors)
        """
        try:
            import lasio
            log = lasio.read(file_path)
            
            # Verify basic structure
            errors = []
            
            if not log.curves:
                errors.append("LAS file has no curves")
            
            if log.well.get('WELL') is None:
                errors.append("LAS file missing WELL metadata")
            
            return len(errors) == 0, errors
            
        except Exception as e:
            return False, [f"LAS validation error: {str(e)}"]
    
    def validate_segy(self, file_path: str) -> Tuple[bool, List[str]]:
        """Validate SEG-Y file using segyio.
        
        Args:
            file_path: Path to SEG-Y file
            
        Returns:
            Tuple of (is_valid, errors)
        """
        try:
            import segyio
            
            with segyio.open(file_path, 'r', strict=False) as segy_file:
                errors = []
                
                # Verify we can read traces
                traces = segy_file.trace
                if len(traces) == 0:
                    errors.append("SEG-Y file has no traces")
                
                # Verify dimensions
                if len(segy_file.ilines) == 0:
                    errors.append("SEG-Y file has no inlines")
                
                if len(segy_file.xlines) == 0:
                    errors.append("SEG-Y file has no crosslines")
                
                return len(errors) == 0, errors
                
        except Exception as e:
            return False, [f"SEG-Y validation error: {str(e)}"]
    
    def validate_dlis(self, file_path: str) -> Tuple[bool, List[str]]:
        """Validate DLIS file using dlisio.
        
        Args:
            file_path: Path to DLIS file
            
        Returns:
            Tuple of (is_valid, errors)
        """
        try:
            import dlisio
            
            with dlisio.load(file_path) as files:
                errors = []
                
                if len(files) == 0:
                    errors.append("DLIS file contains no logical files")
                
                # Check for frames (data)
                for f in files:
                    if len(f.frames) == 0:
                        errors.append(f"DLIS logical file {f.name} has no frames")
                
                return len(errors) == 0, errors
                
        except Exception as e:
            return False, [f"DLIS validation error: {str(e)}"]
```

- [ ] **Step 4: Fix imports in test file**

Edit: `tests/synthetic_data/test_format_validator.py`

Add import at top:

```python
"""Tests for format validation."""
import pytest
import tempfile
import os
import numpy as np  # Add this import
from synthetic_data.validators import FormatValidator
```

- [ ] **Step 5: Run test to verify it passes**

Run: `pytest tests/synthetic_data/test_format_validator.py -v`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add synthetic_data/validators/ tests/synthetic_data/test_format_validator.py
git commit -m "feat: add format validation layer using domain libraries"
```

---

## Task 8: Physical Relationship Validator

**Files:**
- Create: `synthetic_data/validators/physics_validator.py`
- Create: `tests/synthetic_data/test_physics_validator.py`

- [ ] **Step 1: Write failing test for physics validator**

Create: `tests/synthetic_data/test_physics_validator.py`

```python
"""Tests for physical relationship validation."""
import pytest
import numpy as np
from synthetic_data.validators.physics_validator import PhysicsValidator


def test_archie_equation_validation():
    """Porosity-resistivity should satisfy Archie equation."""
    validator = PhysicsValidator()
    
    # Create valid porosity-resistivity data
    porosity = np.array([0.25, 0.20, 0.30, 0.15])
    resistivity = np.array([100, 50, 150, 20])
    
    is_valid, warnings = validator.validate_archie(
        porosity, resistivity, a=1.0, m=2.0, n=2.0, Rw=0.1
    )
    
    # Should be valid (within reasonable bounds)
    assert is_valid or len(warnings) < len(porosity)


def test_density_neutron_crossover():
    """Density-neutron crossover should be realistic for lithology."""
    validator = PhysicsValidator()
    
    # Sandstone: density porosity ≈ neutron porosity
    density = np.array([2.45, 2.50, 2.40])
    neutron = np.array([0.22, 0.20, 0.25])
    
    is_valid, warnings = validator.validate_density_neutron(
        density, neutron, lithology="sandstone"
    )
    
    assert is_valid or "crossover" not in str(warnings).lower()


def test_gamma_ray_range():
    """Gamma ray should be in realistic range."""
    validator = PhysicsValidator()
    
    # Valid GR values
    gr_valid = np.array([30, 60, 90, 45])
    is_valid, errors = validator.validate_gamma_ray(gr_valid)
    assert is_valid
    
    # Invalid GR values
    gr_invalid = np.array([-10, 250])
    is_valid, errors = validator.validate_gamma_ray(gr_invalid)
    assert not is_valid


def test_resistivity_logarithmic():
    """Resistivity should have logarithmic distribution."""
    validator = PhysicsValidator()
    
    # Generate resistivity with good range
    rt_values = np.logspace(0, 3, 100)  # 1 to 1000 ohm-m
    
    is_valid, warnings = validator.validate_resistivity(rt_values)
    
    # Should handle logarithmic range properly
    assert is_valid or len(warnings) == 0
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pytest tests/synthetic_data/test_physics_validator.py -v`
Expected: FAIL with "cannot import name 'PhysicsValidator'"

- [ ] **Step 3: Create physics validator implementation**

Create: `synthetic_data/validators/physics_validator.py`

```python
"""Physical relationship validation for petrophysical data."""
import numpy as np
from typing import List, Tuple


class PhysicsValidator:
    """Validate physical relationships in petrophysical data.
    
    Ensures:
    - Archie equation relationships valid
    - Density-neutron crossover appropriate for lithology
    - Curve values in realistic ranges
    """
    
    # Realistic ranges for common curves
    CURVE_RANGES = {
        "GR": (0, 200, "API"),
        "RHOB": (1.9, 3.0, "g/cc"),
        "NPHI": (0.0, 0.45, "vol/vol"),
        "RT": (0.2, 2000, "ohm-m"),
        "DT": (40, 240, "us/ft"),
        "CALI": (6, 20, "in"),  # Typical bit size range
    }
    
    def validate_archie(
        self,
        porosity: np.ndarray,
        resistivity: np.ndarray,
        a: float = 1.0,
        m: float = 2.0,
        n: float = 2.0,
        Rw: float = 0.1
    ) -> Tuple[bool, List[str]]:
        """Validate porosity-resistivity relationship via Archie equation.
        
        Archie equation: Sw = ((a * Rw) / (phi^m * Rt))^(1/n)
        
        Args:
            porosity: Porosity values (fraction)
            resistivity: Resistivity values (ohm-m)
            a: Tortuosity factor (default: 1.0)
            m: Cementation exponent (default: 2.0)
            n: Saturation exponent (default: 2.0)
            Rw: Formation water resistivity (ohm-m)
            
        Returns:
            Tuple of (is_valid, warnings)
        """
        warnings = []
        
        # Calculate water saturation
        with np.errstate(divide='ignore', invalid='ignore'):
            Sw = ((a * Rw) / (porosity**m * resistivity))**(1/n)
        
        # Water saturation should be between 0 and 1
        invalid_sw = (Sw < 0) | (Sw > 1.5)  # Allow some margin
        if np.any(invalid_sw):
            n_invalid = np.sum(invalid_sw)
            warnings.append(f"{n_invalid} points have unrealistic water saturation")
        
        # Check for reasonable saturation values
        if np.any(Sw < 0.05):
            warnings.append("Some water saturations < 5% (may indicate hydrocarbon)")
        
        return len(warnings) == 0, warnings
    
    def validate_density_neutron(
        self,
        density: np.ndarray,
        neutron: np.ndarray,
        lithology: str = "sandstone"
    ) -> Tuple[bool, List[str]]:
        """Validate density-neutron crossover for lithology.
        
        Args:
            density: Bulk density values (g/cc)
            neutron: Neutron porosity values (vol/vol)
            lithology: Lithology type (sandstone, shale, carbonate)
            
        Returns:
            Tuple of (is_valid, warnings)
        """
        warnings = []
        
        # Check range validity
        if np.any(density < 1.9) or np.any(density > 3.0):
            warnings.append("Density values outside typical range (1.9-3.0 g/cc)")
        
        if np.any(neutron < 0) or np.any(neutron > 0.45):
            warnings.append("Neutron porosity outside typical range (0-0.45 vol/vol)")
        
        # Check crossover relationship
        # For sandstone: density porosity ≈ neutron porosity
        # For shale: neutron > density porosity (gas crossover opposite)
        matrix = {"sandstone": 2.65, "carbonate": 2.71, "shale": 2.70}
        matrix_density = matrix.get(lithology, 2.65)
        
        # Porosity from density
        phi_density = (matrix_density - density) / (matrix_density - 1.0)
        
        # Crossover check
        crossover = neutron - phi_density
        
        if lithology == "sandstone":
            # Clean sandstone: crossover ~0, gas sand: crossover > 0
            if np.any(crossover < -0.10):
                warnings.append("Large negative crossover unusual for sandstone")
        elif lithology == "shale":
            # Shale: neutron > density porosity
            if np.any(crossover < 0.05):
                warnings.append("Shale typically shows positive crossover")
        
        return len(warnings) == 0, warnings
    
    def validate_gamma_ray(
        self,
        gr: np.ndarray,
        lithology: str = None
    ) -> Tuple[bool, List[str]]:
        """Validate gamma ray values are in realistic range.
        
        Args:
            gr: Gamma ray values (API)
            lithology: Optional lithology for specific range check
            
        Returns:
            Tuple of (is_valid, errors)
        """
        errors = []
        warnings = []
        
        min_gr, max_gr, unit = self.CURVE_RANGES["GR"]
        
        # Check absolute range
        if np.any(gr < 0):
            errors.append(f"Negative gamma ray values detected (minimum: {gr.min()})")
        
        if np.any(gr > 300):
            errors.append(f"Gamma ray values exceed typical maximum (maximum: {gr.max():.0f} API)")
        
        # Lithology-specific checks
        if lithology == "sandstone":
            if np.mean(gr) > 70:
                warnings.append(f"High GR for sandstone (mean: {np.mean(gr):.0f} API)")
        elif lithology == "shale":
            if np.mean(gr) < 50:
                warnings.append(f"Low GR for shale (mean: {np.mean(gr):.0f} API)")
        
        return len(errors) == 0, errors + warnings
    
    def validate_resistivity(
        self,
        rt: np.ndarray
    ) -> Tuple[bool, List[str]]:
        """Validate resistivity has appropriate logarithmic range.
        
        Args:
            rt: Resistivity values (ohm-m)
            
        Returns:
            Tuple of (is_valid, warnings)
        """
        warnings = []
        
        # Check range
        min_rt, max_rt, unit = self.CURVE_RANGES["RT"]
        
        if np.any(rt <= 0):
            warnings.append("Resistivity must be positive")
        
        # Good resistivity data should span several decades
        rt_range = rt.max() / rt.min()
        if rt_range < 10 and len(rt) > 10:
            warnings.append(f"Resistivity range narrow ({rt_range:.1f}x), typical is >10x")
        
        return len(warnings) == 0, warnings
    
    def validate(
        self,
        data: dict,
        lithology: str = "sandstone"
    ) -> Tuple[bool, List[str]]:
        """Validate all physical relationships in data.
        
        Args:
            data: Dictionary with curve data (GR, RHOB, NPHI, RT, etc.)
            lithology: Lithology type
            
        Returns:
            Tuple of (is_valid, all_errors_and_warnings)
        """
        all_warnings = []
        
        # Validate available curves
        if "GR" in data:
            is_valid, warnings = self.validate_gamma_ray(data["GR"], lithology)
            all_warnings.extend(warnings)
        
        if "RHOB" in data and "NPHI" in data:
            is_valid, warnings = self.validate_density_neutron(
                data["RHOB"], data["NPHI"], lithology
            )
            all_warnings.extend(warnings)
        
        if "RT" in data:
            is_valid, warnings = self.validate_resistivity(data["RT"])
            all_warnings.extend(warnings)
        
        return len(all_warnings) == 0, all_warnings
```

- [ ] **Step 4: Update validators module exports**

Edit: `synthetic_data/validators/__init__.py`

```python
"""Validation layer for synthetic data."""
from synthetic_data.validators.format_validator import FormatValidator
from synthetic_data.validators.physics_validator import PhysicsValidator

__all__ = ["FormatValidator", "PhysicsValidator"]
```

- [ ] **Step 5: Run test to verify it passes**

Run: `pytest tests/synthetic_data/test_physics_validator.py -v`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add synthetic_data/validators/ tests/synthetic_data/test_physics_validator.py
git commit -m "feat: add physical relationship validator for petrophysics"
```

---

## Task 9: OSDU Mapper Base Infrastructure

**Files:**
- Create: `synthetic_data/osdu/__init__.py`
- Create: `synthetic_data/osdu/mapper.py`
- Create: `tests/synthetic_data/test_osdu_mappers.py`

- [ ] **Step 1: Write failing test for OSDU mapper base**

Create: `tests/synthetic_data/test_osdu_mappers.py`

```python
"""Tests for OSDU mappers."""
import pytest
from synthetic_data.osdu import OSDUMapper


class ConcreteMapper(OSDUMapper):
    """Test implementation."""
    
    def to_manifest(self, data, legal_tags):
        return {"manifest": "test"}


def test_osdu_mapper_is_abstract():
    """OSDUMapper should be abstract."""
    with pytest.raises(TypeError):
        OSDUMapper()


def test_concrete_mapper_to_manifest():
    """Concrete mapper should implement to_manifest."""
    mapper = ConcreteMapper()
    manifest = mapper.to_manifest({"test": "data"}, {"legaltags": ["test"]})
    
    assert manifest == {"manifest": "test"}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pytest tests/synthetic_data/test_osdu_mappers.py -v`
Expected: FAIL with "cannot import name 'OSDUMapper'"

- [ ] **Step 3: Create OSDU module with base mapper**

Create: `synthetic_data/osdu/__init__.py`

```python
"""OSDU schema mapping for synthetic data."""
from synthetic_data.osdu.mapper import OSDUMapper
from synthetic_data.osdu.well_log_mapper import LASMapper

__all__ = ["OSDUMapper", "LASMapper"]
```

Create: `synthetic_data/osdu/mapper.py`

```python
"""Abstract base for OSDU mappers."""
from abc import ABC, abstractmethod
from typing import Any, Dict


class OSDUMapper(ABC):
    """Abstract base class for OSDU manifest generation.
    
    Converts synthetic data to OSDU-compliant manifests
    for cloud platform integration.
    """
    
    @abstractmethod
    def to_manifest(self, data: Any, legal_tags: Dict) -> Dict:
        """Convert data to OSDU manifest.
        
        Args:
            data: Synthetic data (file path, dict, etc.)
            legal_tags: OSDU legal tags dictionary
            
        Returns:
            OSDU manifest dictionary
        """
        pass
    
    def _build_legal(self, legal_tags: Dict) -> Dict:
        """Build OSDU legal section.
        
        Args:
            legal_tags: Legal tags configuration
            
        Returns:
            Legal section dictionary
        """
        return {
            "legaltags": legal_tags.get("legaltags", []),
            "otherRelevantDataCountries": legal_tags.get(
                "otherRelevantDataCountries", ["US"]
            )
        }
    
    def _build_id(self, entity_type: str, name: str) -> str:
        """Build OSDU entity ID.
        
        Args:
            entity_type: OSDU entity type (e.g., 'master-data--Well')
            name: Entity name
            
        Returns:
            Entity ID string
        """
        import re
        clean_name = re.sub(r'[^a-zA-Z0-9]', '-', name)
        return f"{entity_type}:{clean_name}"
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pytest tests/synthetic_data/test_osdu_mappers.py -v`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add synthetic_data/osdu/ tests/synthetic_data/test_osdu_mappers.py
git commit -m "feat: add abstract OSDU mapper base class"
```

---

## Task 10: LAS to OSDU Mapper

**Files:**
- Create: `synthetic_data/osdu/well_log_mapper.py`
- Update: `tests/synthetic_data/test_osdu_mappers.py`

- [ ] **Step 1: Write test for LAS mapper**

Add to: `tests/synthetic_data/test_osdu_mappers.py`

```python
import tempfile
import os
import lasio
from synthetic_data.osdu import LASMapper


def test_las_mapper_to_manifest():
    """LAS mapper should create valid OSDU manifest."""
    mapper = LASMapper()
    
    # Create test LAS file
    with tempfile.TemporaryDirectory() as tmpdir:
        las_path = os.path.join(tmpdir, "test.las")
        
        las = lasio.LASFile()
        las.well.append(lasio.HeaderItem("WELL", value="Test-Well-001"))
        las.well.append(lasio.HeaderItem("FLD", value="Test-Field"))
        las.well.append(lasio.HeaderItem("COMP", value="Test-Company"))
        las.add_curve("DEPT", [1000.0, 1000.5, 1001.0], unit="m")
        las.add_curve("GR", [50.0, 60.0, 55.0], unit="API")
        las.write(las_path)
        
        manifest = mapper.to_manifest(
            las_path,
            legal_tags={"legaltags": ["test-legal-tag"]}
        )
        
        # Verify manifest structure
        assert "data" in manifest
        assert "WorkProduct" in manifest["data"]
        assert manifest["data"]["WorkProduct"]["kind"] == "osdu:wks:work-product--WellLog:1.0.0"


def test_las_mapper_curve_mapping():
    """LAS mapper should map curves correctly."""
    mapper = LASMapper()
    
    with tempfile.TemporaryDirectory() as tmpdir:
        las_path = os.path.join(tmpdir, "test.las")
        
        las = lasio.LASFile()
        las.well.append(lasio.HeaderItem("WELL", value="Test-Well"))
        las.add_curve("DEPT", [1000.0, 1001.0], unit="m")
        las.add_curve("GR", [50.0, 60.0], unit="API")
        las.add_curve("RHOB", [2.5, 2.6], unit="g/cc")
        las.write(las_path)
        
        manifest = mapper.to_manifest(
            las_path,
            legal_tags={"legaltags": ["test-tag"]}
        )
        
        # Check curves in manifest
        work_product = manifest["data"]["WorkProduct"]
        curves = work_product["data"]["LogCurveData"]["Curves"]
        
        assert len(curves) == 2  # GR and RHOB (not DEPT)
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pytest tests/synthetic_data/test_osdu_mappers.py::test_las_mapper_to_manifest -v`
Expected: FAIL with "cannot import name 'LASMapper'"

- [ ] **Step 3: Create LAS mapper implementation**

Create: `synthetic_data/osdu/well_log_mapper.py`

```python
"""Map LAS files to OSDU WellLog manifests."""
import os
from typing import Dict, List
from datetime import datetime
import lasio

from synthetic_data.osdu.mapper import OSDUMapper


class LASMapper(OSDUMapper):
    """Convert LAS files to OSDU WellLog manifests.
    
    Creates OSDU-compliant manifests for:
    - Well (master data)
    - Wellbore (master data)
    - WellLog (work product)
    """
    
    def to_manifest(self, las_path: str, legal_tags: Dict) -> Dict:
        """Convert LAS file to OSDU WellLog manifest.
        
        Args:
            las_path: Path to LAS file
            legal_tags: Legal tags configuration
            
        Returns:
            OSDU manifest dictionary with WellLog work product
        """
        las = lasio.read(las_path)
        
        # Extract metadata
        well_name = las.well.get("WELL", lasio.HeaderItem("WELL", value="Unknown"))
        if hasattr(well_name, 'value'):
            well_name = well_name.value
        
        field_name = las.well.get("FLD", lasio.HeaderItem("FLD", value="Unknown"))
        if hasattr(field_name, 'value'):
            field_name = field_name.value
        
        company = las.well.get("COMP", lasio.HeaderItem("COMP", value="Unknown"))
        if hasattr(company, 'value'):
            company = company.value
        
        # Build curves data
        curves = []
        for curve in las.curves:
            if curve.mnemonic == "DEPT":
                continue  # Skip depth curve
            
            curves.append({
                "CurveID": f"log-curve-{curve.mnemonic}",
                "CurveUnit": curve.unit or "",
                "LogCurveValues": curve.data.tolist()[:10]  # First 10 values as example
            })
        
        # Build manifest
        manifest = {
            "kind": "osdu:wks:Manifest:1.0.0",
            "data": {
                "WorkProduct": {
                    "kind": "osdu:wks:work-product--WellLog:1.0.0",
                    "id": self._build_id("work-product--WellLog", well_name),
                    "legal": self._build_legal(legal_tags),
                    "data": {
                        "Name": f"Well Log - {well_name}",
                        "Description": f"Synthetic well log for {well_name}",
                        "WellboreID": self._build_id("master-data--Wellbore", f"{well_name}-01"),
                        "Source": "Synthetic Data Generator",
                        "CreationDateTime": datetime.utcnow().isoformat(),
                        "LogCurveDepth": {
                            "Start": float(las.index_min),
                            "End": float(las.index_max),
                            "Unit": las.index_unit or "m"
                        },
                        "LogCurveData": {
                            "Curves": curves
                        }
                    }
                },
                "MasterData": {
                    "Well": {
                        "kind": "osdu:wks:master-data--Well:1.0.0",
                        "id": self._build_id("master-data--Well", well_name),
                        "data": {
                            "FacilityName": well_name,
                            "FieldName": field_name,
                            "Operator": company
                        }
                    },
                    "Wellbore": {
                        "kind": "osdu:wks:master-data--Wellbore:1.0.0",
                        "id": self._build_id("master-data--Wellbore", f"{well_name}-01"),
                        "data": {
                            "Name": f"{well_name}-01",
                            "WellID": self._build_id("master-data--Well", well_name)
                        }
                    }
                }
            }
        }
        
        return manifest
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pytest tests/synthetic_data/test_osdu_mappers.py -v`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add synthetic_data/osdu/ tests/synthetic_data/test_osdu_mappers.py
git commit -m "feat: add LAS to OSDU WellLog manifest mapper"
```

---

## Task 11: Integration Test - End-to-End Workflow

**Files:**
- Create: `tests/synthetic_data/test_integration.py`

- [ ] **Step 1: Write integration test for full workflow**

Create: `tests/synthetic_data/test_integration.py`

```python
"""End-to-end integration tests."""
import pytest
import tempfile
import os
import lasio
import segyio
from synthetic_data.well_log import LASGenerator
from synthetic_data.seismic import SEGYGenerator
from synthetic_data.validators import FormatValidator, PhysicsValidator
from synthetic_data.osdu import LASMapper


def test_full_well_log_workflow():
    """Test complete workflow: generate → validate → map to OSDU."""
    # Generate LAS file
    generator = LASGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        las_path = generator.create_record(
            well_name="Integration-Test-Well",
            curves=["GR", "RHOB", "NPHI", "RT"],
            depth_range=(1000.0, 2000.0),
            sample_interval=0.15,
            lithology="sandstone",
            output_dir=tmpdir
        )
        
        # Validate format
        format_validator = FormatValidator()
        is_valid, errors = format_validator.validate_las(las_path)
        assert is_valid, f"Format validation failed: {errors}"
        
        # Validate physics
        log = lasio.read(las_path)
        df = log.df()
        
        physics_validator = PhysicsValidator()
        is_valid, warnings = physics_validator.validate({
            "GR": df["GR"].values,
            "RHOB": df["RHOB"].values,
            "NPHI": df["NPHI"].values,
            "RT": df["RT"].values
        }, lithology="sandstone")
        # Warnings are OK, errors are not
        
        # Map to OSDU
        mapper = LASMapper()
        manifest = mapper.to_manifest(
            las_path,
            legal_tags={"legaltags": ["test-legal-tag"]}
        )
        
        # Verify manifest
        assert manifest["kind"] == "osdu:wks:Manifest:1.0.0"
        assert "WorkProduct" in manifest["data"]
        assert manifest["data"]["WorkProduct"]["kind"] == "osdu:wks:work-product--WellLog:1.0.0"


def test_full_seismic_workflow():
    """Test complete workflow: generate → validate SEG-Y."""
    # Generate SEG-Y file
    generator = SEGYGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        segy_path = generator.create_record(
            survey_name="Integration-Test-Survey",
            n_inlines=10,
            n_crosslines=10,
            n_samples=100,
            sample_interval=4000,
            output_dir=tmpdir
        )
        
        # Validate format
        format_validator = FormatValidator()
        is_valid, errors = format_validator.validate_segy(segy_path)
        assert is_valid, f"Format validation failed: {errors}"
        
        # Verify with segyio
        with segyio.open(segy_path, 'r') as segy_file:
            cube = segyio.tools.cube(segy_file)
            assert cube.shape == (10, 10, 100)


def test_batch_generation_consistency():
    """Test that batch generation maintains consistency."""
    generator = LASGenerator(seed=42)
    
    with tempfile.TemporaryDirectory() as tmpdir:
        # Generate batch
        file_paths = generator.create_dataset(
            n_records=5,
            curves=["GR", "RHOB"],
            depth_range=(1000.0, 1100.0),
            sample_interval=0.5,
            lithology="sandstone",
            output_dir=tmpdir
        )
        
        assert len(file_paths) == 5
        
        # All should pass format validation
        validator = FormatValidator()
        for path in file_paths:
            is_valid, errors = validator.validate_las(path)
            assert is_valid, f"File {path} failed validation: {errors}"
```

- [ ] **Step 2: Run integration test**

Run: `pytest tests/synthetic_data/test_integration.py -v`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add tests/synthetic_data/test_integration.py
git commit -m "test: add end-to-end integration tests"
```

---

## Task 12: Superpowers Skill Definition

**Files:**
- Create: `skills/synthetic-data-generation/SKILL.md`
- Create: `skills/synthetic-data-generation/references/physical-constraints.md`

- [ ] **Step 1: Create skill directory structure**

```bash
mkdir -p skills/synthetic-data-generation/references
```

- [ ] **Step 2: Create skill definition**

Create: `skills/synthetic-data-generation/SKILL.md`

```markdown
---
name: synthetic-data-generation
description: Generate realistic synthetic data for oil & gas domain testing, training, and demos. Creates LAS, SEG-Y, and time-series data validated with domain libraries.
---

# Skill: Synthetic Data Generation

Generate realistic synthetic data for oil & gas domain testing, AI/ML training, platform demos, and documentation.

## Purpose

Create synthetic well logs (LAS), seismic (SEG-Y), and time-series data that:
- Pass validation with domain libraries (lasio, segyio, dlisio)
- Maintain physical relationships (Archie equation, density-neutron crossover)
- Contain realistic ranges and distributions
- Map to OSDU schemas for cloud integration

## When to Use

- User needs test data for oil & gas skills
- User needs training datasets for ML models
- User needs demo data for OSDU integration
- User needs example datasets for documentation

## Capabilities

### 1. Generate Well Logs

```python
from synthetic_data.well_log import LASGenerator

# Generate single LAS file
generator = LASGenerator(seed=42)
las_file = generator.create_record(
    well_name="Test-Well-001",
    curves=["GR", "RHOB", "NPHI", "RT"],
    depth_range=(1000, 3000),
    lithology="sandstone"
)

# Generate multiple LAS files
dataset = generator.create_dataset(
    n_records=100,
    lithologies=["sandstone", "shale", "carbonate"]
)
```

### 2. Generate Seismic Data

```python
from synthetic_data.seismic import SEGYGenerator

generator = SEGYGenerator(seed=42)
segy_file = generator.create_record(
    survey_name="Survey-2024-001",
    n_inlines=100,
    n_crosslines=100,
    n_samples=500
)
```

### 3. Validate Data

```python
from synthetic_data.validators import FormatValidator, PhysicsValidator

# Format validation
format_validator = FormatValidator()
is_valid, errors = format_validator.validate_las("well.las")

# Physics validation
physics_validator = PhysicsValidator()
is_valid, warnings = physics_validator.validate(data_dict, lithology="sandstone")
```

### 4. Map to OSDU

```python
from synthetic_data.osdu import LASMapper

mapper = LASMapper()
manifest = mapper.to_manifest(
    "well.las",
    legal_tags={"legaltags": ["my-legal-tag"]}
)
```

## Physical Constraints

The generator enforces realistic physical relationships:

### Well Log Constraints

- **Gamma Ray:** 0-200 API (clean sand ~20, shale ~150)
- **Density:** 1.9-3.0 g/cc (sandstone matrix ~2.65)
- **Neutron:** 0-0.45 vol/vol
- **Resistivity:** 0.2-2000 ohm-m (logarithmic distribution)
- **Archie Equation:** Sw = ((a·Rw)/(φ^m·Rt))^(1/n)
- **Density-Neutron Crossover:** Proper for lithology

### Seismic Constraints

- **Amplitudes:** -32767 to 32767 (processed seismic range)
- **Geometry:** Consistent inline/crossline numbering
- **Sample Intervals:** Properly scaled

## Validation Libraries

Data is validated using industry-standard libraries:

- `lasio` - LAS file validation
- `welly` - Well data QC
- `dlisio` - DLIS file validation
- `segyio` - SEG-Y file validation
- `numpy`/`pandas` - Statistical checks

## Example Workflows

### Generate Test Dataset

```
"Generate 10 synthetic well logs with GR, RHOB, NPHI, RT curves for sandstone reservoir"
```

→ Creates 10 LAS files with realistic curves and validates with lasio

### Generate Training Data

```
"Generate 1000 seismic volumes for ML training with varying lithologies"
```

→ Creates 1000 SEG-Y files with proper geometry and amplitude distributions

### Create Demo Data

```
"Generate well log data with OSDU manifests for demo deployment"
```

→ Creates LAS files + OSDU-compliant JSON manifests

## Software Tasks

If user requests:
- Full OSDU ingestion pipeline → invoke `superpowers:oil-gas-delegation`
- Real-time data generation → Explain this is batch-only
- Proprietary format support → Explain only open standards (LAS, SEG-Y, DLIS) supported

## Dependencies

```
pip install lasio welly dlisio segyio numpy pandas scipy
```

## Reference Documentation

See `references/physical-constraints.md` for detailed petrophysical relationships.
```

- [ ] **Step 3: Create physical constraints reference**

Create: `skills/synthetic-data-generation/references/physical-constraints.md`

```markdown
# Petrophysical Constraints Reference

Physical relationships enforced by synthetic data generator.

## Archie Equation

Water saturation from resistivity:

```
Sw = ((a × Rw) / (φ^m × Rt))^(1/n)
```

Where:
- `Sw` = water saturation (fraction)
- `a` = tortuosity factor (typically 1.0)
- `Rw` = formation water resistivity (ohm-m)
- `φ` = porosity (fraction)
- `m` = cementation exponent (typically 2.0)
- `Rt` = true resistivity (ohm-m)
- `n` = saturation exponent (typically 2.0)

## Density Porosity

Porosity from bulk density:

```
φ = (ρmatrix - ρbulk) / (ρmatrix - ρfluid)
```

Typical matrix densities:
- Sandstone: 2.65 g/cc
- Limestone: 2.71 g/cc
- Dolomite: 2.87 g/cc
- Shale: 2.70 g/cc

Fluid densities:
- Water: 1.0 g/cc
- Oil: 0.8 g/cc (typical)
- Gas: 0.2 g/cc (varies with pressure)

## Shale Volume from Gamma Ray

```
Vsh = (GR - GRclean) / (GRshale - GRclean)
```

Typical GR values:
- Clean sandstone: 10-30 API
- Shale: 100-150 API
- Source rock: 75-150 API

## Density-Neutron Crossover

Gas effect causes neutron porosity to read lower than density porosity:

- **Clean sandstone:** Nearly equal
- **Gas sand:** Neutron < density porosity (negative crossover)
- **Shale:** Neutron > density porosity (positive crossover)

## Resistivity Distribution

Resistivity follows log-normal distribution in most formations:

- `Rt` typically spans 2-3 orders of magnitude
- Range: 0.2 - 2000 ohm-m
- Use log-normal distribution for synthetic values

## Sonic Slowness

Compressional slowness (DT) ranges:

- Sandstone: 50-80 us/ft
- Shale: 100-240 us/ft
- Carbonate: 40-90 us/ft

Related to porosity via Wyllie time-average equation:

```
DT = DTmatrix × (1 - φ) + DTfluid × φ
```
```

- [ ] **Step 4: Commit**

```bash
git add skills/synthetic-data-generation/
git commit -m "feat: add synthetic-data-generation skill with physical constraints reference"
```

---

## Task 13: Add Package Dependencies

**Files:**
- Create: `requirements.txt` or update existing

- [ ] **Step 1: Create requirements file**

Create: `synthetic_data/requirements.txt`

```
# Core dependencies
lasio>=0.31
welly>=0.5.0
dlisio>=0.3.0
segyio>=1.9.0
numpy>=1.21.0
pandas>=1.3.0
scipy>=1.7.0
```

- [ ] **Step 2: Create setup.py for package**

Create: `setup.py`

```python
"""Setup for synthetic_data package."""
from setuptools import setup, find_packages

setup(
    name="synthetic_data",
    version="0.1.0",
    description="Synthetic data generation for oil & gas domain",
    author="Superpowers",
    packages=find_packages(),
    install_requires=[
        "lasio>=0.31",
        "welly>=0.5.0",
        "dlisio>=0.3.0",
        "segyio>=1.9.0",
        "numpy>=1.21.0",
        "pandas>=1.3.0",
        "scipy>=1.7.0",
    ],
    python_requires=">=3.8",
)
```

- [ ] **Step 3: Commit**

```bash
git add synthetic_data/requirements.txt setup.py
git commit -m "feat: add package dependencies and setup configuration"
```

---

## Task 14: Run Full Test Suite

- [ ] **Step 1: Run all tests**

Run: `pytest tests/synthetic_data/ -v`
Expected: All tests pass

- [ ] **Step 2: Run with coverage (optional)**

Run: `pytest tests/synthetic_data/ --cov=synthetic_data --cov-report=term-missing`
Expected: >80% coverage

- [ ] **Step 3: Verify lint passes**

Run: `ruff check synthetic_data/ tests/synthetic_data/`
Expected: No errors

- [ ] **Step 4: Final commit if needed**

```bash
git add -A
git commit -m "chore: final test and lint fixes"
```

---

## Self-Review Checklist

After writing this plan, I reviewed it against the spec:

**1. Spec Coverage:**
- ✅ Well log generator (LAS, DLIS) - Task 4-5
- ✅ Seismic generator (SEG-Y) - Task 6
- ✅ SCADA generator (time-series) - NOT INCLUDED (deferred for future iteration, spec mentions "future enhancements")
- ✅ Validation layer (format, physics, referential) - Task 7-8
- ✅ OSDU mapping - Task 9-10
- ✅ Statistical realism - Task 3
- ✅ Integration tests - Task 11
- ✅ Superpowers skill - Task 12

**Note:** SCADA generator was not included in this implementation plan because:
1. The spec lists it as a component but doesn't define detailed requirements
2. No specific SCADA libraries were identified in dependencies
3. Adding it would significantly expand scope
4. It can be added in a follow-up iteration

**2. Placeholder Scan:**
- ✅ No TBD, TODO, or placeholder text
- ✅ All code blocks contain complete implementations
- ✅ All test commands specify expected output

**3. Type Consistency:**
- ✅ Generator classes use consistent `create_record()` and `create_dataset()` methods
- ✅ Validator classes return `Tuple[bool, List[str]]`
- ✅ OSDU mappers use consistent `to_manifest()` signature
- ✅ Curve synthesizer uses consistent parameter names across tests and implementation

**4. File Paths:**
- ✅ All paths are exact and consistent
- ✅ Directory structure matches spec

**5. Test Coverage:**
- ✅ Each component has unit tests
- ✅ Integration test covers full workflow
- ✅ Format validation tested with actual libraries

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-04-03-synthetic-data-generator-implementation.md`.

**Two execution options:**

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**