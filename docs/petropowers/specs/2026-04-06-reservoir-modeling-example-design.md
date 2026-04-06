# Reservoir Modeling Example Dataset Design

## Overview

A runnable Python example (`examples/generate_reservoir_dataset.py`) that demonstrates the petropowers `synthetic_data` framework by generating a complete synthetic dataset for a reservoir named `ppr-1`. The example serves as a reference for how to use all major generators in the framework.

The application that consumes this data (the reservoir model) is out of scope for this example.

## Problem Statement

The `examples/` folder is empty. There is no concrete demonstration of how the petropowers `synthetic_data` framework is used in practice. New contributors and users need a working, runnable example that shows all major generators composing together to produce a realistic oil field dataset.

## Goals

1. Produce a runnable Python script that generates all major data types for reservoir `ppr-1`
2. Demonstrate the petropowers `synthetic_data` framework API clearly and readably
3. Support future multi-reservoir examples by using a reservoir-namespaced output structure
4. Include all five data types needed for reservoir modeling: well logs, seismic, production history, well paths, core photos
5. Generate OSDU manifests linking all entities

## Non-Goals

- Implementing the reservoir modeling application itself (out of scope)
- Adding a Jupyter notebook version (can be added later)
- Generating a config-driven or parametric example (single script is sufficient)
- Supporting real data ingestion

## Architecture

### Approach

Single flat script (`Option A`) with one function per data type, wired together by `main()`. Accepts `--reservoir` CLI argument for future multi-reservoir extension.

### Folder Structure

```
examples/
├── generate_reservoir_dataset.py   # Main example script
└── data/                           # gitignored generated output
    └── ppr-1/
        ├── well_logs/              # 50 LAS files
        ├── seismic/                # 1 SEG-Y volume
        ├── production/             # 50 SCADA CSV files
        ├── well_paths/             # 50 JSON well path files
        ├── core_photos/            # Up to 10 images (2 wells × 5 photos)
        └── osdu_manifests/         # JSON manifests for all entities
```

Future reservoirs (`ppr-2`, etc.) would write to their own `data/<reservoir-name>/` folder.

### Script Structure

```
generate_reservoir_dataset.py
├── generate_well_logs(output_dir, n_wells, well_names)  → list[str]
├── generate_seismic(output_dir)                         → str
├── generate_production(output_dir, well_names)          → list[str]
├── generate_well_paths(output_dir, well_names)          → list[str]
├── generate_core_photos(output_dir, wells)              → list[str]
├── generate_osdu_manifests(output_dir, all_data)        → list[str]
└── main()  — wires all functions, prints progress, handles --reservoir CLI arg
```

Each function imports directly from `synthetic_data.*` to show the framework API explicitly.

## Data Specifications

### Well Logs (50 wells)

| Property | Value |
|---|---|
| Well names | `PPR1-Well-001` through `PPR1-Well-050` |
| Depth range | 1500–3500m |
| Sample interval | 0.15m |
| Curves | GR, RHOB, NPHI, RT, DT |
| Lithologies | 30 sandstone, 15 shale, 5 carbonate |
| Generator | `synthetic_data.well_log.LASGenerator` |
| Output | `well_logs/PPR1-Well-NNN.las` |

Physical relationships enforced by `CurveSynthesizer`:
- Porosity from density: φ = (ρmatrix − ρbulk) / (ρmatrix − ρfluid)
- Water saturation from Archie equation
- Shale volume from GR linear interpolation

### Seismic (1 volume)

| Property | Value |
|---|---|
| Survey type | 3D |
| Inline range | 100–149 (50 inlines) |
| Crossline range | 200–249 (50 crosslines) |
| Two-way time | 0–1000ms |
| Sample rate | 4ms |
| Generator | `synthetic_data.seismic.SEGYGenerator` |
| Output | `seismic/ppr-1_3d_survey.segy` |

### Production History (50 wells)

