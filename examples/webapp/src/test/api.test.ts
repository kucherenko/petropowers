import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock the stores module so apiKey is controllable
// svelte/store `get()` calls store.subscribe(cb) synchronously
vi.mock('../lib/stores', () => ({
  apiKey: {
    subscribe: (cb: (v: string) => void) => { cb(''); return () => {} },
    set: vi.fn(),
  },
}))

describe('apiFetch', () => {
  beforeEach(() => {
    global.fetch = vi.fn()
  })

  it('prepends /api to the path', async () => {
    ;(global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce(
      new Response(JSON.stringify({ status: 'ok', reservoirs: [] }), { status: 200 })
    )
    const { apiFetch } = await import('../lib/api')
    await apiFetch('/health')
    expect(global.fetch).toHaveBeenCalledWith('/api/health', expect.any(Object))
  })

  it('throws on non-2xx responses', async () => {
    ;(global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce(
      new Response('Unauthorized', { status: 401 })
    )
    const { apiFetch } = await import('../lib/api')
    await expect(apiFetch('/health')).rejects.toThrow('401')
  })
})

describe('listReservoirs', () => {
  beforeEach(() => {
    global.fetch = vi.fn()
  })

  it('returns reservoir name array', async () => {
    ;(global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce(
      new Response(JSON.stringify(['ppr-1', 'ppr-2']), { status: 200 })
    )
    const { listReservoirs } = await import('../lib/api')
    const result = await listReservoirs()
    expect(result).toEqual(['ppr-1', 'ppr-2'])
  })
})

describe('loadWellPressures', () => {
  beforeEach(() => {
    global.fetch = vi.fn()
  })

  it('parses production CSVs and returns averaged pressures', async () => {
    const csv = 'wellhead_pressure_psi,other\n1000,a\n2000,b\n3000,c\n'
    ;(global.fetch as ReturnType<typeof vi.fn>)
      .mockResolvedValueOnce(new Response(JSON.stringify(['Well-001_production.csv']), { status: 200 }))
      .mockResolvedValueOnce(new Response(csv, { status: 200 }))
    const { loadWellPressures } = await import('../lib/api')
    const result = await loadWellPressures('ppr-1')
    expect(result).toHaveLength(1)
    expect(result[0].wellName).toBe('Well-001')
    expect(result[0].avgPressure).toBeCloseTo(2000)
  })

  it('skips files with no valid pressure values', async () => {
    const csv = 'wellhead_pressure_psi\nnotanumber\n'
    ;(global.fetch as ReturnType<typeof vi.fn>)
      .mockResolvedValueOnce(new Response(JSON.stringify(['Bad_production.csv']), { status: 200 }))
      .mockResolvedValueOnce(new Response(csv, { status: 200 }))
    const { loadWellPressures } = await import('../lib/api')
    const result = await loadWellPressures('ppr-1')
    expect(result).toHaveLength(0)
  })

  it('derives well name by stripping _production.csv suffix', async () => {
    const csv = 'wellhead_pressure_psi\n1500\n'
    ;(global.fetch as ReturnType<typeof vi.fn>)
      .mockResolvedValueOnce(new Response(JSON.stringify(['PPR1-Well-007_production.csv']), { status: 200 }))
      .mockResolvedValueOnce(new Response(csv, { status: 200 }))
    const { loadWellPressures } = await import('../lib/api')
    const result = await loadWellPressures('ppr-1')
    expect(result[0].wellName).toBe('PPR1-Well-007')
  })

  it('returns empty array when reservoir has no production files', async () => {
    ;(global.fetch as ReturnType<typeof vi.fn>)
      .mockResolvedValueOnce(new Response(JSON.stringify([]), { status: 200 }))
    const { loadWellPressures } = await import('../lib/api')
    const result = await loadWellPressures('empty-reservoir')
    expect(result).toEqual([])
  })
})
