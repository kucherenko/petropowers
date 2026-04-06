---
name: reservoir-production
description: Guide AI agents through reservoir management and production optimization.
---

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

These tasks invoke `petropowers:oil-gas-delegation`:

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