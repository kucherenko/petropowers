import { get } from 'svelte/store'
import { apiKey } from './stores'
import type { HealthResponse, ReservoirSummary } from './types'

function getHeaders(): HeadersInit {
  const key = get(apiKey)
  return key ? { 'X-API-Key': key } : {}
}

export async function apiFetch(path: string, options: RequestInit = {}): Promise<Response> {
  const response = await fetch(`/api${path}`, {
    ...options,
    headers: { ...getHeaders(), ...options.headers },
  })
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`)
  }
  return response
}

export async function getHealth(): Promise<HealthResponse> {
  const r = await apiFetch('/health')
  return r.json()
}

export async function listReservoirs(): Promise<string[]> {
  const r = await apiFetch('/reservoirs')
  return r.json()
}

export async function getReservoir(name: string): Promise<ReservoirSummary> {
  const r = await apiFetch(`/reservoirs/${encodeURIComponent(name)}`)
  return r.json()
}

export async function listFiles(name: string, dataType: string): Promise<string[]> {
  const r = await apiFetch(`/reservoirs/${encodeURIComponent(name)}/${encodeURIComponent(dataType)}`)
  return r.json()
}

export function downloadFileUrl(name: string, dataType: string, file: string): string {
  return `/api/reservoirs/${encodeURIComponent(name)}/${encodeURIComponent(dataType)}/${file}`
}

export function imageUrl(name: string, dataType: string, file: string): string {
  return `/api/images/${encodeURIComponent(name)}/${encodeURIComponent(dataType)}/${file}`
}
