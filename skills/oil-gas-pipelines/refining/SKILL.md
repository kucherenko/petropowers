---
name: refining
description: Guide AI agents through refinery operations and process optimization.
---

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

These tasks invoke `petropowers:oil-gas-delegation`:

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