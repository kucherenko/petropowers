# Oil & Gas AI Skills Framework Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a domain-specific AI skills framework for the oil & gas industry with 10 skills across foundation, cross-cutting, and pipeline categories.

**Architecture:** Hierarchical with delegation layer. Pipeline skills reference cross-cutting data skills for domain operations and delegate software tasks to superpowers via the delegation skill.

**Tech Stack:** Markdown SKILL.md files, Python code examples (segyio, lasio), references to external notebooks

---

## File Structure

**Create:**
```
skills/oil-gas-foundation/SKILL.md
skills/oil-gas-delegation/SKILL.md
skills/oil-gas-cross-cutting/segy-operations/SKILL.md
skills/oil-gas-cross-cutting/well-log-analysis/SKILL.md
skills/oil-gas-cross-cutting/scada-timeseries/SKILL.md
skills/oil-gas-pipelines/exploration/SKILL.md
skills/oil-gas-pipelines/drilling/SKILL.md
skills/oil-gas-pipelines/reservoir-production/SKILL.md
skills/oil-gas-pipelines/midstream/SKILL.md
skills/oil-gas-pipelines/refining/SKILL.md
```

---

## Task 1: Oil & Gas Foundation Skill

**Files:**
- Create: `skills/oil-gas-foundation/SKILL.md`

- [ ] **Step 1: Create foundation skill directory**

Run: `mkdir -p skills/oil-gas-foundation`
Expected: Directory created

- [ ] **Step 2: Write foundation skill content**

Create `skills/oil-gas-foundation/SKILL.md`:

```markdown
# Skill: Oil & Gas Foundation

Core industry knowledge shared across all oil & gas pipeline skills.

## Industry Overview

The oil & gas industry operates across three primary segments:

### Upstream (Exploration & Production)
Goal: Discover and extract hydrocarbons

Sub-pipelines:
- Exploration
- Appraisal  
- Drilling
- Production

### Midstream (Transportation & Storage)
Goal: Move and store oil/gas

Sub-pipelines:
- Pipeline transport
- LNG processing
- Storage facilities

### Downstream (Refining & Distribution)
Goal: Convert raw hydrocarbons into usable products

Sub-pipelines:
- Refining
- Petrochemicals
- Distribution & retail

## Role Hierarchy

Functional hierarchy (not organizational chart):

```
Executives
  ↓
Asset / Field Managers
  ↓
Domain Leads (Geology, Drilling, Production, Facilities)
  ↓
Engineers & Scientists
  ↓
Operators / Technicians
  ↓
Data & Digital (cross-cutting)
```

## End-to-End Data Flow

```
Raw Data Acquisition
  ↓
Data Ingestion (WITSML, LAS, SCADA, etc.)
  ↓
Data Processing & QC
  ↓
Domain Interpretation (Geology, Drilling, etc.)
  ↓
Modeling & Simulation
  ↓
Decision Making
  ↓
Execution (Drill / Produce / Transport)
  ↓
Feedback Loop (real-time data)
```

## Common Data Formats

| Format | Purpose | File Extension |
|--------|---------|----------------|
| LAS | Well log data | .las |
| SEG-Y | Seismic data | .sgy, .segy |
| WITSML | Drilling/completion data | XML |
| PRODML | Production data | XML |
| RESQML | Reservoir models | XML/EPC |
| DLIS | Well log data (binary) | .dlis |

## Data Types

- **Structured**: Tables (production logs, drilling parameters)
- **Semi-structured**: LAS, WITSML, PRODML
- **Unstructured**: Reports, PDFs, images, core photos
- **Spatial**: Seismic volumes, maps, geological models
- **Time-series**: Sensors, SCADA, real-time drilling data

## Safety Culture

Oil & gas operations prioritize safety above all else:

- HSE (Health, Safety, Environment) is non-negotiable
- "Stop work authority" - anyone can halt unsafe operations
- Risk assessments (JSA, HAZOP, HAZID) before operations
- Regulatory compliance: EPA, OSHA, BSEE (US), NPD (Norway), etc.

### Key Safety Concepts

- **Well control**: Preventing uncontrolled hydrocarbon release
- **Process safety**: Managing hazardous materials and pressures
- **Asset integrity**: Ensuring equipment fitness-for-service
- **Environmental protection**: Spill prevention, emissions control

## How To Use This Skill

This skill is referenced by all pipeline skills. It provides:

1. Shared terminology and context
2. Data format reference
3. Safety culture foundation
4. Role hierarchy understanding

Pipeline skills build on this foundation with domain-specific workflows.
```

- [ ] **Step 3: Verify file created**

Run: `ls skills/oil-gas-foundation/SKILL.md`
Expected: File path printed

- [ ] **Step 4: Commit**

Run: `git add skills/oil-gas-foundation/SKILL.md && git commit -m "feat: add oil & gas foundation skill"`
Expected: Commit created

---

## Task 2: Oil & Gas Delegation Skill

**Files:**
- Create: `skills/oil-gas-delegation/SKILL.md`

- [ ] **Step 1: Create delegation skill directory**

Run: `mkdir -p skills/oil-gas-delegation`
Expected: Directory created

- [ ] **Step 2: Write delegation skill content**

Create `skills/oil-gas-delegation/SKILL.md`:

```markdown
# Skill: Oil & Gas Delegation

Meta-skill that detects software tasks and routes them to appropriate superpowers skills.

## Purpose

Oil & gas domain skills handle interpretation, analysis, and optimization recommendations. When a request requires building software (web apps, dashboards, APIs, databases), this skill delegates to superpowers skills.

## Detection Logic

When a request contains any of these keywords, delegate to software development workflow:

- Web app, dashboard, visualization
- API, REST endpoint, GraphQL
- Database schema, data model, persistence
- Data pipeline, ETL, automation script
- Report generation system
- Alert notification system

### Decision Flow

```
User request received
  ↓
Does request require building software?
  ↓
  YES → Invoke oil-gas-delegation
        ↓
        Route to appropriate superpowers workflow
  ↓
  NO → Handle within domain skill
```

## Delegation Workflows

### Web Application / Dashboard

Request: "Build a drilling monitoring dashboard"

1. Invoke `superpowers:brainstorming` skill
   - Refine dashboard requirements
   - Identify data sources, users, features
   - Create design document
   
2. Get user approval on design

3. Invoke `superpowers:writing-plans` skill
   - Break into implementation tasks
   - Define file structure, tech stack
   
4. Execute via `superpowers:subagent-driven-development`
   - TDD for components
   - Integration tests
   - Code review between tasks

### Data Pipeline

Request: "Create an automated LAS file processor"

1. Invoke `superpowers:brainstorming`
2. Get design approval
3. Invoke `superpowers:writing-plans`
4. Execute via `superpowers:subagent-driven-development`

### API Development

Request: "Build a REST API for production data"

1. Invoke `superpowers:brainstorming`
2. Get design approval
3. Invoke `superpowers:writing-plans`
4. Execute via `superpowers:subagent-driven-development`

### Quick Script

Request: "Write a script to convert SEG-Y to numpy"

1. Check if truly needs TDD (one-off vs. production)
2. If production: Use TDD workflow
3. If one-off: Direct implementation with verification

## Domain-Only Tasks (No Delegation)

These tasks stay within domain skills:

- "Analyze this seismic section for faults"
- "Interpret well log data for porosity"
- "Calculate probability of success for this prospect"
- "Optimize drilling parameters"
- "Forecast production decline"
- "Assess pipeline integrity"

Domain skills provide analysis, recommendations, and domain expertise. Software skills build tools to support that work.

## Integration Points

Domain skills invoke this skill when they detect software requirements:

```markdown
## Software Tasks

If the user requests software development:

