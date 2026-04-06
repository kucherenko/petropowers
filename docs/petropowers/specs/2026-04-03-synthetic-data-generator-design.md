# Synthetic Data Generator Design

## Overview

A synthetic data generation system for oil & gas domain data that produces realistic, validated datasets for testing, AI/ML training, platform demos, and documentation. The system consists of a Python library for data generation/validation and a Superpowers skill for orchestration.

## Problem Statement

Superpowers' oil & gas skills need realistic test datasets that:
- Pass validation with domain libraries (lasio, welly, dlisio, segyio)
- Satisfy OSDU schema constraints
- Maintain physical relationships (porosity-resistivity, density-neutron crossover)
- Preserve referential integrity across entities (Well → Wellbore → WellLog)
- Are statistically realistic for AI/ML training and demos

Currently, no unified system exists to generate such data across all domain types.

## Goals

1. Generate synthetic data for well logs (LAS, DLIS), seismic (SEG-Y), and SCADA time-series
2. Validate generated data using domain libraries to ensure real-software compatibility
3. Map generated data to OSDU schemas for cloud platform integration
4. Support both interactive (small batch) and automated (large scale) generation workflows
5. Provide natural language interface via Superpowers skill

## Non-Goals

- Real-time data generation (batch processing only)
- GUI/web interface for data generation
- Proprietary data format support (only open standards: LAS, SEG-Y, DLIS)
- Integration with actual OSDU instances (manifest generation only, not upload)

## Architecture

### Two-Layer Design

```
┌─────────────────────────────────────────────────────────────────┐
│                    Superpowers Skill Layer                      │
│  (skills/synthetic-data-generation/SKILL.md)                    │
│  - Natural language intent detection                            │
│  - Workflow orchestration                                        │
│  - User feedback and error handling                              │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Generator Library Layer                       │
│  (synthetic_data/ Python package)                              │
│  - Well log generation (LAS, DLIS)                              │
│  - Seismic generation (SEG-Y)                                   │
│  - SCADA time-series generation                                  │
│  - Validation pipeline                                           │
│  - OSDU mapping                                                  │
└─────────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Domain Libraries Layer                       │
│  - lasio (LAS validation)                                        │
│  - welly (Well data QC)                                          │
│  - dlisio (DLIS validation)                                      │
│  - segyio (SEG-Y validation)                                     │
│  - numpy/pandas (statistical validation)                        │
└─────────────────────────────────────────────────────────────────┘
```

### Data Flow

**Interactive Mode:**
```
User request → Skill parses intent → Generator.create_record()
                                    ↓
                       Statistical realism engine applies distributions
                                    ↓
                       Referential integrity manager validates relationships
                                    ↓
                       Validation layer checks with domain libraries
                                    ↓
                       OSDU mapper creates manifests (optional)
                                    ↓
                       Output: file(s) + validation report
```

**Batch Mode:**
```
User request → Skill determines batch size → Generator.create_dataset(n)
                                           ↓
                              Parallel generation with consistent state
                                           ↓
                              Cross-entity integrity checks
                                           ↓
                              Validation layer validates all files
                                           ↓
                              OSDU mapper creates bulk manifests
                                           ↓
                              Output: file collection + bulk validation report
```

## Components

### 1. Well Log Generator (`synthetic_data/well_log/`)

**Purpose:** Generate realistic LAS and DLIS files with proper petrophysical relationships.

**Classes:**
- `LASGenerator` - Creates LAS files using lasio library
- `DLISGenerator` - Creates DLIS files using dlisio library
- `CurveSynthesizer` - Generates realistic log curves with physical constraints

**Physical Constraints Implemented:**
| Curve | Range | Units | Physical Relationship |
|-------|-------|-------|----------------------|
| Gamma Ray (GR) | 0-150 | API | Clean sand ~20 API, shale ~150 API |
| Resistivity (RT) | 0.2-2000 | ohm-m | Archie equation compatibility |
| Density (RHOB) | 1.9-3.0 | g/cc | Matrix ≈ 2.65 (sandstone), fluid ≈ 1.0 |
| Neutron (NPHI) | 0.0-0.45 | vol/vol | Density-neutron crossover valid |
| Sonic (DT) | 40-240 | us/ft | Compressional slowness |
| Caliper (CALI) | bit_size ± 10% | in | Washout consideration |

**Physical Relationships Enforced:**
- Porosity from density: φ = (ρmatrix - ρbulk) / (ρmatrix - ρfluid)
- Water saturation from Archie: Sw = ((a · Rw) / (φ^m · Rt))^(1/n)
- Shale volume from GR: Vsh = (GR - GR_clean) / (GR_shale - GR_clean)

**Referential Integrity:**
- Well → Wellbore → WellLog hierarchy
- Depth intervals consistent within log
- Curve mnemonics follow industry standards (API standard curve names)

### 2. Seismic Generator (`synthetic_data/seismic/`)

**Purpose:** Generate SEG-Y files with valid geometry and realistic amplitude distributions.

