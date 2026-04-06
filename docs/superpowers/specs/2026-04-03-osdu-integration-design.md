# OSDU Integration for Oil & Gas Skills

## Overview

Add OSDU (Open Subsurface Data Universe) data format support to the existing oil & gas AI skills framework. OSDU is the industry standard for cloud-native subsurface data management. This integration enables agents to work with both traditional file formats (LAS, SEG-Y, WITSML) and cloud-native OSDU schemas.

## Architecture

**Approach: Add OSDU sections to existing cross-cutting skills**

```
skills/oil-gas-cross-cutting/
├── segy-operations/SKILL.md
│   ├── (existing segyio content)
│   └── NEW: OSDU Integration section
│       - SEG-Y to VDS/ZGY conversion
│       - OSDU Dataset Service APIs
│       - Seismic schema mapping
├── well-log-analysis/SKILL.md
│   ├── (existing lasio content)
│   └── NEW: OSDU Integration section
│       - LAS to OSDU WellLog schema
│       - OSDU manifest ingestion
│       - WellLog work products
└── scada-timeseries/SKILL.md
    ├── (existing content)
    └── NEW: OSDU Integration section
        - WITSML to OSDU schema mapping
        - PRODML to OSDU schema mapping
        - Real-time ingestion workflows
```

## Benefits

- **Single place for all SEG-Y/LAS/WITSML workflows** - Traditional and OSDU approaches side-by-side
- **OSDU stays connected to domain operations** - Schema mapping appears where data work happens
- **Discoverable** - Agents see OSDU workflow when working with data
- **Incremental adoption** - Use traditional formats, upgrade to OSDU when ready

## Components

### 1. SEG-Y Operations + OSDU

**Location:** `skills/oil-gas-cross-cutting/segy-operations/SKILL.md`

**Add section: OSDU Integration**

#### SEG-Y to VDS/ZGY Conversion

OSDU uses cloud-native formats:
- **VDS (Voxel Data Service)** - Cloud-optimized seismic for random access
- **ZGY** - Compressed format for visualization

Conversion workflow:
1. Upload SEG-Y to OSDU (via Dataset Service)
2. Trigger SegYToVDS DAG workflow
3. VDS stored in cloud storage
4. Access via Seismic DMS API

#### OSDU Schemas for Seismic

| Schema | Purpose |
|--------|---------|
| SeismicBinGrid | Survey geometry |
| SeismicTraceData | Individual seismic traces |
| SeismicLineGeometry2D | 2D seismic lines |
| SeismicLineGeometry3D | 3D seismic surveys |

#### OSDU Dataset Service API

```python
# Get storage instructions
POST /api/dataset/v1/storageInstructions
{
  "kind": "osdu:wks:dataset--File.Seismic:1.0.0",
  "dataContentType": "application/x-segy"
}

# Register dataset
POST /api/dataset/v1/register
{
  "id": "dataset--File.Seismic:1654321",
  "kind": "osdu:wks:dataset--File.Seismic:1.0.0",
  "ancestry": {
    "parents": ["work-product--SeismicTraceData:12345"]
  }
}
```

#### Create OSDU Manifest for Seismic

```python
def create_seismic_manifest(survey_id, segy_file, legal_tags):
    """Create OSDU manifest for 3D seismic survey"""
    return {
        "kind": "osdu:wks:Manifest:1.0.0",
        "Data": {
            "WorkProduct": {
                "kind": "osdu:wks:work-product--SeismicTraceData:1.0.0",
                "id": f"work-product--SeismicTraceData:{survey_id}",
                "legal": legal_tags,
                "data": {
                    "Name": f"Seismic Survey {survey_id}",
                    "DatasetIDs": [f"dataset--File.Seismic:{segy_file}"]
                }
            }
        }
    }
```

#### From SEG-Y to OSDU Workflow

1. Quality check SEG-Y file using segyio
2. Create OSDU manifest (SeismicBinGrid, SeismicLineGeometry3D)
3. Upload SEG-Y to cloud storage via Dataset Service
4. Trigger SegYToVDS DAG for conversion
5. Access VDS via Seismic DMS API

#### Software Tasks Delegation

- OSDU data ingestion pipeline → invoke `superpowers:oil-gas-delegation`
- Seismic visualization web app → invoke `superpowers:oil-gas-delegation`
- OSDU schema validation → stay in domain skill