1. Acknowledge the request
2. Invoke `superpowers:oil-gas-delegation`
3. Delegation skill routes to appropriate workflow
4. Return to domain work after software is complete
```

## Example Interaction

**User:** "I need a dashboard to visualize my seismic data"

**Agent response:**
1. Recognize: "dashboard" → software task
2. Invoke: `superpowers:oil-gas-delegation`
3. Delegation skill:
   - Invokes `superpowers:brainstorming` for dashboard design
   - Design: "Seismic Visualization Dashboard"
     - Upload SEG-Y files
     - Display inline/crossline/time slices
     - Filter by amplitude range
   - User approves design
   - Invokes `superpowers:writing-plans` for implementation plan
   - Executes via TDD workflow

**User:** "What's the porosity in this well based on the logs?"

**Agent response:**
1. Recognize: Domain analysis, no software
2. Invoke: `superpowers:oil-gas-pipelines/exploration`
3. Domain skill:
   - Reads LAS file
   - Calculates porosity from density/neutron logs
   - Returns analysis result

## Usage Instructions

When implementing this skill:

1. Check user request for software keywords
2. If software: Route to brainstorming workflow
3. If domain: Stay in domain skill
4. After software complete, return to domain context

This skill is the bridge between oil & gas domain expertise and software engineering best practices.
```

- [ ] **Step 3: Verify file created**

Run: `ls skills/oil-gas-delegation/SKILL.md`
Expected: File path printed

- [ ] **Step 4: Commit**

Run: `git add skills/oil-gas-delegation/SKILL.md && git commit -m "feat: add oil & gas delegation skill"`
Expected: Commit created

---

## Task 3: SEG-Y Operations Skill

**Files:**
- Create: `skills/oil-gas-cross-cutting/segy-operations/SKILL.md`

- [ ] **Step 1: Create cross-cutting directory**

Run: `mkdir -p skills/oil-gas-cross-cutting/segy-operations`
Expected: Directories created

- [ ] **Step 2: Write SEG-Y skill content**

Create `skills/oil-gas-cross-cutting/segy-operations/SKILL.md`:

```markdown
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
# Resample or cut traces
with segyio.open('input.sgy', 'r') as src:
    # Cut to specific sample range
    data = segyio.tools.cube(src)
    cut_data = data[:, :, 100:500]  # samples 100-500
    
    # Or resample
    from scipy.signal import resample
    resampled = resample(data, 500, axis=2)  # resample to 500 samples
```

### 5. Write SEG-Y Files

```python
import segyio

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
- Seismic visualization web app → invoke `superpowers:oil-gas-delegation`
- SEG-Y database system → invoke `superpowers:oil-gas-delegation`
- Automated SEG-Y processing pipeline → invoke `superpowers:oil-gas-delegation`

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
```

- [ ] **Step 3: Verify file created**

Run: `ls skills/oil-gas-cross-cutting/segy-operations/SKILL.md`
Expected: File path printed

- [ ] **Step 4: Commit**

Run: `git add skills/oil-gas-cross-cutting/segy-operations/SKILL.md && git commit -m "feat: add SEG-Y operations skill"`
Expected: Commit created

---

## Task 4: Well Log Analysis Skill

**Files:**
- Create: `skills/oil-gas-cross-cutting/well-log-analysis/SKILL.md`

- [ ] **Step 1: Create well log skill directory**

Run: `mkdir -p skills/oil-gas-cross-cutting/well-log-analysis`
Expected: Directory created

- [ ] **Step 2: Write well log skill content**

Create `skills/oil-gas-cross-cutting/well-log-analysis/SKILL.md`:

```markdown
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
import numpy as np

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
import matplotlib.pyplot as plt

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
# Export to CSV
log.to_csv('output.csv')

# Export to Excel
log.to_excel('output.xlsx')

# Write new LAS file
log.write('modified.las')
```

### 7. Handle Non-Standard Files

```python
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
from lasio import LASFile, CurveItem, HeaderItem

# Create new LAS file
las = LASFile()

# Add well metadata
las.well.append(HeaderItem('WELL', value='Well-001'))
las.well.append(HeaderItem('FLD', value='Test Field'))
las.well.append(HeaderItem('LOC', value='North Sea'))
las.well.append(HeaderItem('SRVC', value='Acme Logging'))

# Add curves
import numpy as np
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
- Well log database → invoke `superpowers:oil-gas-delegation`
- Automated log interpretation tool → invoke `superpowers:oil-gas-delegation`
- Log visualization web app → invoke `superpowers:oil-gas-delegation`

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
```

- [ ] **Step 3: Verify file created**

Run: `ls skills/oil-gas-cross-cutting/well-log-analysis/SKILL.md`
Expected: File path printed

- [ ] **Step 4: Commit**

Run: `git add skills/oil-gas-cross-cutting/well-log-analysis/SKILL.md && git commit -m "feat: add well log analysis skill"`
Expected: Commit created

---

## Task 5: SCADA Time-Series Skill

**Files:**
- Create: `skills/oil-gas-cross-cutting/scada-timeseries/SKILL.md`

- [ ] **Step 1: Create SCADA skill directory**

Run: `mkdir -p skills/oil-gas-cross-cutting/scada-timeseries`
Expected: Directory created

- [ ] **Step 2: Write SCADA skill content**

Create `skills/oil-gas-cross-cutting/scada-timeseries/SKILL.md`:

```markdown
# Skill: SCADA & Time-Series

Handle real-time SCADA data, WITSML/PRODML streams, and time-series analysis.

## Purpose

Process real-time sensor data across drilling, production, and pipeline operations. Provides patterns for handling time-series data, anomaly detection, and quality control.

## Data Standards

### WITSML (Wellsite Information Transfer Standard Markup Language)

- XML-based standard for drilling and completion data
- Managed by Energistics consortium
- Real-time drilling parameters, mud logs, trajectory data

### PRODML (Production Markup Language)

- XML-based standard for production data
- Production rates, well tests, allocations
- Real-time and historical data

### Common Data Types

| Parameter | Unit | Typical Range |
|-----------|------|----------------|
| Pressure | psi, bar | 0-15000 |
| Temperature | °F, °C | 50-400 |
| Flow rate | bpd, m³/d | 0-50000 |
| RPM | rev/min | 0-200 |
| WOB (Weight on Bit) | klbs | 0-80 |
| Torque | kft-lbs | 0-50 |
| Mud weight | ppg | 8-20 |

## Capabilities

### 1. Parse Time-Series Data

```python
import pandas as pd
from datetime import datetime, timedelta

# Simulated SCADA data
timestamps = pd.date_range(start='2024-01-01', periods=1000, freq='1min')

data = pd.DataFrame({
    'timestamp': timestamps,
    'pressure_psi': np.random.normal(5000, 100, 1000),
    'temp_f': np.random.normal(180, 5, 1000),
    'flow_bpd': np.random.normal(10000, 200, 1000),
})

data.set_index('timestamp', inplace=True)
print(data.head())
```

### 2. WITSML Parsing

```python
import xml.etree.ElementTree as ET

# Parse WITSML document (simplified)
def parse_witsml_log(xml_content):
    root = ET.fromstring(xml_content)
    
    # Namespace handling
    ns = {'w': 'http://www.witsml.org/schemas/131'}
    
    data_points = []
    for point in root.findall('.//w:mnemonic', ns):
        data_points.append({
            'mnemonic': point.get('mnemonic'),
            'value': point.text,
            'unit': point.get('unitUom'),
        })
    
    return pd.DataFrame(data_points)
```

### 3. Real-Time Monitoring

```python
import pandas as pd
import numpy as np

class RealTimeMonitor:
    def __init__(self, threshold_high, threshold_low):
        self.threshold_high = threshold_high
        self.threshold_low = threshold_low
        self.history = []
    
    def check(self, timestamp, value, parameter):
        status = 'normal'
        
        if value > self.threshold_high:
            status = 'high'
        elif value < self.threshold_low:
            status = 'low'
        
        self.history.append({
            'timestamp': timestamp,
            'parameter': parameter,
            'value': value,
            'status': status,
        })
        
        return status
    
    def get_alerts(self):
        df = pd.DataFrame(self.history)
        return df[df['status'] != 'normal']

# Example usage
monitor = RealTimeMonitor(threshold_high=5500, threshold_low=4500)
monitor.check('2024-01-01 10:00', 5200, 'pressure')
monitor.check('2024-01-01 10:01', 5600, 'pressure')  # Alert!
monitor.check('2024-01-01 10:02', 4400, 'pressure')  # Alert!

alerts = monitor.get_alerts()
print(alerts)
```

### 4. Anomaly Detection

```python
from scipy import stats
import numpy as np

