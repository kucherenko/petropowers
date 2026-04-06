import { describe, it, expect, vi, beforeEach } from 'vitest'
import { get } from 'svelte/store'

// vi.resetModules() is required — the theme store reads localStorage at module
// initialization time, so each test needs a fresh module import.
beforeEach(() => {
  localStorage.clear()
  vi.resetModules()
})

describe('theme store', () => {
  it('defaults to dark when localStorage is empty', async () => {
    const { theme } = await import('../lib/stores')
    expect(get(theme)).toBe('dark')
  })

  it('initializes from localStorage if set', async () => {
    localStorage.setItem('reservoir_theme', 'light')
    const { theme } = await import('../lib/stores')
    expect(get(theme)).toBe('light')
  })

  it('toggle switches dark → light', async () => {
    const { theme } = await import('../lib/stores')
    theme.toggle()
    expect(get(theme)).toBe('light')
  })

  it('toggle switches light → dark', async () => {
    localStorage.setItem('reservoir_theme', 'light')
    const { theme } = await import('../lib/stores')
    theme.toggle()
    expect(get(theme)).toBe('dark')
  })

  it('persists to localStorage on toggle', async () => {
    const { theme } = await import('../lib/stores')
    theme.toggle()
    expect(localStorage.getItem('reservoir_theme')).toBe('light')
    theme.toggle()
    expect(localStorage.getItem('reservoir_theme')).toBe('dark')
  })
})