---

### 2. Well Log Analysis + OSDU

**Location:** `skills/oil-gas-cross-cutting/well-log-analysis/SKILL.md`

**Add section: OSDU Integration**

#### LAS to OSDU WellLog Schema

| LAS Field | OSDU Field |
|-----------|-----------|
| WELL | FacilityName (via Well) |
| FLD | FieldName |
| DEPT | LogCurveDepth |
| GR, RHOB, NPHI | LogCurveData.Curves |
| Company | Operator |

#### OSDU Dataset Service API

```python
# Storage instructions
storage_resp = requests.post(
    "https://api.osdu.com/api/dataset/v1/storageInstructions",
    headers={"Authorization": "Bearer <token>", "data-partition-id": "mypartition"},
    json={"kind": "osdu:wks:dataset--File.LAS:1.0.0"}
)

# Upload file to provided URL
upload_url = storage_resp.json()["storageLocation"]["signedUrl"]
requests.put(upload_url, data=open("well.las", "rb").read())
```

#### Create OSDU WellLog Manifest

```python
def create_welllog_manifest(well_id, wellbore_id, curves, legal_tags):
    """Create OSDU manifest for well logs"""
    curve_data = [{
        "CurveID": f"log-curve-{c['mnemonic']}",
        "CurveUnit": c['unit'],
        "LogCurveValues": c['values']
    } for c in curves]
    
    return {
        "kind": "osdu:wks:Manifest:1.0.0",
        "Data": {
            "WorkProduct": {
                "kind": "osdu:wks:work-product--WellLog:1.0.0",
                "data": {
                    "WellboreID": f"master-data--Wellbore:{wellbore_id}",
                    "LogCurveData": {"Curves": curve_data}
                }
            }
        }
    }
```

#### From LAS to OSDU Workflow

1. Read LAS file using lasio, perform quality checks
2. Create Wellbore master data if not exists
3. Create WellLog work product with curve data
4. Create Dataset referencing original LAS file
5. Submit manifest via OSDU ingestion API

#### Code Example: LAS to WellLog Conversion

```python
import lasio

def las_to_osdu_welllog(las_file, wellbore_id, legal_tags):
    """Convert LAS file to OSDU WellLog schema"""
    log = lasio.read(las_file)
    
    curves = [{
        "mnemonic": c.mnemonic,
        "unit": c.unit,
        "values": c.data.tolist()
    } for c in log.curves]
    
    return create_welllog_manifest(
        well_id=log.well['WELL'].value,
        wellbore_id=wellbore_id,
        curves=curves,
        legal_tags=legal_tags
    )
```

#### Software Tasks Delegation

- OSDU ingestion pipeline → invoke `superpowers:oil-gas-delegation`
- Well log visualization app → invoke `superpowers:oil-gas-delegation`
- LAS to OSDU conversion → stay in domain skill

---

### 3. SCADA Time-Series + OSDU

**Location:** `skills/oil-gas-cross-cutting/scada-timeseries/SKILL.md`

**Add section: OSDU Integration**

#### WITSML/PRODML to OSDU Schema Mapping

| WITSML Object | OSDU Schema |
|---------------|-------------|
| wells | master-data--Well |
| wellbores | master-data--Wellbore |
| trajectory | work-product--WellboreTrajectory |
| log | work-product--WellLog |
| mudLog | work-product--MudLog |
| rig | master-data--Rig |

| PRODML Object | OSDU Schema |
| ---------------- | ------------- |
| wellProduction | work-product--Production |
| fluidAnalysis | work-product--FluidsAnalysis |
| wellTest | work-product--WellTest |

#### Real-Time Data Ingestion (WITSML → OSDU)

```python
def ingest_witsml_log(witsml_data, wellbore_id, legal_tags):
    """Convert WITSML Log to OSDU WellLog"""
    import xml.etree.ElementTree as ET
    root = ET.fromstring(witsml_data)
    
    ns = {'w': 'http://www.witsml.org/schemas/131'}
    curves = []
    for log_curve in root.findall('.//w:logCurveInfo', ns):
        curves.append({
            "mnemonic": log_curve.get('mnemonic'),
            "unit": log_curve.get('unit'),
            "startDepth": float(log_curve.find('w:minIndex', ns).text),
            "endDepth": float(log_curve.find('w:maxIndex', ns).text)
        })
    
    return {
        "kind": "osdu:wks:Manifest:1.0.0",
        "Data": {
            "WorkProduct": {
                "kind": "osdu:wks:work-product--WellLog:1.0.0",
                "data": {
                    "WellboreID": f"master-data--Wellbore:{wellbore_id}",
                    "LogCurveDepth": {
                        "Start": min(c['startDepth'] for c in curves),
                        "End": max(c['endDepth'] for c in curves)
                    }
                }
            }
        }
    }
```