def detect_anomalies_zscore(data, threshold=3):
    """Detect anomalies using Z-score"""
    z_scores = np.abs(stats.zscore(data))
    anomalies = z_scores > threshold
    return anomalies

def detect_anomalies_iqr(data, k=1.5):
    """Detect anomalies using IQR method"""
    Q1 = np.percentile(data, 25)
    Q3 = np.percentile(data, 75)
    IQR = Q3 - Q1
    
    lower = Q1 - k * IQR
    upper = Q3 + k * IQR
    
    anomalies = (data < lower) | (data > upper)
    return anomalies

# Example
pressure = data['pressure_psi'].values
anomalies = detect_anomalies_iqr(pressure)

print(f"Anomalies detected: {anomalies.sum()}")
print(f"Anomaly values: {pressure[anomalies]}")
```

### 5. Quality Flags

```python
# Standard quality flags
QUALITY_FLAGS = {
    0: 'Good',
    1: 'Uncertain',
    2: 'Suspect',
    3: 'Bad',
    4: 'Missing',
}

def assign_quality_flag(value, expected_min, expected_max, rate_of_change_limit):
    """Assign quality flag based on validation rules"""
    
    # Missing value
    if pd.isna(value):
        return 4
    
    # Out of expected range
    if value < expected_min or value > expected_max:
        return 3
    
    # Rate of change check (would need previous value)
    # Simplified here
    
    return 0  # Good

# Apply to dataframe
data['quality'] = data['pressure_psi'].apply(
    lambda x: assign_quality_flag(x, expected_min=4000, expected_max=6000, rate_of_change_limit=100)
)

print(data['quality'].value_counts())
```

### 6. Resampling and Aggregation

```python
# Resample to different frequencies
hourly = data.resample('1H').agg({
    'pressure_psi': ['mean', 'min', 'max', 'std'],
    'temp_f': ['mean', 'min', 'max'],
    'flow_bpd': ['mean', 'sum'],
})

print(hourly.head())

# Rolling statistics
data['pressure_ma_1h'] = data['pressure_psi'].rolling('1H').mean()
data['flow_cumsum'] = data['flow_bpd'].cumsum()
```

### 7. Trend Analysis

```python
from scipy.signal import savgol_filter

# Smooth noisy data
smoothed = savgol_filter(data['pressure_psi'], window_length=51, polyorder=3)

# Calculate trend
from scipy import stats

timestamps_numeric = np.arange(len(data))
slope, intercept, r_value, p_value, std_err = stats.linregress(
    timestamps_numeric, data['pressure_psi']
)

print(f"Trend slope: {slope:.4f} psi/minute")
print(f"R-squared: {r_value**2:.4f}")
```

## Workflow Integration

Used by:
- `oil-gas-pipelines/drilling` - Real-time drilling monitoring
- `oil-gas-pipelines/reservoir-production` - Production optimization
- `oil-gas-pipelines/midstream` - Pipeline leak detection
- `oil-gas-pipelines/refining` - Process monitoring

## Common Issues

### Time zone handling
```python
# Ensure UTC timestamps
data.index = pd.to_datetime(data.index, utc=True)

# Convert to local time
data.index = data.index.tz_convert('America/Chicago')
```

### Missing data gaps
```python
# Check for gaps
expected_range = pd.date_range(start=data.index.min(), end=data.index.max(), freq='1min')
gaps = expected_range.difference(data.index)

print(f"Missing timestamps: {len(gaps)}")

# Fill gaps
data = data.reindex(expected_range)
data = data.interpolate(method='time')
```

### Outliers
```python
# Remove outliers
clean = data[~detect_anomalies_iqr(data['pressure_psi'])]

# Or replace with median
anomaly_mask = detect_anomalies_iqr(data['pressure_psi'])
data.loc[anomaly_mask, 'pressure_psi'] = data['pressure_psi'].median()
```

## Software Tasks

If user requests:
- Real-time monitoring dashboard → invoke `superpowers:oil-gas-delegation`
- Anomaly detection system → invoke `superpowers:oil-gas-delegation`
- WITSML data integration → invoke `superpowers:oil-gas-delegation`

## Quick Reference

| Operation | Code |
|-----------|------|
| Resample | `data.resample('1H').mean()` |
| Rolling mean | `data.rolling('1H').mean()` |
| Z-score anomaly | `np.abs(stats.zscore(data)) > 3` |
| IQR anomaly | `(data < Q1-1.5*IQR) \| (data > Q3+1.5*IQR)` |
| Time interpolation | `data.interpolate(method='time')` |

## Example Session

**User:** "Detect anomalies in this pressure data"

**Agent:**
```python
import pandas as pd
import numpy as np
from scipy import stats

pressure = data['pressure_psi'].values

# IQR method
anomalies = detect_anomalies_iqr(pressure)

print(f"Total points: {len(pressure)}")
print(f"Anomalies: {anomalies.sum()} ({anomalies.mean():.1%})")
print(f"Anomaly range: {pressure[anomalies].min():.1f} to {pressure[anomalies].max():.1f} psi")
```

Output:
```
Total points: 1000
Anomalies: 23 (2.3%)
Anomaly range: 4621.3 to 5423.7 psi
```
```

- [ ] **Step 3: Verify file created**

Run: `ls skills/oil-gas-cross-cutting/scada-timeseries/SKILL.md`
Expected: File path printed

- [ ] **Step 4: Commit**

Run: `git add skills/oil-gas-cross-cutting/scada-timeseries/SKILL.md && git commit -m "feat: add SCADA time-series skill"`
Expected: Commit created

---

## Task 6: Exploration Pipeline Skill

**Files:**
- Create: `skills/oil-gas-pipelines/exploration/SKILL.md`

- [ ] **Step 1: Create exploration pipeline directory**

Run: `mkdir -p skills/oil-gas-pipelines/exploration`
Expected: Directory created

- [ ] **Step 2: Write exploration skill content**

Create `skills/oil-gas-pipelines/exploration/SKILL.md`:

```markdown
# Skill: Exploration Pipeline

Guide AI agents through oil & gas exploration workflow.

## Purpose

Support geoscientists in discovering hydrocarbon prospects through seismic interpretation, well log analysis, and risk assessment.

## Roles

- **Geologist** - Subsurface structure, stratigraphy, depositional systems
- **Geophysicist** - Seismic acquisition, processing, interpretation
- **Petrophysicist** - Well log analysis, formation evaluation
- **Seismic Interpreter** - Horizon picking, fault mapping, attribute analysis

## Data Types

| Data | Format | Skill Reference |
|------|--------|-----------------|
| Seismic volumes | SEG-Y | `superpowers:oil-gas-cross-cutting/segy-operations` |
| Well logs | LAS | `superpowers:oil-gas-cross-cutting/well-log-analysis` |
| Geological models | RESQML, proprietary | Custom parsing needed |
| Core samples | Photos, reports | Unstructured analysis |
| Satellite/gravity | GeoTIFF, grids | Geospatial tools |

## Workflow

### Phase 1: Seismic Data Review

1. Load SEG-Y data
2. Check data quality (signal-to-noise, fold, bin spacing)
3. Generate quicklook visualizations
4. Identify key reflectors

### Phase 2: Seismic Interpretation

1. Pick horizons (key stratigraphic surfaces)
2. Map faults and structural features
3. Generate attribute volumes (coherence, amplitude, frequency)
4. Identify direct hydrocarbon indicators (DHIs)

### Phase 3: Well Log Correlation

1. Load well logs
2. Perform formation evaluation
   - Porosity calculation
   - Water saturation
   - Lithology identification
3. Tie wells to seismic (synthetic seismogram)
4. Correlate formations across wells

### Phase 4: Prospect Identification

1. Integrate seismic and well data
2. Map reservoir extent
3. Define structural/stratigraphic traps
4. Estimate reservoir properties
5. Calculate volumetrics (STOIIP/GIIP)

### Phase 5: Risk Assessment

1. Geological chance of success (Pg)
   - Trap adequacy
   - Reservoir presence
   - Seal integrity
   - Source maturity
   - Timing/migration
2. Volume uncertainty (P10/P50/P90)
3. Economic evaluation (NPV, IRR)
4. Risk-adjusted prospect ranking

## Domain Tasks

These tasks are handled by this skill:

- **Seismic interpretation**: "Pick the base Cretaceous horizon"
- **Log analysis**: "Calculate porosity from the density log"
- **Prospect evaluation**: "Estimate STOIIP for this structure"
- **Risk assessment**: "Calculate probability of success"

## Software Tasks

These tasks invoke `superpowers:oil-gas-delegation`:

- Seismic visualization web application
- Prospect database system
- Automated report generation
- Real-time drilling dashboard

## Quality Checklist

Before finalizing interpretation:

- [ ] Seismic quality reviewed (phase/Amplitude vs Offset, migration)
- [ ] Well ties validated
- [ ] Horizons consistent across dataset
- [ ] Faults mapped with appropriate throw
- [ ] Attribute analysis supports interpretation
- [ ] Volumetrics within credible ranges
- [ ] Risk factors documented

## Safety Considerations

Exploration data informs drilling decisions:

- Inaccurate interpretation can lead to dry holes (financial risk)
- Over-pressured zones must be identified
- Shallow hazards (gas clouds, water flows) must be mapped
- Well planning uses exploration data for casing design

## Example Workflows

### Seismic Quicklook

```python
import segyio
import numpy as np

