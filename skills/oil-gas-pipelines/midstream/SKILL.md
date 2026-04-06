---
name: midstream
description: Guide AI agents through pipeline transportation and storage operations.
---

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