**Classes:**
- `SEGYGenerator` - Creates SEG-Y files using segyio library
- `TraceGenerator` - Generates seismic traces with proper header values

**Geometry Constraints:**
- Inline/crossline coordinates must form valid survey grid
- CDP (Common Depth Point) coordinates must be consistent
- Sample intervals must be uniform within trace
- Coordinate reference system must be documented

**Amplitude Realism:**
- Amplitudes follow realistic distributions for processed seismic
- Trace headers properly populated (iline, xline, cdp_x, cdp_y, etc.)
- Binary header fields correct (samples, intervals, format)

### 3. SCADA Generator (`synthetic_data/scada/`)

**Purpose:** Generate industrial control system time-series data.

**Classes:**
- `TimeSeriesGenerator` - Creates SCADA-like measurements
- `TagGenerator` - Produces realistic tag names with metadata
- `AnomalyInjector` - Optional anomaly injection for testing

**Physical Constraints:**
- Pressure, temperature, flow follow PVT relationships
- Equipment constraints respected (pump curves, valve positions)
- Sampling rates realistic (typically 1s to 1min intervals)

**Hierarchy:**
- Facility → Equipment → Tag structure
- Timestamps continuous or with realistic gaps
- Units consistent across related measurements

### 4. Validation Layer (`synthetic_data/validators/`)

**Purpose:** Verify generated data passes all constraints using domain libraries.

**Validation Types:**

| Type | Implementation | Purpose |
|------|---------------|---------|
| Format | lasio.can_read(), segyio.open(), dlisio.load() | File opens correctly |
| Schema | Custom OSDU validators | Schema compliance |
| Referential | Parent-child relationship checks | Data consistency |
| Statistical | numpy/pandas range checks | Values plausible |
| Semantics | Physical relationship validators | Physics makes sense |

**Validation Libraries:**
- `lasio` - LAS file reading and validation
- `welly` - Well data quality control
- `dlisio` - DLIS file validation
- `segyio` - SEG-Y file validation
- Custom OSDU schema validators (from existing domain skills)

### 5. OSDU Mapper (`synthetic_data/osdu/`)

**Purpose:** Convert synthetic data to OSDU-compliant manifests.

**Mappers:**
- `LASMapper` - LAS → WellLog, Wellbore, Well manifests
- `SEGYMapper` - SEG-Y → SeismicTraceData, SeismicBinGrid manifests
- `SCADAMapper` - SCADA time-series to appropriate OSDU schemas

**Schema References:**
- Reuses OSDU schema mappings from existing domain skills
- Well log mappings from `well-log-analysis` skill
- Seismic mappings from `segy-operations` skill

## Module Structure

```
synthetic_data/
├── __init__.py
├── base/
│   ├── __init__.py
│   ├── generator.py          # Abstract base class for all generators
│   ├── validator.py          # Base validation interface
│   └── statistics.py         # Statistical realism engine
├── well_log/
│   ├── __init__.py
│   ├── las_generator.py      # LAS file generation
│   ├── dlis_generator.py    # DLIS file generation
│   ├── curves.py             # Curve synthesis with physical constraints
│   └── validators.py         # Well log specific validation
├── seismic/
│   ├── __init__.py
│   ├── segy_generator.py     # SEG-Y file generation
│   ├── traces.py             # Trace generation
│   └── validators.py         # Seismic specific validation
├── scada/
│   ├── __init__.py
│   ├── timeseries_generator.py
│   ├── tags.py               # Tag/metadata generation
│   └── validators.py         # SCADA specific validation
├── osdu/
│   ├── __init__.py
│   ├── mapper.py             # Base OSDU mapping interface
│   ├── well_log_mapper.py    # LAS/DLIS → OSDU
│   ├── seismic_mapper.py     # SEG-Y → OSDU
│   └── scada_mapper.py       # Time-series → OSDU
└── validators/
    ├── __init__.py
    ├── format_validator.py   # File format validation
    ├── schema_validator.py   # OSDU schema validation
    ├── physics_validator.py  # Physical relationship validation
    └── integrity_validator.py # Referential integrity checks

tests/
├── synthetic_data/
│   ├── test_well_log_generator.py
│   ├── test_seismic_generator.py
│   ├── test_scada_generator.py
│   ├── test_validators.py
│   └── test_osdu_mappers.py

skills/synthetic-data-generation/
├── SKILL.md                  # Skill definition and workflows
├── references/
│   ├── physical-constraints.md   # Petrophysical relationships
│   ├── osdu-schemas.md          # OSDU schema references
│   └── validation-libraries.md   # Library documentation links
└── examples/
    ├── generate-well-logs.md     # Example workflows
    ├── generate-seismic.md
    └── generate-scada.md
```

## Testing Strategy

### Unit Tests (Generator Library)

Each generator has comprehensive unit tests validating:

**Well Log Generator:**
- LAS file format validation via `lasio.can_read()`
- Curve values within physical ranges
- Porosity-resistivity relationship valid (Archie equation)
- Density-neutron crossover realistic
- Depth intervals consistent
- Metadata headers complete (WELL, FLD, COMP, etc.)