with segyio.open('seismic.sgy', 'r') as segyfile:
    data = segyio.tools.cube(segyfile)
    
    print(f"Shape: {data.shape}")
    print(f"Amplitude range: {data.min():.0f} to {data.max():.0f}")
    print(f"Inlines: {segyfile.ilines.min()}-{segyfile.ilines.max()}")
    print(f"Crosslines: {segyfile.xlines.min()}-{segyfile.xlines.max()}")
```

### Formation Evaluation

```python
import lasio
import numpy as np

log = lasio.read('well.las')
df = log.df()

# Porosity from density
phi = (2.65 - df['RHOB']) / (2.65 - 1.0)

# Water saturation (Archie)
Rw = 0.1  # formation water resistivity
Sw = np.sqrt((Rw) / (phi**2 * df['RT']))

# Net pay (simplified)
net_pay = ((phi > 0.10) & (Sw < 0.6)).sum() * 0.5  # ft per sample

print(f"Net pay: {net_pay:.0f} ft")
print(f"Average porosity: {phi[phi > 0.10].mean():.1%}")
print(f"Average Sw: {Sw[Sw < 1].mean():.1%}")
```

### Volumetrics

```python
# Simplified STOIIP calculation
area = 500  # acres
thickness = 50  # ft
porosity = 0.20
water_saturation = 0.25
formation_volume_factor = 1.2

# STOIIP = 7758 * A * h * phi * (1-Sw) / Bo
stoiip = 7758 * area * thickness * porosity * (1 - water_saturation) / formation_volume_factor

print(f"STOIIP: {stoiip:,.0f} bbl")
print(f"STOIIP: {stoiip/1e6:.1f} MMbbl")
```

## References

- Industry standards: SEG-Y format, LAS specifications
- Interpretation software: Petrel, Kingdom, Kingdom, DecisionSpace
- Seismic attributes: Chopra & Marfurt (2007)
- Risk quantification: Rose (2001), "Risk Analysis and Management of Petroleum Exploration Ventures"
```

- [ ] **Step 3: Verify file created**

Run: `ls skills/oil-gas-pipelines/exploration/SKILL.md`
Expected: File path printed

- [ ] **Step 4: Commit**

Run: `git add skills/oil-gas-pipelines/exploration/SKILL.md && git commit -m "feat: add exploration pipeline skill"`
Expected: Commit created

---

## Task 7: Drilling Pipeline Skill

**Files:**
- Create: `skills/oil-gas-pipelines/drilling/SKILL.md`

- [ ] **Step 1: Create drilling pipeline directory**

Run: `mkdir -p skills/oil-gas-pipelines/drilling`
Expected: Directory created

- [ ] **Step 2: Write drilling skill content**

Create `skills/oil-gas-pipelines/drilling/SKILL.md`:

```markdown
# Skill: Drilling Pipeline

Guide AI agents through well drilling operations and monitoring.

## Purpose

Support drilling engineers in well planning, real-time monitoring, and post-well analysis.

## Roles

- **Drilling Engineer** - Well design, casing program, drilling parameters
- **Mud Engineer** - Drilling fluids, hydraulics, wellbore stability
- **Well Planner** - Trajectory design, anti-collision, target intercept
- **Rig Supervisor** - Real-time operations, safety, equipment

## Data Types

| Data | Source | Frequency |
|------|--------|-----------|
| WOB, RPM, Torque | MWD/Surface | Real-time (1 Hz) |
| Mud weight, viscosity | Mud logging | Periodic |
| Flow rate, pit volume | Surface sensors | Real-time (1 Hz) |
| Gamma ray, resistivity | LWD | Real-time |
| Pressure | PWD (Pressure While Drilling) | Real-time |
| Trajectory | MWD | Every stand (~30 m) |

## Workflow

### Phase 1: Well Planning

1. Define targets (from exploration)
2. Design trajectory (3D wellpath)
3. Design casing program (depths, sizes, grades)
4. Select drilling fluids
5. Identify hazards (pore pressure, fracture gradient, H2S)
6. Optimize drilling parameters (ROP, hydraulics)

### Phase 2: Real-Time Drilling

1. Monitor drilling parameters
   - Weight on Bit (WOB)
   - RPM (Rotations Per Minute)
   - Torque
   - Rate of Penetration (ROP)
2. Monitor mud returns
   - Flow rate
   - Mud weight
   - Cuttings analysis
3. Monitor LWD data
   - Gamma ray
   - Resistivity
   - Pressure
4. Detect anomalies
   - Kicks (influx of formation fluid)
   - Losses (mud lost to formation)
   - Stuck pipe indicators

### Phase 3: Post-Well Analysis

1. Compare actual vs. planned
2. Document lessons learned
3. Update drilling database
4. Optimize future wells

## Key Parameters

| Parameter | Typical Range | Alert Threshold |
|-----------|---------------|-----------------|
| WOB | 10-80 klbs | >120% of planned |
| Torque | 5-50 kft-lbs | >110% of planned |
| RPM | 60-180 rpm | Varies |
| ROP | 50-500 ft/hr | Depends on formation |
| Mud weight | 8-20 ppg | >0.5 ppg change |
| Flow in/out | 200-1000 gpm | Not equal = alert |

## Safety Focus

### Kick Detection

Signs of kick (well control situation):
- Mud volume increase (pit gain)
- Flow rate differential (flow in ≠ flow out)
- Mud weight decrease
- Drilling break (sudden ROP increase)

**Response:** STOP, shut-in, record pressures, kill well

### Stuck Pipe Indicators

- Excessive torque/drag
- No circulation
- Can't move pipe

### Lost Circulation

- Sudden mud loss
- No returns at surface
- Loss > 50 bbl/hr

## Domain Tasks

These tasks are handled by this skill:

- Optimize drilling parameters
- Interpret LWD data
- Calculate hydraulics
- Analyze drilling performance

## Software Tasks

These tasks invoke `superpowers:oil-gas-delegation`:

- Real-time drilling monitoring dashboard
- Rig telemetry database
- Automated drilling reports
- Well planning software integration

## Real-Time Monitoring Example

```python
import pandas as pd
import numpy as np

# Simulated real-time data
data = pd.DataFrame({
    'timestamp': pd.date_range('2024-01-01', periods=100, freq='1s'),
    'wob_klbs': np.random.normal(40, 5, 100),
    'torque_kftlbs': np.random.normal(25, 3, 100),
    'rpm': np.random.normal(120, 10, 100),
    'rop_fthr': np.random.normal(150, 30, 100),
    'flow_in_gpm': np.random.normal(800, 20, 100),
    'flow_out_gpm': np.random.normal(800, 20, 100),
})

# Kick detection
def check_for_kick(df):
    alerts = []
    
    # Pit gain (flow out > flow in)
    flow_diff = df['flow_out_gpm'] - df['flow_in_gpm']
    if (flow_diff > 50).any():
        alerts.append('POTENTIAL KICK: Flow out >> Flow in')
    
    # Drilling break
    if df['rop_fthr'].max() > 2 * df['rop_fthr'].median():
        alerts.append('DRILLING BREAK: Check for influx')
    
    return alerts

