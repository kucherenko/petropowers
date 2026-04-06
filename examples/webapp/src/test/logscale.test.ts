import { describe, it, expect } from 'vitest'

describe('depthToY', () => {
  it('maps depthMin to 0', async () => {
    const { depthToY } = await import('../lib/logscale')
    expect(depthToY(1500, 1500, 3500, 1000)).toBe(0)
  })

  it('maps depthMax to svgHeight', async () => {
    const { depthToY } = await import('../lib/logscale')
    expect(depthToY(3500, 1500, 3500, 1000)).toBe(1000)
  })

  it('maps midpoint depth to half svgHeight', async () => {
    const { depthToY } = await import('../lib/logscale')
    expect(depthToY(2500, 1500, 3500, 1000)).toBe(500)
  })
})

describe('linearToX', () => {
  it('maps min value to 0', async () => {
    const { linearToX } = await import('../lib/logscale')
    expect(linearToX(0, 0, 150, 60)).toBe(0)
  })

  it('maps max value to trackWidth', async () => {
    const { linearToX } = await import('../lib/logscale')
    expect(linearToX(150, 0, 150, 60)).toBe(60)
  })

  it('clamps values below min to 0', async () => {
    const { linearToX } = await import('../lib/logscale')
    expect(linearToX(-10, 0, 150, 60)).toBe(0)
  })

  it('clamps values above max to trackWidth', async () => {
    const { linearToX } = await import('../lib/logscale')
    expect(linearToX(200, 0, 150, 60)).toBe(60)
  })
})

describe('log10ToX', () => {
  it('maps logMin to 0', async () => {
    const { log10ToX } = await import('../lib/logscale')
    expect(log10ToX(0.2, 0.2, 2000, 60)).toBeCloseTo(0, 5)
  })

  it('maps logMax to trackWidth', async () => {
    const { log10ToX } = await import('../lib/logscale')
    expect(log10ToX(2000, 0.2, 2000, 60)).toBeCloseTo(60, 5)
  })

  it('places decade midpoint correctly', async () => {
    const { log10ToX } = await import('../lib/logscale')
    // log10(20) is midpoint of log10(0.2)..log10(2000)
    const mid = log10ToX(20, 0.2, 2000, 60)
    expect(mid).toBeCloseTo(30, 1)
  })

  it('clamps negative/zero values to 0', async () => {
    const { log10ToX } = await import('../lib/logscale')
    expect(log10ToX(0, 0.2, 2000, 60)).toBe(0)
    expect(log10ToX(-5, 0.2, 2000, 60)).toBe(0)
  })
})