| Property | Value |
|---|---|
| Duration | 2 years daily (730 samples per well) |
| Measurements | Oil rate (bbl/d), gas rate (Mscf/d), water rate (bbl/d), wellhead pressure (psi), temperature (°F) |
| Generator | `synthetic_data.scada.TimeSeriesGenerator` |
| Output | `production/PPR1-Well-NNN_production.csv` |

### Well Paths (50 wells)

| Property | Value |
|---|---|
| Format | JSON |
| Arrays | MD (m), TVD (m), inclination (°), azimuth (°) |
| Well type | Deviated (S-curve profile) |
| Generator | Custom (JSON serialization) — no existing generator |
| Output | `well_paths/PPR1-Well-NNN_path.json` |

Note: No well path generator currently exists in `synthetic_data/`. This function will generate simple S-curve trajectories using numpy directly and serialize to JSON.

### Core Photos (2 wells × up to 5 photos)

| Property | Value |
|---|---|
| Wells | `PPR1-Well-001`, `PPR1-Well-002` |
| Photos per well | Up to 5 |
| Lithology | Sandstone with oil staining |
| Depth range | 2000–2500m |
| Generator | `synthetic_data.core_photos` (AI image generation) |
| Output | `core_photos/PPR1-Well-NNN/depth_XXXX.png` |

Core photo generation requires an AI image generation API. If not available, this step is skipped with a clear warning message.

### OSDU Manifests

| Entity type | Count | Generator |
|---|---|---|
| Well | 50 | `synthetic_data.osdu.LASMapper` |
| Wellbore | 50 | `synthetic_data.osdu.LASMapper` |
| WellLog | 50 | `synthetic_data.osdu.LASMapper` |
| SeismicTraceData | 1 | `synthetic_data.osdu.SEGYMapper` |
| Facility (production) | 50 | `synthetic_data.osdu.SCADAMapper` |

Output: `osdu_manifests/<entity_type>/<id>.json`

## Implementation Notes

### Well Path Generator Gap

There is no `WellPathGenerator` in `synthetic_data/`. The `generate_well_paths()` function in the example script will implement a minimal S-curve trajectory using numpy directly. This is intentional — the example exposes the gap and documents it, serving as a pointer for future work.

### Core Photo Availability Guard

Core photo generation requires external AI API access. The script wraps the call in a try/except with a clear user-facing message when unavailable:

```
[SKIP] Core photo generation requires AI API access (set OPENAI_API_KEY or similar).
       To generate core photos, configure your API key and re-run.
```

### gitignore

`examples/data/` should be added to `.gitignore` — generated artifacts should not be committed.

### Error Handling

Each generator call is wrapped with a descriptive print statement showing progress. Errors from individual generators are caught and reported without stopping the full run (best-effort generation).

## Dependencies

All generators are already implemented in `synthetic_data/`. The example only imports from that package:

```python
from synthetic_data.well_log import LASGenerator
from synthetic_data.seismic import SEGYGenerator
from synthetic_data.scada import TimeSeriesGenerator
from synthetic_data.core_photos import CorePhotoGenerator  # optional
from synthetic_data.osdu import LASMapper, SEGYMapper, SCADAMapper
```

No new dependencies are introduced.

## Success Criteria

1. Script runs end-to-end with `python examples/generate_reservoir_dataset.py` without errors
2. `examples/data/ppr-1/well_logs/` contains 50 valid LAS files (readable by `lasio`)
3. `examples/data/ppr-1/seismic/ppr-1_3d_survey.segy` opens without errors via `segyio`
4. `examples/data/ppr-1/production/` contains 50 files with correct time range
5. `examples/data/ppr-1/well_paths/` contains 50 JSON files with trajectory arrays
6. Core photos generated for 2 wells when API is available; graceful skip when not
7. OSDU manifests generated for all entity types
8. `--reservoir ppr-1` argument works; `--reservoir ppr-2` would write to `data/ppr-2/`

## Future Extensions

- Add more reservoirs (ppr-2, ppr-3) with different field characteristics
- Add a Jupyter notebook version for documentation
- Implement `WellPathGenerator` in `synthetic_data/` and refactor `generate_well_paths()`
- Add config-file mode for parametric generation
