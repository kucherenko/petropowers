import { writable } from 'svelte/store'

const STORAGE_KEY = 'reservoir_api_key'

function createApiKeyStore() {
  const initial = localStorage.getItem(STORAGE_KEY) ?? ''
  const { subscribe, set } = writable<string>(initial)

  return {
    subscribe,
    set(value: string) {
      if (value) {
        localStorage.setItem(STORAGE_KEY, value)
      } else {
        localStorage.removeItem(STORAGE_KEY)
      }
      set(value)
    },
    clear() {
      localStorage.removeItem(STORAGE_KEY)
      set('')
    },
  }
}

export const apiKey = createApiKeyStore()
export const reservoirs = writable<string[]>([])

const THEME_KEY = 'reservoir_theme'
type Theme = 'light' | 'dark'

function createThemeStore() {
  const initial: Theme = (localStorage.getItem(THEME_KEY) as Theme) ?? 'dark'
  const { subscribe, set } = writable<Theme>(initial)

  return {
    subscribe,
    toggle() {
      const current = localStorage.getItem(THEME_KEY) ?? 'dark'
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      localStorage.setItem(THEME_KEY, next)
      set(next)
    },
  }
}

export const theme = createThemeStore()
