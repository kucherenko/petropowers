---
name: drilling
description: Use when working with well drilling operations, real-time drilling monitoring, kick detection, stuck pipe analysis, or drilling parameter optimization
---

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
    'flow_out_gpm': np.random.normal(800, 20,  100),
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
import math

def calculate_annular_velocity(flow_rate_gpm, hole_diameter_in, pipe_diameter_in):
    """Calculate annular velocity in ft/min"""
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