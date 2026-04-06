---
name: well-log-analysis
description: Read, analyze, and manipulate well log data in LAS format using lasio library.
---

# Skill: Well Log Analysis

Read, analyze, and manipulate well log data in LAS format using lasio library.

## Purpose

Handle well log operations across all oil & gas pipeline skills. Provides code patterns for reading LAS files, extracting metadata, performing petrophysical calculations, and exporting data.

## Reference Materials

Primary source: [lasio documentation](https://lasio.readthedocs.io/en/stable/)

Library: [lasio](https://github.com/kinverarity1/lasio)

Related packages:
- [welly](https://github.com/agilescientific/welly) - Extended functionality for curves, wells, projects
- [lascheck](https://github.com/MandarJKulkarni/lascheck) - LAS specification validation

## Dependencies

```bash
pip install lasio pandas matplotlib numpy
```

## Capabilities

### 1. Read LAS Files

```python
import lasio

# Read LAS file
log = lasio.read('well_log.las')

# Access well metadata
print(f"Well: {log.well['WELL'].value}")
print(f"Field: {log.well['FLD'].value if 'FLD' in log.well else 'N/A'}")
print(f"Company: {log.well['COMP'].value if 'COMP' in log.well else 'N/A'}")

# Access curve data
print(f"Curves: {[curve.mnemonic for curve in log.curves]}")
print(f"Depth range: {log.index_min} to {log.index_max} {log.index_unit}")
```

### 2. Export to DataFrame

```python
import lasio
import pandas as pd

log = lasio.read('well_log.las')

# Convert to pandas DataFrame
df = log.df()

# Access specific curves
depth = df.index
gamma_ray = df['GR']
density = df['RHOB']
neutron = df['NPHI']

print(df.head())
```

### 3. Access Header Metadata

```python
import lasio

log = lasio.read('well_log.las')

# Version section
print(f"Version: {log.version['VERS'].value}")
print(f"Wrap: {log.version['WRAP'].value}")

# Well section
print(log.well)

# Parameters section
print(log.params)

# Other section
for item in log.other:
    print(item)

# Curves section
for curve in log.curves:
    print(f"{curve.mnemonic}: {curve.unit} - {curve.descr}")
```

### 4. Petrophysical Calculations

```python
import lasio
import numpy as np

log = lasio.read('well_log.las')
df = log.df()

# Calculate porosity from density
# Phi = (matrix - bulk) / (matrix - fluid)
matrix_density = 2.65  # g/cc (sandstone)
fluid_density = 1.0    # g/cc (water)

bulk_density = df['RHOB'].values
porosity = (matrix_density - bulk_density) / (matrix_density - fluid_density)
porosity = np.clip(porosity, 0, 0.5)  # Clamp to reasonable range

print(f"Average porosity: {porosity.mean():.2%}")

# Calculate water saturation (Archie equation)
# Sw = ((a * Rw) / (Phi^m * Rt))^(1/n)
a = 1.0
m = 2.0
n = 2.0
Rw = 0.1  # ohm-m (formation water resistivity)

phi = porosity
Rt = df['RT'].values  # true resistivity

Sw = ((a * Rw) / (phi**m * Rt))**(1/n)
Sw = np.clip(Sw, 0, 1)

print(f"Average water saturation: {Sw.mean():.2%}")

# Calculate shale volume from gamma ray
GR = df['GR'].values
GR_min = GR.min()
GR_max = GR.max()

Vsh = (GR - GR_min) / (GR_max - GR_min)
Vsh = np.clip(Vsh, 0, 1)

print(f"Average shale volume: {Vsh.mean():.2%}")
```

### 5. Visualize Well Logs

```python
import lasio
import matplotlib.pyplot as plt

log = lasio.read('well_log.las')
df = log.df()

fig, axes = plt.subplots(1, 4, figsize=(15, 10), sharey=True)

# Gamma Ray
axes[0].plot(df['GR'], df.index)
axes[0].set_xlabel('GR (API)')
axes[0].set_ylabel('Depth (m)')
axes[0].invert_yaxis()
axes[0].grid(True, alpha=0.3)

# Resistivity
axes[1].semilogx(df['RT'], df.index)
axes[1].set_xlabel('RT (ohm-m)')
axes[1].grid(True, alpha=0.3)

# Density-Neutron
axes[2].plot(df['RHOB'], df.index, label='RHOB')
axes[2].set_xlabel('RHOB (g/cc)')
axes[2].grid(True, alpha=0.3)

# Caliper
axes[3].plot(df['CALI'], df.index)
axes[3].set_xlabel('CALI (in)')
axes[3].grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('well_logs.png', dpi=150)
```

### 6. Export Data

```python
import lasio

log = lasio.read('well_log.las')

# Export to CSV
log.to_csv('output.csv')

# Export to Excel
log.to_excel('output.xlsx')

# Write new LAS file
log.write('modified.las')
```

### 7. Handle Non-Standard Files

```python
import lasio

# Read malformed LAS files
log = lasio.read('problematic.las', ignore_header_errors=True)

# Handle encoding issues
log = lasio.read('file.las', encoding='latin-1')

# Read only headers (fast for large files)
log = lasio.read('large.las', read_policy=[])

# Custom null policy
log = lasio.read('file.las', null_policy='common')
```

### 8. Create LAS File from Scratch

```python
import lasio
import numpy as np
from lasio import LASFile, CurveItem, HeaderItem

# Create new LAS file
las = LASFile()

# Add well metadata
las.well.append(HeaderItem('WELL', value='Well-001'))
las.well.append(HeaderItem('FLD', value='Test Field'))
las.well.append(HeaderItem('LOC', value='North Sea'))
las.well.append(HeaderItem('SRVC', value='Acme Logging'))

# Add curves
depths = np.arange(1000, 2000, 0.5)
gr = np.random.uniform(20, 150, len(depths))
rhob = np.random.uniform(2.2, 2.7, len(depths))

las.add_curve('DEPT', depths, unit='m')
las.add_curve('GR', gr, unit='API', descr='Gamma Ray')
las.add_curve('RHOB', rhob, unit='g/cc', descr='Bulk Density')

# Write file
las.write('new_well.las')
```

## Workflow Integration

Used by:
- `oil-gas-pipelines/exploration` - Formation evaluation, log correlation
- `oil-gas-pipelines/drilling` - Real-time LWD interpretation
- `oil-gas-pipelines/reservoir-production` - Reservoir characterization

## Common Issues

### Missing curves
```python
# Check if curve exists
if 'GR' in log.keys():
    gr = log['GR']
else:
    print("GR curve not found")
    print(f"Available: {list(log.keys())}")
```

### Depth units mismatch
```python
# Check depth unit
print(f"Index unit: {log.index_unit}")  # 'm' or 'ft'

# Convert if needed
if log.index_unit == 'ft':
    df = log.df()
    df.index = df.index * 0.3048  # Convert to meters
```

### Null values
```python
# Check for null values
df = log.df()
null_value = log.null
print(f"Null value: {null_value}")

# Replace nulls
import numpy as np
df = df.replace(null_value, np.nan)
```

## Software Tasks

If user requests:
- Well log database → invoke `petropowers:oil-gas-delegation`
- Automated log interpretation tool → invoke `petropowers:oil-gas-delegation`
- Log visualization web app → invoke `petropowers:oil-gas-delegation`

## Quick Reference

| Operation | Code |
|-----------|------|
| Read LAS | `lasio.read('file.las')` |
| Get DataFrame | `log.df()` |
| Access curve | `log['GR']` or `log.df()['GR']` |
| Get curve mnemonics | `[c.mnemonic for c in log.curves]` |
| Export CSV | `log.to_csv('output.csv')` |
| Write LAS | `log.write('output.las')` |

## Example Session

**User:** "Calculate porosity from this LAS file"

**Agent:**
```python
import lasio
import numpy as np

log = lasio.read('well.las')
df = log.df()

# Density porosity
matrix = 2.65
fluid = 1.0
phi = (matrix - df['RHOB']) / (matrix - fluid)

print(f"Average porosity: {phi.mean():.2%}")
print(f"Porosity range: {phi.min():.2%} to {phi.max():.2%}")
```

Output:
```
Average porosity: 23.45%
Porosity range: 5.2% to 41.3%
```

## OSDU Integration

### LAS to OSDU WellLog Schema

OSDU uses standard schemas for well log data in the cloud:

- **WellLog** - Log curves (GR, RHOB, NPHI, etc.)
- **Wellbore** - Wellbore trajectory and geometry
- **Well** - Well header and metadata

### Schema Mapping: LAS → OSDU WellLog

| LAS Field | OSDU WellLog Field |
|-----------|-------------------|
| WELL | FacilityName (via Well) |
| FLD | FieldName |
| DEPT | LogCurveDepth |
| GR, RHOB, NPHI | LogCurveData.Curves |
| Company | Operator |

### OSDU Dataset Service API

```python
import requests

headers = {
    "Authorization": "Bearer <token>",
    "data-partition-id": "mypartition"
}

# Get storage instructions
storage_resp = requests.post(
    "https://api.osdu.com/api/dataset/v1/storageInstructions",
    headers=headers,
    json={
        "kind": "osdu:wks:dataset--File.LAS:1.0.0",
        "dataContentType": "text/plain"
    }
)

# Upload file to provided URL
upload_url = storage_resp.json()["storageLocation"]["signedUrl"]
with open("well_log.las", "rb") as f:
    requests.put(upload_url, data=f.read())

# Register dataset
register_resp = requests.post(
    "https://api.osdu.com/api/dataset/v1/register",
    headers=headers,
    json={
        "id": "dataset--File.LAS:1654321",
        "kind": "osdu:wks:dataset--File.LAS:1.0.0"
    }
)
```

### Create OSDU WellLog Manifest

```python
import json
from datetime import datetime

def create_welllog_manifest(well_id, wellbore_id, curves, legal_tags):
    """Create OSDU manifest for well logs"""
    
    # Map LAS curves to OSDU curves
    curve_data = []
    for curve in curves:
        curve_data.append({
            "CurveID": f"log-curve-{curve['mnemonic']}",
            "CurveUnit": curve['unit'],
            "LogCurveValues": curve['values']
        })
    
    manifest = {
        "kind": "osdu:wks:Manifest:1.0.0",
        "Data": {
            "WorkProduct": {
                "kind": "osdu:wks:work-product--WellLog:1.0.0",
                "id": f"work-product--WellLog:{well_id}-{datetime.now().strftime('%Y%m%d')}",
                "legal": legal_tags,
                "data": {
                    "Name": f"Well Log {well_id}",
                    "WellboreID": f"master-data--Wellbore:{wellbore_id}",
                    "LogCurveDepth": {
                        "Start": curves[0]['start_depth'],
                        "End": curves[0]['end_depth'],
                        "Unit": "m"
                    },
                    "LogCurveData": {
                        "Curves": curve_data
                    }
                }
            }
        }
    }
    return json.dumps(manifest, indent=2)
```

### LAS to OSDU WellLog Workflow

```python
import lasio
import json

def las_to_osdu_welllog(las_file, wellbore_id, legal_tags):
    """Convert LAS file to OSDU WellLog schema"""
    
    # Read LAS file
    log = lasio.read(las_file)
    
    # Extract curves
    curves = []
    for curve in log.curves:
        curves.append({
            "mnemonic": curve.mnemonic,
            "unit": curve.unit,
            "values": curve.data.tolist(),
            "start_depth": log.index_min,
            "end_depth": log.index_max
        })
    
    # Create manifest
    manifest = create_welllog_manifest(
        well_id=log.well['WELL'].value,
        wellbore_id=wellbore_id,
        curves=curves,
        legal_tags=legal_tags
    )
    
    return manifest

# Example usage
manifest = las_to_osdu_welllog(
    "well_001.las",
    wellbore_id="master-data--Wellbore:wellbore-001",
    legal_tags={"legaltags": ["my-legal-tag"], "otherRelevantDataCountries": ["US"]}
)
```

### From LAS to OSDU Workflow

1. **Read LAS file** using lasio, perform quality checks (NULL values, depth consistency)
2. **Create Wellbore** master data if not exists
3. **Create WellLog** work product with curve data
4. **Create Dataset** referencing original LAS file
5. **Submit manifest** via OSDU ingestion API

### OSDU Reference Documentation

- OSDU WellLog schema: https://community.opengroup.org/osdu/data/data-definitions/-/tree/master/Schema/WellLog
- OSDU Data Loading Guide: https://gitlab.opengroup.org/osdu/r3-program-activities/docs/-/raw/master/R3%20Document%20Snapshot/13-osdu-data-loading-guide.pdf
- Dataset Service API: https://community.opengroup.org/osdu/platform/system/dataset

### Software Tasks

If user requests:
- OSDU ingestion pipeline → invoke `petropowers:oil-gas-delegation`
- Well log visualization app → invoke `petropowers:oil-gas-delegation`
- LAS to OSDU conversion script → stay in domain skill (conversion logic)