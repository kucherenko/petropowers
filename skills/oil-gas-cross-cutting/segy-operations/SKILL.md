---
name: segy-operations
description: Use when working with SEG-Y seismic data files - reading, writing, visualization, or manipulation operations.
---

# Skill: SEG-Y Operations

Read, manipulate, and write SEG-Y seismic data using segyio library.

## Purpose

Handle seismic data operations across all oil & gas pipeline skills. Provides code patterns for reading SEG-Y files, extracting headers, visualization, and writing output.

## Reference Materials

Primary source: [Equinor segyio-notebooks](https://github.com/equinor/segyio-notebooks)

Key notebooks:
- `notebooks/basic/01_basic_tutorial.ipynb` - Complete workflow
- `notebooks/basic/02_segy_quicklook.ipynb` - Header analysis
- `notebooks/basic/03_basic_segy_editing.ipynb` - Trace manipulation
- `notebooks/pylops/01_seismic_inversion.ipynb` - Inversion workflow

Library: [segyio](https://github.com/equinor/segyio)

## Dependencies

```bash
pip install segyio numpy pandas matplotlib
```

## Capabilities

### 1. Read SEG-Y Files

```python
import segyio
import numpy as np

# Open file
with segyio.open('seismic.sgy', 'r') as segyfile:
    # Read as 3D cube
    data = segyio.tools.cube(segyfile)
    print(f"Shape: {data.shape}")  # (inlines, crosslines, samples)
    
    # Access inline
    inline_100 = segyfile.iline[100]
    
    # Access crossline
    crossline_200 = segyfile.xline[200]
    
    # Access specific trace
    trace_50 = segyfile.trace[50]
```

### 2. Extract Headers to DataFrame

```python
import segyio
import pandas as pd

with segyio.open('seismic.sgy', 'r') as segyfile:
    # Binary header
    binary_header = segyfile.bin
    
    # Trace headers
    headers = []
    for i, trace_header in enumerate(segyfile.header):
        headers.append({
            'trace_number': i,
            'iline': trace_header[segyio.su.iline],
            'xline': trace_header[segyio.su.xline],
            'cdp_x': trace_header[segyio.su.cdp_x] / 10,  # usually scaled
            'cdp_y': trace_header[segyio.su.cdp_y] / 10,
            'samples': trace_header[segyio.su.ns],
        })
    
    df = pd.DataFrame(headers)
    print(df.head())
```

### 3. Visualize Seismic Data

```python
import segyio
import numpy as np
import matplotlib.pyplot as plt

with segyio.open('seismic.sgy', 'r') as segyfile:
    data = segyio.tools.cube(segyfile)
    
    # Time slice
    time_slice = data[:, :, 100]  # sample index 100
    
    plt.figure(figsize=(12, 8))
    plt.imshow(time_slice.T, cmap='seismic', aspect='auto')
    plt.colorbar(label='Amplitude')
    plt.title('Time Slice at Sample 100')
    plt.xlabel('Crossline')
    plt.ylabel('Inline')
    plt.savefig('time_slice.png', dpi=150)
```

### 4. Manipulate Trace Length

```python
import segyio
from scipy.signal import resample

# Resample or cut traces
with segyio.open('input.sgy', 'r') as src:
    # Cut to specific sample range
    data = segyio.tools.cube(src)
    cut_data = data[:, :, 100:500]  # samples 100-500
    
    # Or resample
    resampled = resample(data, 500, axis=2)  # resample to 500 samples
```

### 5. Write SEG-Y Files

```python
import segyio
import numpy as np

# Create new SEG-Y from numpy array
with segyio.open('template.sgy', 'r') as src:
    # Use source as template for headers
    spec = segyio.spec()
    spec.format = src.format
    spec.sorting = src.sorting
    spec.iline = src.header.iline
    spec.xline = src.header.xline
    spec.samples = src.samples
    spec.ilines = src.ilines
    spec.xlines = src.xlines

# Write new file
data = np.random.randn(100, 120, 500)  # example data

with segyio.open('output.sgy', 'w', spec) as dst:
    dst.trace = data.reshape(-1, data.shape[-1])
    
    # Copy headers from source if needed
    with segyio.open('template.sgy', 'r') as src:
        dst.header = src.header
```

### 6. Create Fault Volume from Similarity

```python
import segyio

with segyio.open('similarity.sgy', 'r') as segyfile:
    similarity = segyio.tools.cube(segyfile)
    
    # Convert similarity to discontinuity (fault indicator)
    # Low similarity = high discontinuity = likely fault
    discontinuity = 1 - similarity
    
    # Threshold to create fault mask
    fault_mask = (discontinuity > 0.6).astype(float)
    
    # Write fault volume
    # (use write pattern from above)
```

## Workflow Integration

Used by:
- `oil-gas-pipelines/exploration` - Seismic interpretation
- `oil-gas-pipelines/reservoir-production` - Horizon picking, attribute analysis

## Common Issues

### File won't open
```python
# Try strict=False for non-standard files
with segyio.open('file.sgy', 'r', strict=False) as segyfile:
    data = segyio.tools.cube(segyfile)
```

### Wrong dimensions
```python
# Check file structure
with segyio.open('file.sgy', 'r') as segyfile:
    print(f"Inlines: {segyfile.ilines}")
    print(f"Crosslines: {segyfile.xlines}")
    print(f"Samples: {len(segyfile.samples)}")
    print(f"Sorting: {segyfile.sorting}")
```

## Software Tasks

If user requests:
- Seismic visualization web app → invoke `petropowers:oil-gas-delegation`
- SEG-Y database system → invoke `petropowers:oil-gas-delegation`
- Automated SEG-Y processing pipeline → invoke `petropowers:oil-gas-delegation`

## Quick Reference

| Operation | Code |
|-----------|------|
| Open file | `segyio.open('file.sgy', 'r')` |
| Read cube | `segyio.tools.cube(segyfile)` |
| Get inline | `segyfile.iline[inline_number]` |
| Get trace header | `segyfile.header[trace_number]` |
| Write file | `segyio.open('file.sgy', 'w', spec)` |

## Example Session

**User:** "What's the amplitude range in this SEG-Y file?"

**Agent:**
```python
import segyio
import numpy as np

with segyio.open('seismic.sgy', 'r') as segyfile:
    data = segyio.tools.cube(segyfile)
    print(f"Amplitude range: {data.min():.2f} to {data.max():.2f}")
    print(f"Mean: {data.mean():.2f}, Std: {data.std():.2f}")
```

Output:
```
Amplitude range: -32768.00 to 32767.00
Mean: 12.34, Std: 4567.89
```

## OSDU Integration

### SEG-Y to VDS/ZGY Conversion

OSDU (Open Subsurface Data Universe) uses cloud-native formats for seismic data:

- **VDS (Voxel Data Service)** - Cloud-optimized seismic format for random access
- **ZGY** - Compressed seismic format for visualization

**Conversion Workflow:**
1. Upload SEG-Y file to OSDU (via Dataset Service)
2. Trigger SegYToVDS DAG conversion workflow
3. VDS file stored in cloud storage
4. Access via Seismic DMS (Data Management Service)

### OSDU Schemas for Seismic

| Schema | Purpose |
|--------|---------|
| SeismicBinGrid | Survey geometry |
| SeismicTraceData | Individual seismic traces |
| SeismicLineGeometry2D | 2D seismic lines |
| SeismicLineGeometry3D | 3D seismic surveys |

### OSDU Dataset Service API

```python
import requests

# Get storage instructions
storage_resp = requests.post(
    "https://api.osdu.com/api/dataset/v1/storageInstructions",
    headers={
        "Authorization": "Bearer <token>",
        "data-partition-id": "mypartition"
    },
    json={
        "kind": "osdu:wks:dataset--File.Seismic:1.0.0",
        "dataContentType": "application/x-segy"
    }
)

# Upload file to provided URL
upload_url = storage_resp.json()["storageLocation"]["signedUrl"]
with open("seismic.sgy", "rb") as f:
    requests.put(upload_url, data=f.read())

# Register dataset
register_resp = requests.post(
    "https://api.osdu.com/api/dataset/v1/register",
    headers={
        "Authorization": "Bearer <token>",
        "data-partition-id": "mypartition"
    },
    json={
        "id": "dataset--File.Seismic:1654321",
        "kind": "osdu:wks:dataset--File.Seismic:1.0.0",
        "ancestry": {
            "parents": ["work-product--SeismicTraceData:12345"]
        }
    }
)
```

### Create OSDU Manifest for Seismic

```python
import json
from datetime import datetime

def create_seismic_manifest(survey_id, segy_file, legal_tags):
    """Create OSDU manifest for 3D seismic survey"""
    
    manifest = {
        "kind": "osdu:wks:Manifest:1.0.0",
        "ReferenceData": [],
        "MasterData": [],
        "Data": {
            "WorkProduct": {
                "kind": "osdu:wks:work-product--SeismicTraceData:1.0.0",
                "id": f"work-product--SeismicTraceData:{survey_id}",
                "legal": legal_tags,
                "data": {
                    "Name": f"Seismic Survey {survey_id}",
                    "Description": "3D seismic data",
                    "CreationDateTime": datetime.utcnow().isoformat(),
                    "DatasetIDs": [f"dataset--File.Seismic:{segy_file}"],
                    "ExtensionProperties": {}
                }
            },
            "Datasets": [{
                "kind": "osdu:wks:dataset--File.Seismic:1.0.0",
                "id": f"dataset--File.Seismic:{segy_file}",
                "data": {
                    "Name": segy_file,
                    "DataContentType": "application/x-segy"
                }
            }]
        }
    }
    return json.dumps(manifest, indent=2)

# Example usage
manifest = create_seismic_manifest(
    survey_id="survey-2024-001",
    segy_file="seismic_001.sgy",
    legal_tags={"legaltags": ["my-legal-tag"], "otherRelevantDataCountries": ["US"]}
)
```

### From SEG-Y to OSDU Workflow

1. **Quality check** SEG-Y file using segyio (see Capabilities section above)
2. **Create OSDU manifest** with SeismicBinGrid and SeismicLineGeometry3D schemas
3. **Upload SEG-Y** to cloud storage via Dataset Service
4. **Trigger SegYToVDS DAG** for conversion to VDS format
5. **Access VDS** via Seismic DMS API

### OSDU Reference Documentation

- OSDU SEGY to ZGY Conversion: https://gitlab.opengroup.org/osdu/r3-program-activities/docs/-/raw/master/R3%20Document%20Snapshot/osdu-segy-to-zgy-conversion.pdf
- OSDU Dataset Service: https://community.opengroup.org/osdu/platform/system/dataset
- Seismic Schemas: https://community.opengroup.org/osdu/data/data-definitions

### Software Tasks

If user requests:
- OSDU data ingestion pipeline → invoke `petropowers:oil-gas-delegation`
- Seismic visualization web app → invoke `petropowers:oil-gas-delegation`
- OSDU schema validation → stay in domain skill (validate against OSDU schemas)