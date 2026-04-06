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
