import { describe, it, expect } from 'vitest'

const SAMPLE_LAS = `~VERSION INFORMATION
 VERS.                 2.0: CWLS log ASCII Standard - Version 2.0
 WRAP.                  NO: One Line per depth step
~WELL INFORMATION
 STRT.M              1500.00: Start depth
 STOP.M              1500.30: Stop depth
 STEP.M               0.15: Step
 NULL.               -9999.25: Null value
~CURVE INFORMATION
 DEPT.M               : Depth
 GR.API               : Gamma Ray
 RHOB.G/C3            : Bulk Density
~A  DEPT    GR    RHOB
   1500.00  50.0  2.50
   1500.15  55.0  2.52
   1500.30  48.0  2.48
`

describe('parseLas', () => {
  it('extracts curve names', async () => {
    const { parseLas } = await import('../lib/las')
    const result = parseLas(SAMPLE_LAS)
    expect(result.curves).toHaveProperty('GR')
    expect(result.curves).toHaveProperty('RHOB')
  })

  it('extracts depth array', async () => {
    const { parseLas } = await import('../lib/las')
    const result = parseLas(SAMPLE_LAS)
    expect(result.depth).toEqual([1500.0, 1500.15, 1500.3])
  })

  it('extracts curve values', async () => {
    const { parseLas } = await import('../lib/las')
    const result = parseLas(SAMPLE_LAS)
    expect(result.curves['GR']).toEqual([50.0, 55.0, 48.0])
    expect(result.curves['RHOB']).toEqual([2.50, 2.52, 2.48])
  })

  it('replaces null values with NaN', async () => {
    const { parseLas } = await import('../lib/las')
    const lasWithNull = SAMPLE_LAS.replace('  1500.30  48.0  2.48', '  1500.30  -9999.25  2.48')
    const result = parseLas(lasWithNull)
    expect(Number.isNaN(result.curves['GR'][2])).toBe(true)
  })
})
