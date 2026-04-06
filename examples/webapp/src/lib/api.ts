import { get } from 'svelte/store'
import { apiKey } from './stores'
import type { HealthResponse, ReservoirSummary } from './types'
import Papa from 'papaparse'

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

export interface WellPressure {
  wellName: string
  avgPressure: number
}

export async function loadWellPressures(name: string): Promise<WellPressure[]> {
  const files = await listFiles(name, 'production')
  const results = await Promise.all(
    files.map(async (file): Promise<WellPressure | null> => {
      try {
        const r = await apiFetch(
          `/reservoirs/${encodeURIComponent(name)}/production/${encodeURIComponent(file)}`
        )
        const text = await r.text()
        const parsed = Papa.parse<Record<string, string>>(text, {
          header: true,
          skipEmptyLines: true,
        })
        const pressures = parsed.data
          .map(row => parseFloat(row['wellhead_pressure_psi']))
          .filter(v => isFinite(v))
        if (pressures.length === 0) return null
        const avg = pressures.reduce((a, b) => a + b, 0) / pressures.length
        const wellName = file.replace(/_production\.csv$/i, '')
        return { wellName, avgPressure: avg }
      } catch {
        return null
      }
    })
  )
  return results.filter((r): r is WellPressure => r !== null)
}
