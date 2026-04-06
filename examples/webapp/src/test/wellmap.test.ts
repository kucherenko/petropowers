import { describe, it, expect } from 'vitest'

describe('nameJitter', () => {
  it('returns a value in ±0.04 range', async () => {
    const { nameJitter } = await import('../lib/wellmap')
    const j = nameJitter('PPR1-Well-001x')
    expect(j).toBeGreaterThanOrEqual(-0.04)
    expect(j).toBeLessThanOrEqual(0.04)
  })

  it('is deterministic for same input', async () => {
    const { nameJitter } = await import('../lib/wellmap')
    expect(nameJitter('PPR1-Well-007x')).toBe(nameJitter('PPR1-Well-007x'))
  })

  it('produces different values for different seeds', async () => {
    const { nameJitter } = await import('../lib/wellmap')
    expect(nameJitter('PPR1-Well-001x')).not.toBe(nameJitter('PPR1-Well-002x'))
  })
})

describe('computeWellPositions', () => {
  it('returns one entry per well', async () => {
    const { computeWellPositions } = await import('../lib/wellmap')
    const names = ['W-001', 'W-002', 'W-003', 'W-004']
    const result = computeWellPositions(names)
    expect(result).toHaveLength(4)
  })

  it('all x and y values are in 0–1 range', async () => {
    const { computeWellPositions } = await import('../lib/wellmap')
    const names = Array.from({ length: 50 }, (_, i) => `PPR1-Well-${String(i + 1).padStart(3, '0')}`)
    for (const p of computeWellPositions(names)) {
      expect(p.x).toBeGreaterThanOrEqual(0)
      expect(p.x).toBeLessThanOrEqual(1)
      expect(p.y).toBeGreaterThanOrEqual(0)
      expect(p.y).toBeLessThanOrEqual(1)
    }
  })

  it('preserves well names', async () => {
    const { computeWellPositions } = await import('../lib/wellmap')
    const names = ['Alpha', 'Beta', 'Gamma']
    const result = computeWellPositions(names)
    expect(result.map(p => p.wellName)).toEqual(['Alpha', 'Beta', 'Gamma'])
  })
})

describe('pressureQuartileColor', () => {
  it('bottom quartile is green', async () => {
    const { pressureQuartileColor } = await import('../lib/wellmap')
    // pressures: [100, 200, 300, 400] — 100 is bottom quartile
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