alerts = check_for_kick(data)
for alert in alerts:
    print(f"ALERT: {alert}")
```

## Hydraulics Calculation

```python
def calculate_annular_velocity(flow_rate_gpm, hole_diameter_in, pipe_diameter_in):
    """Calculate annular velocity in ft/min"""
    import math
    
    # Annular area (in²)
    annular_area = math.pi/4 * (hole_diameter_in**2 - pipe_diameter_in**2)
    
    # Convert to ft/min
    av = (flow_rate_gpm * 144) / annular_area  # ft/min
    
    return av

# Example: 12.25" hole, 5" drill pipe
av = calculate_annular_velocity(800, 12.25, 5)
print(f"Annular velocity: {av:.1f} ft/min")
```

## Quality Checklist

Drilling operations checklist:

- [ ] Well control equipment tested
- [ ] Blowout preventer (BOP) function tested
- [ ] Pit volume monitored
- [ ] Flow sensors calibrated
- [ ] LWD tools functional
- [ ] Emergency procedures reviewed

## References

- SPE Drilling & Completion
- API SPEC 5CT (Casing and Tubing)
- IADC Drilling Manual
- Well Control: MIT (Managed Pressure Drilling)
```

- [ ] **Step 3: Verify file created**

Run: `ls skills/oil-gas-pipelines/drilling/SKILL.md`
Expected: File path printed

- [ ] **Step 4: Commit**

Run: `git add skills/oil-gas-pipelines/drilling/SKILL.md && git commit -m "feat: add drilling pipeline skill"`
Expected: Commit created

---

## Task 8: Reservoir & Production Pipeline Skill

**Files:**
- Create: `skills/oil-gas-pipelines/reservoir-production/SKILL.md`

- [ ] **Step 1: Create reservoir pipeline directory**

Run: `mkdir -p skills/oil-gas-pipelines/reservoir-production`
Expected: Directory created

- [ ] **Step 2: Write reservoir skill content**

Create `skills/oil-gas-pipelines/reservoir-production/SKILL.md`:

```markdown
# Skill: Reservoir & Production Pipeline

Guide AI agents through reservoir management and production optimization.

## Purpose

Support reservoir and production engineers in managing hydrocarbon extraction and optimizing well performance.

## Roles

- **Reservoir Engineer** - Reservoir modeling, forecasting, depletion strategy
- **Production Engineer** - Well performance, artificial lift, well intervention
- **Well Intervention Engineer** - Workovers, stimulation, completions

## Data Types

| Data | Source | Frequency |
|------|--------|-----------|
| Oil/gas/water rates | SCADA/Metering | Daily/Real-time |
| Pressure (BHP, THP) | Downhole gauges | Real-time |
| Temperature | Downhole gauges | Real-time |
| Reservoir models | Eclipse, CMG, tNavigator | Updated annually |
| Well tests | Separators/MPFM | Monthly |

## Workflow

### Phase 1: Reservoir Characterization

1. Integrate seismic, logs, core data
2. Build geological model
3. Upscale to simulation model
4. History match to production data
5. Validate model

### Phase 2: Production Forecasting

1. Define development scenarios
2. Run reservoir simulation
3. Generate production forecast
4. Estimate reserves (P10/P50/P90)
5. Economic evaluation

### Phase 3: Well Optimization

1. Analyze well performance (inflow performance, vertical lift)
2. Identify production bottlenecks
3. Optimize artificial lift (gas lift, ESP, rod pump)
4. Plan well interventions
5. Monitor results

### Phase 4: Reservoir Monitoring

1. Track production vs. forecast
2. Monitor pressure trends
3. Analyze well interference
4. Update model as needed
5. Optimize depletion strategy

## Domain Tasks

These tasks are handled by this skill:

- Decline curve analysis
- Inflow performance relationship (IPR)
- Nodal analysis
- Material balance
- Reserves estimation

## Software Tasks

These tasks invoke `superpowers:oil-gas-delegation`:

- Production allocation system
- Reservoir monitoring dashboard
- Automated well testing workflow
- Production database

## Example Workflows

### Decline Curve Analysis

```python
import numpy as np
import pandas as pd
from scipy.optimize import curve_fit

def arps_decline(t, qi, di, b):
    """Arps decline equation"""
    return qi / (1 + b * di * t)**(1/b)

# Example production data
months = np.arange(1, 61)
actual_rate = 1000 / (1 + 0.1 * months)**(1/0.5)  # D = 0.1, b = 0.5

# Fit decline curve
popt, _ = curve_fit(arps_decline, months, actual_rate, p0=[1000, 0.1, 0.5])

qi, di, b = popt
print(f"Initial rate (qi): {qi:.0f} bpd")
print(f"Initial decline (di): {di:.2f}")
print(f"Arps exponent (b): {b:.2f}")

# Forecast
forecast_months = np.arange(1, 121)
forecast_rate = arps_decline(forecast_months, *popt)

print(f"Forecast at 10 years: {forecast_rate[-1]:.0f} bpd")
```

### Inflow Performance (IPR)

```python
def vogel_ipr(p_res, p_wf, q_test):
    """Vogel IPR equation for undersaturated oil"""
    
    # Calculate productivity index
    pi = q_test / (p_res - p_wf)
    
    # Vogel equation: q/q_max = 1 - 0.2*(p_wf/p_res) - 0.8*(p_wf/p_res)^2
    q_max = q_test / (1 - 0.2*(p_wf/p_res) - 0.8*(p_wf/p_res)**2)
    
    def rate_at_pressure(pwf):
        return q_max * (1 - 0.2*(pwf/p_res) - 0.8*(pwf/p_res)**2)
    
    return rate_at_pressure

# Example: Reservoir pressure 3000 psi, tested at 2000 psi flowing
p_res = 3000
p_wf = 2000
q_test = 500  # bpd

ipr = vogel_ipr(p_res, p_wf, q_test)

# Calculate rate at different flowing pressures
for pwf in [2500, 2000, 1500, 1000]:
    rate = ipr(pwf)
    print(f"Pwf = {pwf} psi: Rate = {rate:.0f} bpd")
```

### Nodal Analysis

```python
def vlp_gas_lift(q, thp, depth, gl_rate, pipe_id=2.992):
    """Simplified vertical lift performance with gas lift"""
    # Simplified: gradient decreases with gas lift
    # rho = f(oil_rate, gas_lift_rate)
    
    # Approximate gradient (psi/ft)
    liquid_rate = q / 24  # bpd to bpm
    glr = gl_rate / liquid_rate if liquid_rate > 0 else 0
    
    # Gradient decreases with GLR
    gradient = 0.35 - 0.001 * glr
    gradient = max(gradient, 0.15)  # minimum gradient
    
    # Calculate BHP
    bhp = thp + gradient * depth
    
    return bhp

# Example: Optimize gas lift
thp = 150  # psi
depth = 8000  # ft
q = 500  # bpd

print("Gas Lift Rate | BHP Required")
print("-" * 30)

for gl_rate in [0, 1, 2, 3, 4]:
    bhp = vlp_gas_lift(q, thp, depth, gl_rate)
    print(f"{gl_rate:.0f} MMscfd | {bhp:.0f} psi")
```

### Material Balance

```python
def material_balance_oil(p, N, pi, bob, ce, cf):
    """Simplified material balance for undersaturated oil reservoir"""
    
    # F = N * (Eo + Ef)
    # F = Np * Bob  (production)
    # Eo = Bob - Boi (oil expansion)
    # Ef = (1-N) * (pi - p) * (ce + cf) / Bob
    
    # Simplified: assume constant Bo
    # Np = N * (pi - p) * ce / Bob
    
    expansion = (pi - p) * ce / bob
    Np = N * expansion
    
    return Np

# Example: 100 MMbbl reservoir
N = 100  # MMbbl
pi = 4000  # psi
p = 3500  # psi current pressure
bob = 1.2  # rb/stb
ce = 15e-6  # 1/psi (compressibility)
cf = 3e-6  # 1/psi (formation compressibility)

