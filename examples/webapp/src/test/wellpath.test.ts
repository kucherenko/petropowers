import { describe, it, expect } from 'vitest'

describe('wellpathToXyz', () => {
  it('returns an array of Vector3-like points', async () => {
    const { wellpathToXyz } = await import('../lib/wellpath')
    const path = {
      md: [0, 100, 200],
      tvd: [0, 90, 180],
      inclination: [0, 10, 10],
      azimuth: [0, 45, 45],
    }
    const pts = wellpathToXyz(path)
    expect(pts).toHaveLength(3)
    expect(pts[0]).toMatchObject({ x: 0, y: 0, z: 0 })
  })

  it('vertical well stays at x=0, z=0', async () => {
    const { wellpathToXyz } = await import('../lib/wellpath')
    const path = { md: [0, 100, 200], tvd: [0, 100, 200], inclination: [0, 0, 0], azimuth: [0, 0, 0] }
    const pts = wellpathToXyz(path)
    for (const p of pts) {
      expect(Math.abs(p.x)).toBeLessThan(0.001)
      expect(Math.abs(p.z)).toBeLessThan(0.001)
    }
    // y increases with depth (TVD grows downward, represented as negative y in three.js)
    expect(pts[2].y).toBeLessThan(pts[1].y)
  })
})
