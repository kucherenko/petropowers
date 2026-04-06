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
  const stored = localStorage.getItem(THEME_KEY)
  const initial: Theme = stored === 'light' || stored === 'dark' ? stored : 'dark'
  const { subscribe, set, update } = writable<Theme>(initial)

  return {
    subscribe,
    toggle() {
      update(current => {
        const next: Theme = current === 'dark' ? 'light' : 'dark'
        localStorage.setItem(THEME_KEY, next)
        return next
      })
    },
  }
}

export const theme = createThemeStore()