#### Historical Production Data (PRODML → OSDU)

```python
def prodml_to_osdu_production(prodml_file, well_id):
    """Convert PRODML production data to OSDU"""
    import xml.etree.ElementTree as ET
    root = ET.fromstring(prodml_file)
    
    ns = {'p': 'http://www.prodml.org/schemas/ProdML'}
    production_data = []
    
    for well_prod in root.findall('.//p:wellProduction', ns):
        production_data.append({
            "date": well_prod.get('date'),
            "oil": float(well_prod.find('p:oilRate', ns).text),
            "gas": float(well_prod.find('p:gasRate', ns).text),
            "water": float(well_prod.find('p:waterRate', ns).text)
        })
    
    return {
        "kind": "osdu:wks:Manifest:1.0.0",
        "Data": {
            "WorkProduct": {
                "kind": "osdu:wks:work-product--WellProduction:1.0.0",
                "data": {
                    "WellID": f"master-data--Well:{well_id}",
                    "ProductionData": production_data
                }
            }
        }
    }
```

#### Real-Time OSDU Ingestion

```python
def ingest_realtime_to_osdu(datastream, wellbore_id, legal_tags, osdu_config):
    """Ingest real-time SCADA data to OSDU"""
    activities = []
    for point in datastream:
        activities.append({
            "ActivityType": "Drilling",
            "ActivityStartTime": point['timestamp'],
            "ActivityData": {
                "Depth": point['depth'],
                "ROP": point['rop'],
                "WOB": point['wob']
            }
        })
    
    # Batch submit to OSDU
    for i in range(0, len(activities), 100):
        batch = activities[i:i+100]
        manifest = {
            "kind": "osdu:wks:Manifest:1.0.0",
            "Data": {"WorkProduct": {"data": {"Activities": batch}}}
        }
        requests.post(f"{osdu_config['api_url']}/workflow/v1/...", json=manifest)
```

#### Software Tasks Delegation

- OSDU real-time ingestion system → invoke `superpowers:oil-gas-delegation`
- WITSML/PRODML parser web app → invoke `superpowers:oil-gas-delegation`
- OSDU schema validator → stay in domain skill

---

## Reference Documentation

**OSDU Platform:**
- OSDU Documentation Portal: https://osduforum.org/getting-started/osdu-documentation/
- Dataset Service: https://community.opengroup.org/osdu/platform/system/dataset
- Schema Definitions: https://community.opengroup.org/osdu/data/data-definitions

**Key Documents:**
- OSDU Application Developer's Guide
- OSDU Data Loading Guide
- OSDU SEGY to ZGY Conversion
- OSDU Schema Usage Guide
- OSDU Reference Architecture

**Format Conversions:**
- SEG-Y to VDS: OSDU SegYToVDS converter
- LAS to WellLog: OSDU LAS ingestion workflow
- WITSML to OSDU: OSDU WITSML adapter

## Implementation Strategy

**Phase 1: Add OSDU sections to existing skills**
- Add OSDU Integration section to `segy-operations/SKILL.md`
- Add OSDU Integration section to `well-log-analysis/SKILL.md`
- Add OSDU Integration section to `scada-timeseries/SKILL.md`

**Phase 2: Test OSDU workflows**
- Test SEG-Y → VDS conversion examples
- Test LAS → WellLog manifest generation
- Test WITSML/PRODML parsing and OSDU ingestion

**Phase 3: Validate against OSDU schemas**
- Compare generated manifests against OSDU schema definitions
- Verify API calls match OSDU Dataset Service specification

## Success Criteria

- All three cross-cutting skills have OSDU Integration sections
- Code examples cover SEG-Y, LAS, WITSML/PRODML to OSDU workflows
- Manifest generation follows OSDU R1 schema definitions
- API examples match OSDU Dataset Service specification
- Traditional and OSDU approaches are discoverable side-by-side
- Software tasks correctly delegate to superpowers skills