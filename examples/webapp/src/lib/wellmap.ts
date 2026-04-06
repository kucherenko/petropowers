export interface WellPosition {
  wellName: string
  x: number  // normalized 0–1
  y: number  // normalized 0–1
}

/** Deterministic jitter derived from a string seed. Returns a value in ±0.04. */
export function nameJitter(seed: string): number {
  const hash = seed.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return ((hash % 17) / 17 - 0.5) * 0.08
}

/**
 * Compute synthetic grid positions for a list of well names.
 * Wells are sorted before layout so positions are stable regardless of input order.
 */
export function computeWellPositions(wellNames: string[]): WellPosition[] {
  const sorted = [...wellNames].sort()
  const cols = Math.ceil(Math.sqrt(sorted.length))
  const rows = Math.ceil(sorted.length / cols)

  return sorted.map((name, i) => {
    const col = i % cols
    const row = Math.floor(i / cols)
    const x = Math.max(0, Math.min(1, (col + 0.5) / cols + nameJitter(name + 'x')))
    const y = Math.max(0, Math.min(1, (row + 0.5) / rows + nameJitter(name + 'y')))
    return { wellName: name, x, y }
  })
}

/** Return hex color for a pressure value based on quartile across all pressures. */
export function pressureQuartileColor(pressure: number, allPressures: number[]): string {
  const sorted = [...allPressures].sort((a, b) => a - b)
  const q1 = sorted[Math.floor(sorted.length * 0.25)]
  const q3 = sorted[Math.floor(sorted.length * 0.75)]
  if (pressure <= q1) return '#22c55e'
  if (pressure >= q3) return '#ef4444'
  return '#f59e0b'
}

/** Map a pressure value to a bubble radius (6–18 px), clamped. */
export function pressureToRadius(pressure: number, minP: number, maxP: number): number {
  const t = maxP === minP ? 0 : (pressure - minP) / (maxP - minP)
  return Math.round(6 + Math.max(0, Math.min(1, t)) * 12)
}