**Seismic Generator:**
- SEG-Y format validation via `segyio.open()`
- Trace headers properly populated
- Geometry (inline/crossline) consistent
- Amplitude ranges realistic
- Binary header fields correct

**SCADA Generator:**
- Timestamps contiguous or with realistic gaps
- Tag naming conventions followed
- Values within equipment limits
- Units consistent across related measurements

### Integration Tests

- Cross-entity referential integrity tests
- End-to-end: generation → validation → OSDU mapping
- Batch generation consistency tests
- Error handling and recovery tests

### Skill Tests

Following existing Superpowers testing patterns:
- Intent detection from natural language
- Appropriate generator selection based on request
- Validation pipeline invocation
- Error handling and user feedback

## Error Handling

### Generation Errors

| Error Type | Handling |
|------------|----------|
| Invalid parameters | Return immediately with clear error message |
| Physical constraint violation | Regenerate with adjusted parameters |
| Referential integrity failure | Rebuild dependency chain before retry |

### Validation Errors

| Error Type | Handling |
|------------|----------|
| Format validation failure | Regenerate with format-constrained parameters |
| OSDU schema violation | Return violation details for user debugging |
| Statistical outlier | Warn but allow generation (real data has outliers) |
| Semantics violation | Regenerate with physical relationships enforced |

### Recovery Strategy

1. **Retry once** with adjusted seed/parameters
2. **Report failure** with diagnostic information if retry fails
3. **Offer alternative** generation approach for consistent failures

## Dependencies

### Required Python Packages

```
lasio>=0.31         # LAS file generation and validation
welly>=0.5          # Well data QC
dlisio>=0.3         # DLIS file validation
segyio>=1.9         # SEG-Y file generation and validation
numpy>=1.21         # Statistical operations
pandas>=1.3         # Data manipulation
scipy>=1.7          # Statistical distributions
```

### Optional Packages

```
lascheck            # LAS specification validation
```

## Use Cases

### 1. Testing Agent Skills

Generate realistic test datasets for Superpowers domain skills:

```python
# Generate test well log
from synthetic_data.well_log import LASGenerator

generator = LASGenerator()
las_file = generator.create_record(
    well_name="Test-Well-001",
    curves=["GR", "RHOB", "NPHI", "RT", "DT"],
    depth_range=(1000, 3000),
    lithology="sandstone"
)

# Validate with lasio
import lasio
log = lasio.read(las_file)  # Should succeed
assert "GR" in log.keys()
```

### 2. AI/ML Training Data

Generate large batch datasets with consistent relationships:

```python
# Generate 1000 training logs
from synthetic_data.well_log import LASGenerator

generator = LASGenerator()
dataset = generator.create_dataset(
    n_records=1000,
    lithologies=["sandstone", "shale", "carbonate"],
    include_manifests=True  # OSDU manifests for metadata
)
```

### 3. Platform Demo/Prototyping

Create realistic demo data for OSDU integration testing:

```python
# Generate complete well data with OSDU manifest
from synthetic_data.well_log import LASGenerator
from synthetic_data.osdu import LASMapper

generator = LASGenerator()
las_file = generator.create_record(well_name="Demo-Well-001")

mapper = LASMapper()
manifest = mapper.to_osdu_manifest(
    las_file,
    legal_tags={"legaltags": ["demo-tag"]}
)
```

### 4. Documentation Examples

Provide consistent example datasets for tutorials:

```python
# Skill workflow example
generator = LASGenerator()
example_log = generator.create_example("basic_sandstone")
# Returns well-tested, documented example for tutorials
```

## Success Criteria

1. **All generated LAS files pass** `lasio.can_read()` without errors
2. **All generated SEG-Y files open** correctly with `segyio.open()`
3. **Physical relationships are realistic**: porosity-resistivity follows Archie, density-neutron crossover correct
4. **Referential integrity maintained**: Well → Wellbore → WellLog chain intact
5. **OSDU manifests valid**: Pass schema validation for respective entity types
6. **Batch generation consistent**: 1000-record batches maintain relationships
7. **Skill correctly orchestrates**: Natural language requests produce validated output

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Domain library changes break generation | High | Pin library versions, add integration tests |
| Physical relationships too simplistic | Medium | Iteratively improve with domain expert review |
| OSDU schema updates | Medium | Decouple from specific schema version, document schema version used |
| Large batch generation slow | Low | Add parallel generation capability |
| Unrealistic statistical distributions | Medium | Use real field data statistics where available, document assumptions |

## Future Enhancements

1. **Additional formats**: Support RESQML, WITSML, PRODML generation
2. **Real statistics**: Allow importing real field statistics to calibrate synthetic distributions
3. **Anomaly injection**: Add controlled anomalies for testing ML models
4. **3D reservoir models**: Extend to full reservoir model generation
5. **Web interface**: Optional GUI for non-developers (separate from core library)