Np = material_balance_oil(p, N, pi, bob, ce, cf)
print(f"Cumulative production: {Np:.1f} MMbbl")
print(f"Recovery factor: {Np/N*100:.1f}%")
```

## Performance Indicators

| KPI | Units | Target |
|-----|-------|--------|
| Uptime | % | >95% |
| Water cut | % | Varies |
| Gas/oil ratio | scf/stb | Varies |
| Drawdown | psi | Optimized |
| Artificial lift efficiency | % | >80% |

## Quality Checklist

- [ ] Production data validated
- [ ] Well tests recent (< 3 months)
- [ ] Pressure data calibrated
- [ ] Reservoir model history matched
- [ ] Forecast assumptions documented

## References

- Craft & Hawkins (1991), "Applied Petroleum Reservoir Engineering"
- Arps (1945), "Analysis of Decline Curves"
- Vogel (1968), "Inflow Performance Relationships"
- SPE Reservoir Evaluation & Engineering
```

- [ ] **Step 3: Verify file created**

Run: `ls skills/oil-gas-pipelines/reservoir-production/SKILL.md`
Expected: File path printed

- [ ] **Step 4: Commit**

Run: `git add skills/oil-gas-pipelines/reservoir-production/SKILL.md && git commit -m "feat: add reservoir & production pipeline skill"`
Expected: Commit created

---

## Task 9: Midstream Pipeline Skill

**Files:**
- Create: `skills/oil-gas-pipelines/midstream/SKILL.md`

- [ ] **Step 1: Create midstream pipeline directory**

Run: `mkdir -p skills/oil-gas-pipelines/midstream`
Expected: Directory created

- [ ] **Step 2: Write midstream skill content**

Create `skills/oil-gas-pipelines/midstream/SKILL.md`:

```markdown
# Skill: Midstream Pipeline

Guide AI agents through pipeline transportation and storage operations.

## Purpose

Support pipeline engineers in ensuring safe and efficient hydrocarbon transportation and storage.

## Roles

- **Pipeline Engineer** - Pipeline design, hydraulics, materials
- **Operations Manager** - Daily operations, scheduling, nominations
- **Integrity Engineer** - Inspection, corrosion management, repairs

## Data Types

| Data | Source | Frequency |
|------|--------|-----------|
| Flow rates | SCADA | Real-time (1-min) |
| Pressure | SCADA | Real-time (1-min) |
| Temperature | SCADA | Real-time |
| ILI (Inline Inspection) | Smart pig | 5-year cycle |
| Leak detection | CPM/DDS | Real-time (continuous) |
| Product quality | Lab | Batch/sample |

## Workflow

### Phase 1: Transport Scheduling

1. Receive nominations (shipper requests)
2. Check pipeline capacity
3. Schedule batches/products
4. Optimize pump/compressor runs
5. Confirm deliveries

### Phase 2: Real-Time Monitoring

1. Monitor pressure/flow at key points
2. Track batch locations
3. Detect anomalies (leaks, theft)
4. Adjust operations as needed
5. Communicate with control center

### Phase 3: Integrity Management

1. Plan ILI (smart pigging)
2. Analyze inspection data
3. Identify defects (corrosion, cracks, dents)
4. Prioritize repairs
5. Verify repairs

### Phase 4: Leak Detection

1. Monitor CPM (Computational Pipeline Monitoring)
2. Analyze mass balance
3. Check pressure/flow deviations
4. Investigate anomalies
5. Emergency response if confirmed

## Domain Tasks

These tasks are handled by this skill:

- Pipeline hydraulics calculation
- Leak detection analysis
- ILI data interpretation
- Integrity assessment

## Software Tasks

These tasks invoke `superpowers:oil-gas-delegation`:

- SCADA monitoring dashboard
- Pipeline scheduling system
- ILI data management platform
- Leak detection alerting system

## Example Workflows

### Pipeline Hydraulics

```python
import math

def pressure_drop_liquid(flow_bpd, diameter_in, length_ft, viscosity_cp, density_api):
    """Calculate pressure drop for liquid pipeline (simplified)"""
    
    # Convert units
    q_bpm = flow_bpd / 1440  # bpd to bpm
    d_ft = diameter_in / 12
    
    # Velocity (ft/s)
    area_sqft = math.pi * d_ft**2 / 4
    velocity = q_bpm / 7.48 / area_sqft  # ft/s
    
    # Reynolds number
    rho = 62.4 * (141.5 / (density_api + 131.5))  # lb/ft³
    re = rho * velocity * d_ft / (viscosity_cp * 0.000672)
    
    # Friction factor (Blasius for turbulent)
    f = 0.079 / re**0.25 if re > 4000 else 64 / re
    
    # Pressure drop (psi)
    delta_p = 2 * f * (length_ft / d_ft) * rho * velocity**2 / (32.2 * 144)
    
    return delta_p

# Example: 12" pipeline, 50,000 bpd, 100 miles
d_psi = pressure_drop_liquid(
    flow_bpd=50000,
    diameter_in=12,
    length_ft=100 * 5280,
    viscosity_cp=5,
    density_api=35
)

print(f"Pressure drop: {d_psi:.0f} psi")
```

### Leak Detection (Mass Balance)

```python
def detect_leak(flow_in, flow_out, pressure_in, pressure_out, 
                linepack_initial, linepack_current, tolerance=0.01):
    """
    Simple mass balance leak detection
    
    Returns: (is_leak, discrepancy)
    """
    
    # Mass balance: In - Out = Linepack change + Leak
    # In SCADA units: bpd
    
    # Calculate linepack change
    linepack_change = linepack_current - linepack_initial
    
    # Discrepancy
    discrepancy = flow_in - flow_out - linepack_change
    
    # Threshold (as fraction of flow)
    threshold = flow_in * tolerance
    
    is_leak = abs(discrepancy) > threshold
    
    return is_leak, discrepancy

# Example
flow_in = 50000  # bpd
flow_out = 49500  # bpd
linepack_initial = 10000  # bbl
linepack_current = 10050  # bbl

is_leak, discrepancy = detect_leak(flow_in, flow_out, 0, 0, 
                                     linepack_initial, linepack_current)

if is_leak:
    print(f"LEAK DETECTED: {discrepancy:.0f} bpd discrepancy")
else:
    print(f"Normal operation: {discrepancy:.0f} bpd discrepancy")
```

### ILI Defect Assessment

```python
def assess_corrosion_defect(depth_percent, length_in, diameter_in, smys_psi, maop_psi):
    """
    Assess corrosion defect using ASME B31G (simplified)
    
    Returns: safe operating pressure
    """
    
    # Depth as fraction
    d = depth_percent / 100
    
    # If defect depth > 80% of wall, fail
    if d > 0.80:
        return 0  # Requires immediate repair
    
    # Length parameter
    L = length_in / math.sqrt(diameter_in)
    
    # B31G (modified) calculation
    # Simplified: safe pressure reduction
    
    a = 0.893 * L / math.sqrt(diameter_in)
    
    if L <= math.sqrt(diameter_in):
        # Short defect
        safe_pressure = maop_psi * (1 - 0.66 * d)
    else:
        # Long defect (more severe)
        safe_pressure = maop_psi * (1 - 0.66 * d) / (1 + 0.66 * d**2)
    
    return safe_pressure

# Example: 30% deep, 6" long corrosion in 12" pipe
safe_p = assess_corrosion_defect(
    depth_percent=30,
    length_in=6,
    diameter_in=12,
    smys_psi=35000,
    maop_psi=1440
)

print(f"Safe operating pressure: {safe_p:.0f} psi")
print(f"MAOP: 1440 psi")
print(f"Status: {'OPERATE' if safe_p >= 1440 else 'REDUCE PRESSURE'}")
```

### Batch Tracking

```python
import pandas as pd
from datetime import datetime, timedelta

