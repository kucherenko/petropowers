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
