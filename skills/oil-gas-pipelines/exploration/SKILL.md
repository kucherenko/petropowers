---
name: exploration
description: Guide AI agents through oil & gas exploration workflow.
---

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