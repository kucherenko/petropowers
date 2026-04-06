# Synthetic Data Generator

Natural language interface for generating realistic oil & gas domain data.

## Purpose

Generate synthetic well logs (LAS/DLIS), seismic (SEG-Y), and time-series data with proper physical constraints for testing, demos, and training.

## Capabilities

Generate data with realistic relationships:
- Well logs (GR, RHOB, NPHI, RT, DT) with Archie equation constraints
- Seismic volumes with proper geometry
- OSDU-compliant metadata

## Invoking

```python
from synthetic_data.well_log import LASGenerator
from synthetic_data.seismic import SEGYGenerator
```

## Well Log Generation

Create realistic LAS files:

```python
generator = LASGenerator(seed=42)
las_path = generator.create_record(
    well_name="Test-Well-001",
    curves=["GR", "RHOB", "NPHI", "RT"],
    depth_range=(1000.0, 2000.0),
    sample_interval=0.15,
    lithology="sandstone"
)
```

Options:
- `well_name`: Well identifier
- `curves`: Log curves to generate (GR, RHOB, NPHI, RT, DT, CALI)
- `depth_range`: (start, end) in meters
- `sample_interval`: Sampling interval in meters
- `lithology`: sandstone | shale | carbonate
- `seed`: Random seed for reproducibility

## Seismic Generation

Create SEG-Y volumes:

```python
generator = SEGYGenerator(seed=42)
segy_path = generator.create_record(
    survey_name="Test-Survey",
    n_inlines=100,
    n_crosslines=100,
    n_samples=500,
    sample_interval=4000  # microseconds
)
```

## Validation

Files validate against domain libraries:
- LAS → lasio
- SEG-Y → segyio
- DLIS → dlisio

## OSDU Integration

Generate manifests for OSDU:

```python
from synthetic_data.osdu import LASMapper

mapper = LASMapper()
manifest = mapper.to_manifest(
    las_path,
    legal_tags={"legaltags": ["test-license"]}
)
```

## Example Usages

User says:
```
"Generate 5 LAS files for testing"
```

→ Uses LASGenerator.create_dataset(n_records=5)

User says:
```
"Create realistic well log with GR, RHOB, NPHI for carbonate formation"
```

→ Uses lithology="carbonate"

User says:
```
"Generate well log data with OSDU manifests for demo deployment"
```

→ Creates LAS files + OSDU-compliant JSON manifests

## Software Tasks

If user requests:
- Full OSDU ingestion pipeline → invoke `petropowers:oil-gas-delegation`
- Real-time data generation → Explain this is batch-only
- Proprietary format support → Explain only open standards (LAS, SEG-Y, DLIS) supported

## Dependencies

```
pip install lasio welly dlisio segyio numpy pandas scipy
```

## Reference Documentation

See `references/physical-constraints.md` for detailed petrophysical relationships.