class BatchTracker:
    def __init__(self, pipeline_length_km, avg_velocity_mps):
        self.pipeline_length = pipeline_length_km
        self.avg_velocity = avg_velocity_mps
        self.batches = []
    
    def inject_batch(self, batch_id, product, volume_bbl, timestamp):
        self.batches.append({
            'batch_id': batch_id,
            'product': product,
            'volume': volume_bbl,
            'inject_time': timestamp,
            'position_km': 0,
        })
    
    def update_positions(self, current_time):
        time_hours = [(current_time - b['inject_time']).total_seconds() / 3600 
                      for b in self.batches]
        
        for i, batch in enumerate(self.batches):
            # Position = velocity * time
            position = self.avg_velocity * 3.6 * time_hours[i] / 1000  # km
            batch['position_km'] = min(position, self.pipeline_length)
    
    def get_arrivals(self):
        return [b for b in self.batches if b['position_km'] >= self.pipeline_length]

# Example
tracker = BatchTracker(pipeline_length_km=200, avg_velocity_mps=2.0)

inject_time = datetime(2024, 1, 1, 8, 0)
tracker.inject_batch('B001', 'Gasoline', 50000, inject_time)
tracker.inject_batch('B002', 'Diesel', 30000, inject_time + timedelta(hours=12))

# Check positions after 24 hours
tracker.update_positions(inject_time + timedelta(hours=24))

for batch in tracker.batches:
    print(f"{batch['batch_id']}: {batch['product']} at km {batch['position_km']:.1f}")
```

## Performance Indicators

| KPI | Units | Target |
|-----|-------|--------|
| Availability | % | >99% |
| Leak incidents | per 1000 km-yr | <0.5 |
| ILI compliance | % | 100% |
| On-time delivery | % | >98% |
| Energy efficiency | kWh/bbl | Minimize |

## Safety Considerations

Pipeline safety critical areas:

- High consequence areas (populated, environmentally sensitive)
- Leak detection coverage must be continuous
- Emergency shutdown systems tested regularly
- Public awareness programs maintained
- One-call system for excavation permits

## Quality Checklist

- [ ] Leak detection system operational
- [ ] Pressure/flow instruments calibrated
- [ ] ILI inspections current (< 5 years)
- [ ] Emergency response plan updated
- [ ] Control room procedures reviewed

## References

- ASME B31.4 (Liquid Pipelines)
- ASME B31.8 (Gas Pipelines)
- API 1160 (Pipeline Integrity Management)
- PHMSA regulations (US DOT)
```

- [ ] **Step 3: Verify file created**

Run: `ls skills/oil-gas-pipelines/midstream/SKILL.md`
Expected: File path printed

- [ ] **Step 4: Commit**

Run: `git add skills/oil-gas-pipelines/midstream/SKILL.md && git commit -m "feat: add midstream pipeline skill"`
Expected: Commit created

---

## Task 10: Refining Pipeline Skill

**Files:**
- Create: `skills/oil-gas-pipelines/refining/SKILL.md`

- [ ] **Step 1: Create refining pipeline directory**

Run: `mkdir -p skills/oil-gas-pipelines/refining`
Expected: Directory created

- [ ] **Step 2: Write refining skill content**

Create `skills/oil-gas-pipelines/refining/SKILL.md`:

```markdown
# Skill: Refining Pipeline

Guide AI agents through refinery operations and process optimization.

## Purpose

Support process and chemical engineers in refinery operations, optimization, and product quality control.

## Roles

- **Process Engineer** - Unit operations, optimization, troubleshooting
- **Chemical Engineer** - Reaction engineering, catalysts, chemistry
- **Plant Operator** - Daily operations, monitoring, adjustments
- **Lab Technician** - Product quality testing, sampling

## Data Types

| Data | Source | Frequency |
|------|--------|-----------|
| Crude assay | Lab/Supplier | Batch |
| Temperature/pressure | DCS | Real-time (1-sec) |
| Flow rates | DCS | Real-time (1-sec) |
| Product qualities | Lab | 4-8 hours |
| Catalyst activity | Lab | Weekly |
| Energy consumption | Meters | Hourly |

## Workflow

### Phase 1: Crude Selection & Blending

1. Receive crude assays (composition, properties)
2. Optimize crude blend for:
   - Target product slate
   - Unit constraints
   - Margin maximization
3. Plan crude deliveries
4. Monitor crude tank quality

### Phase 2: Process Operations

1. Monitor unit operations (DCS)
2. Optimize cut points (distillation)
3. Adjust operating conditions
4. Monitor yields and quality
5. Troubleshoot upsets

### Phase 3: Product Quality

1. Sample products (gasoline, diesel, jet, fuel oil)
2. Test in lab (ASTM methods)
3. Blend components to meet specs
4. Certify products for release
5. Track product inventory

### Phase 4: Energy & Yield Optimization

1. Monitor energy consumption
2. Optimize heat integration
3. Maximize yield of high-value products
4. Minimize fuel gas, steam consumption
5. Reduce CO2 emissions

## Domain Tasks

These tasks are handled by this skill:

- Crude oil assay analysis
- Distillation optimization
- Product blending calculations
- Energy balance analysis
- Yield accounting

## Software Tasks

These tasks invoke `superpowers:oil-gas-delegation`:

- Process monitoring dashboard
- Laboratory information system (LIMS)
- Blending optimization tool
- Production accounting system

## Example Workflows

### Crude Oil Assay

```python
def simplify_crude_assay(api, sulfur_percent, tbp_points):
    """
    Simplified crude assay analysis
    
    TBP (True Boiling Point) points: [(temp_F, vol_percent), ...]
    """
    
    # Basic properties
    print(f"API Gravity: {api:.1f}°")
    print(f"Classification: {'Light' if api > 35 else 'Medium' if api > 25 else 'Heavy'}")
    print(f"Sulfur: {sulfur_percent:.2f}%")
    print(f"Type: {'Sweet' if sulfur_percent < 0.5 else 'Sour'}")
    
    # Yield estimate (simplified)
    tbp_df = pd.DataFrame(tbp_points, columns=['temp_f', 'vol_pct'])
    
    # Cuts (approximate)
    naphtha_yield = tbp_df[tbp_df['temp_f'] < 400]['vol_pct'].max()
    diesel_yield = tbp_df[(tbp_df['temp_f'] >= 400) & (tbp_df['temp_f'] < 650)]['vol_pct'].max() - naphtha_yield
    gasoil_yield = tbp_df[(tbp_df['temp_f'] >= 650) & (tbp_df['temp_f'] < 1050)]['vol_pct'].max() - naphtha_yield - diesel_yield
    
    print(f"\nEstimated Yields:")
    print(f"Light Naphtha: ~{naphtha_yield:.0f}%")
    print(f"Diesel: ~{diesel_yield:.0f}%")
    print(f"Vacuum Gasoil: ~{gasoil_yield:.0f}%")
    print(f"Residue: ~{100 - naphtha_yield - diesel_yield - gasoil_yield:.0f}%")

# Example: Arab Light crude
api = 33.4
sulfur = 1.9
tbp_points = [
    (100, 5),
    (200, 12),
    (400, 30),
    (650, 55),
    (1050, 85),
    (1200, 100),
]

simplify_crude_assay(api, sulfur, tbp_points)
```

### Distillation Cut Point Optimization

```python
def optimize_cut_points(demand_prices, unit_capacity, crude_rate):
    """
    Optimize cut points based on product prices
    Simplified linear programming approach
    """
    
    # Product prices ($/bbl)
    gasoline_price = demand_prices['gasoline']
    diesel_price = demand_prices['diesel']
    fueloil_price = demand_prices['fuel_oil']
    
    # Optimize: where to cut between products
    # Higher gasoline price → lower naphtha cut point
    # Higher diesel price → raise diesel cut point
    
    # Simplified heuristic
    if gasoline_price > diesel_price * 1.1:
        # Maximize gasoline
        naphtha_cut_temp = 380  # lower = more naphtha
        diesel_cut_temp = 650
    elif diesel_price > gasoline_price * 1.1:
        # Maximize diesel
        naphtha_cut_temp = 400  # higher = less naphtha
        diesel_cut_temp = 680  # higher = more diesel
    else:
        # Balanced
        naphtha_cut_temp = 390
        diesel_cut_temp = 665
    
    return {
        'naphtha_end_temp_f': naphtha_cut_temp,
        'diesel_end_temp_f': diesel_cut_temp,
    }

