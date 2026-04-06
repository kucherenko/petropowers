import { describe, it, expect } from 'vitest'
import type { ReservoirGeometry, MappedWell } from '../lib/types'
import type { WellPressure } from '../lib/api'

describe('mergeGeometryAndPressure', () => {
  it('inner-joins wells present in both datasets', async () => {
    const { mergeGeometryAndPressure } = await import('../lib/wellmap')
    const geometry: ReservoirGeometry = {
      wells: [
        { name: 'Well-001', x_m: 1000, y_m: 2000 },
        { name: 'Well-002', x_m: 3000, y_m: 4000 },
        { name: 'Well-003', x_m: 5000, y_m: 6000 },
      ],
      boundary: [],
    }
    const pressures: WellPressure[] = [
      { wellName: 'Well-001', avgPressure: 1500 },
      { wellName: 'Well-002', avgPressure: 2000 },
      // Well-003 intentionally missing from pressures
    ]
    const result = mergeGeometryAndPressure(geometry, pressures)
    expect(result).toHaveLength(2)
    expect(result[0]).toEqual({ name: 'Well-001', x_m: 1000, y_m: 2000, avgPressure: 1500 })
    expect(result[1]).toEqual({ name: 'Well-002', x_m: 3000, y_m: 4000, avgPressure: 2000 })
  })

  it('returns empty array when pressures is empty', async () => {
    const { mergeGeometryAndPressure } = await import('../lib/wellmap')
    const geometry: ReservoirGeometry = {
      wells: [{ name: 'Well-001', x_m: 1000, y_m: 2000 }],
      boundary: [],
    }
    expect(mergeGeometryAndPressure(geometry, [])).toHaveLength(0)
  })

  it('returns empty array when geometry has no wells', async () => {
    const { mergeGeometryAndPressure } = await import('../lib/wellmap')
    const geometry: ReservoirGeometry = { wells: [], boundary: [] }
    const pressures: WellPressure[] = [{ wellName: 'Well-001', avgPressure: 1500 }]
    expect(mergeGeometryAndPressure(geometry, pressures)).toHaveLength(0)
  })
})

describe('interpolatePressure', () => {
  const wells: MappedWell[] = [
    { name: 'W1', x_m: 0, y_m: 0, avgPressure: 1000 },
    { name: 'W2', x_m: 1000, y_m: 0, avgPressure: 2000 },
  ]

  it('returns exact well pressure when query coincides with a well', async () => {
    const { interpolatePressure } = await import('../lib/wellmap')
    expect(interpolatePressure(0, 0, wells)).toBe(1000)
    expect(interpolatePressure(1000, 0, wells)).toBe(2000)
  })

  it('returns midpoint pressure equidistant between two wells', async () => {
    const { interpolatePressure } = await import('../lib/wellmap')
    // At x=500, y=0 both wells are equidistant → average
    const result = interpolatePressure(500, 0, wells)
    expect(result).toBeCloseTo(1500, 0)
  })

  it('biases toward closer well with power=2', async () => {
    const { interpolatePressure } = await import('../lib/wellmap')
    // At x=200 (closer to W1), result should be closer to 1000 than to 2000
    const result = interpolatePressure(200, 0, wells)
    expect(result).toBeLessThan(1500)
    expect(result).toBeGreaterThan(1000)
  })
})

describe('pressureQuartileColor', () => {
  it('bottom quartile is green', async () => {
    const { pressureQuartileColor } = await import('../lib/wellmap')
    expect(pressureQuartileColor(100, [100, 200, 300, 400])).toBe('#22c55e')
  })

  it('top quartile is red', async () => {
    const { pressureQuartileColor } = await import('../lib/wellmap')
    expect(pressureQuartileColor(400, [100, 200, 300, 400])).toBe('#ef4444')
  })

  it('middle values are amber', async () => {
    const { pressureQuartileColor } = await import('../lib/wellmap')
    expect(pressureQuartileColor(250, [100, 200, 300, 400])).toBe('#f59e0b')
  })
})

describe('pressureToRadius', () => {
  it('maps min pressure to 6', async () => {
    const { pressureToRadius } = await import('../lib/wellmap')
    expect(pressureToRadius(100, 100, 400)).toBe(6)
  })

  it('maps max pressure to 18', async () => {
    const { pressureToRadius } = await import('../lib/wellmap')
    expect(pressureToRadius(400, 100, 400)).toBe(18)
  })

  it('clamps values below min', async () => {
    const { pressureToRadius } = await import('../lib/wellmap')
    expect(pressureToRadius(0, 100, 400)).toBe(6)
  })
})
