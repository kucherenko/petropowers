# Petrophysical Constraints Reference

Physical relationships enforced by synthetic data generator.

## Archie Equation

Water saturation from resistivity:

```
Sw = ((a × Rw) / (φ^m × Rt))^(1/n)
```

Where:
- `Sw` = water saturation (fraction)
- `a` = tortuosity factor (typically 1.0)
- `Rw` = formation water resistivity (ohm-m)
- `φ` = porosity (fraction)
- `m` = cementation exponent (typically 2.0)
- `Rt` = true resistivity (ohm-m)
- `n` = saturation exponent (typically 2.0)

## Density Porosity

Porosity from bulk density:

```
φ = (ρmatrix - ρbulk) / (ρmatrix - ρfluid)
```

Typical matrix densities:
- Sandstone: 2.65 g/cc
- Limestone: 2.71 g/cc
- Dolomite: 2.87 g/cc
- Shale: 2.70 g/cc

Fluid densities:
- Water: 1.0 g/cc
- Oil: 0.8 g/cc (typical)
- Gas: 0.2 g/cc (varies with pressure)

## Shale Volume from Gamma Ray

```
Vsh = (GR - GRclean) / (GRshale - GRclean)
```

Typical GR values:
- Clean sandstone: 10-30 API
- Shale: 100-150 API
- Source rock: 75-150 API

## Density-Neutron Crossover

Gas effect causes neutron porosity to read lower than density porosity:

- **Clean sandstone:** Nearly equal
- **Gas sand:** Neutron < density porosity (negative crossover)
- **Shale:** Neutron > density porosity (positive crossover)

## Resistivity Distribution

Resistivity follows log-normal distribution in most formations:

- `Rt` typically spans 2-3 orders of magnitude
- Range: 0.2 - 2000 ohm-m
- Use log-normal distribution for synthetic values

## Sonic Slowness

Compressional slowness (DT) ranges:

- Sandstone: 50-80 us/ft
- Shale: 100-240 us/ft
- Carbonate: 40-90 us/ft

Related to porosity via Wyllie time-average equation:

```
DT = DTmatrix × (1 - φ) + DTfluid × φ
```