# Example
prices = {
    'gasoline': 85,  # $/bbl
    'diesel': 95,    # $/bbl
    'fuel_oil': 60,  # $/bbl
}

cuts = optimize_cut_points(prices, unit_capacity=100000, crude_rate=80000)
print(f"Optimized cuts: {cuts}")
```

### Product Blending

```python
def blend_gasoline(components, target_ron, target_rvp):
    """
    Simple gasoline blending for RON (Octane) and RVP (Vapor Pressure)
    
    components: [{'name': str, 'vol': bbl, 'ron': float, 'rvp': float}, ...]
    """
    
    total_vol = sum(c['vol'] for c in components)
    
    # Weighted average blending (simplified)
    blended_ron = sum(c['vol'] * c['ron'] for c in components) / total_vol
    blended_rvp = sum(c['vol'] * c['rvp'] for c in components) / total_vol
    
    # Check specs
    meets_ron = blended_ron >= target_ron
    meets_rvp = blended_rvp <= target_rvp
    
    return {
        'ron': blended_ron,
        'rvp': blended_rvp,
        'volume': total_vol,
        'meets_specs': meets_ron and meets_rvp,
        'ron_ok': meets_ron,
        'rvp_ok': meets_rvp,
    }

# Example
components = [
    {'name': 'FCC Gasoline', 'vol': 20000, 'ron': 92, 'rvp': 8.0},
    {'name': 'Reformate', 'vol': 15000, 'ron': 100, 'rvp': 4.5},
    {'name': 'Alkylate', 'vol': 8000, 'ron': 95, 'rvp': 5.0},
    {'name': 'Butane', 'vol': 2000, 'ron': 93, 'rvp': 60.0},
]

result = blend_gasoline(components, target_ron=87, target_rvp=9.0)
print(f"Blended: RON={result['ron']:.1f}, RVP={result['rvp']:.1f} psi")
print(f"Meets specs: {result['meets_specs']}")
```

### Energy Balance

```python
def calculate_refinery_efficiency(energy_in_mmbtu, crude_in_bbl, product_out_bbl):
    """
    Calculate refinery energy efficiency
    """
    
    # Energy intensity (typically 5-15% of crude energy)
    energy_per_bbl = energy_in_mmbtu / crude_in_bbl
    
    # Typical refinery uses 8-12% of crude energy
    # Good: <10%, Excellent: <8%
    
    if energy_per_bbl < 0.3:
        rating = "Excellent"
    elif energy_per_bbl < 0.4:
        rating = "Good"
    elif energy_per_bbl < 0.5:
        rating = "Fair"
    else:
        rating = "Poor"
    
    return {
        'energy_mmbtu_per_bbl': energy_per_bbl,
        'energy_mj_per_bbl': energy_per_bbl * 1055,  # MMBTU to MJ
        'rating': rating,
        'total_energy_mmbtu': energy_in_mmbtu,
    }

# Example: Refinery processing 150,000 bpd
energy_result = calculate_refinery_efficiency(
    energy_in_mmbtu=60000,  # per day
    crude_in_bbl=150000,
    product_out_bbl=145000  # some loss
)

print(f"Energy intensity: {energy_result['energy_mmbtu_per_bbl']:.2f} MMBTU/bbl")
print(f"Rating: {energy_result['rating']}")
```

### Yield Accounting

```python
def simple_yield_accounting(crude_in, outputs):
    """
    Simple mass balance for refinery yield
    """
    
    total_out = sum(outputs.values())
    loss = crude_in - total_out
    
    print(f"Input: {crude_in:,} bbl")
    print(f"\nOutputs:")
    
    for product, volume in outputs.items():
        yield_pct = volume / crude_in * 100
        print(f"  {product}: {volume:,} bbl ({yield_pct:.1f}%)")
    
    print(f"\nLoss: {loss:,} bbl ({loss/crude_in*100:.2f}%)")
    print(f"Recovery: {total_out/crude_in*100:.2f}%")
    
    return {
        'loss': loss,
        'recovery': total_out / crude_in,
        'yields': {k: v/crude_in for k, v in outputs.items()}
    }

# Example
yield_result = simple_yield_accounting(
    crude_in=100000,
    outputs={
        'gasoline': 45000,
        'diesel': 30000,
        'jet_fuel': 8000,
        'fuel_oil': 12000,
        'lpg': 3000,
    }
)
```

## Key Products

| Product | Key Specs | Typical Yield |
|---------|-----------|---------------|
| Gasoline | RON, RVP, Sulfur | 40-50% |
| Diesel | Cetane, Sulfur, Flash | 25-35% |
| Jet Fuel | Flash, Freeze, Smoke | 5-10% |
| Fuel Oil | Viscosity, Sulfur | 5-15% |
| LPG | Composition | 2-5% |

## Performance Indicators

| KPI | Units | Target |
|-----|-------|--------|
| Utilization | % | >95% |
| Energy intensity | MMBTU/bbl | <0.4 |
| On-spec products | % | >99% |
| Yield (high-value) | % | Maximize |
| Safety (TRIR) | per 200k hrs | <0.5 |

## Safety Considerations

Refinery hazards:

- Fire/explosion (hydrocarbons under pressure)
- Toxic releases (H2S, ammonia, HF)
- Runaway reactions (alkylation, hydrocracking)
- Loss of containment

Critical safety systems:

- Relief valves and flare systems
- Fire detection and suppression
- Gas detection (H2S, LEL)
- Emergency shutdown (ESD)

## Quality Checklist

- [ ] Product samples drawn and tested
- [ ] DCS alarms active and acknowledged
- [ ] Safety systems tested (monthly)
- [ ] Turnaround plans updated
- [ ] Environmental permits current

## References

- Gary & Handwerk (2001), "Petroleum Refining"
- ASTM Standards for petroleum products
- API Recommended Practices
- NPRA publications
```

- [ ] **Step 3: Verify file created**

Run: `ls skills/oil-gas-pipelines/refining/SKILL.md`
Expected: File path printed

- [ ] **Step 4: Commit**

Run: `git add skills/oil-gas-pipelines/refining/SKILL.md && git commit -m "feat: add refining pipeline skill"`
Expected: Commit created

---

## Task 11: Final Verification

- [ ] **Step 1: List all created skill files**

Run: `find skills -name "SKILL.md" | grep -E "(oil-gas|oil_gas)" | sort`
Expected: 10 files listed in alphabetical order

- [ ] **Step 2: Verify directory structure**

Run: `tree skills -I '__pycache__|*.pyc' | grep -A 20 "oil-gas"`
Expected: Tree showing all oil-gas directories and files

- [ ] **Step 3: Count total files**

Run: `find skills -name "SKILL.md" | wc -l`
Expected: 10 (new) + existing count

- [ ] **Step 4: Verify all commits**

Run: `git log --oneline --grep="oil" | head -15`
Expected: 10+ commits with oil & gas skill messages

- [ ] **Step 5: Create summary commit**

Run: `git commit --allow-empty -m "feat: complete oil & gas AI skills framework

- Foundation layer (1 skill)
- Delegation skill (1 skill)
- Cross-cutting data skills (3 skills: SEG-Y, well log, SCADA)
- Pipeline skills (5 skills: exploration, drilling, reservoir, midstream, refining)

Total: 10 domain-specific skills ready for testing"`
Expected: Empty commit created with summary

---

## Checklist

### Spec Coverage

| Spec Section | Task |
|--------------|------|
| Foundation layer | Task 1 |
| Delegation skill | Task 2 |
| Cross-cutting: SEG-Y | Task 3 |
| Cross-cutting: Well log | Task 4 |
| Cross-cutting: SCADA | Task 5 |
| Pipeline: Exploration | Task 6 |
| Pipeline: Drilling | Task 7 |
| Pipeline: Reservoir | Task 8 |
| Pipeline: Midstream | Task 9 |
| Pipeline: Refining | Task 10 |

✓ All spec sections covered by tasks

### Placeholder Scan

✓ No "TBD", "TODO", or placeholder text
✓ All code blocks contain complete examples
✓ All file paths are exact
✓ All commands specify expected output

### Type Consistency

✓ Function names consistent within skills
✓ Variable names follow Python conventions
✓ Units clearly specified in examples