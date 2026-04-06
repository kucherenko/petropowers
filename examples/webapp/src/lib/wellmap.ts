import type { ReservoirGeometry, MappedWell } from './types'
import type { WellPressure } from './api'

/**
 * Inner-join geometry and pressure data on well name.
 * Only wells present in both datasets are returned.
 * Note: geometry uses `name`, pressure uses `wellName` — this function handles the mapping.
 */
export function mergeGeometryAndPressure(
  geometry: ReservoirGeometry,
  pressures: WellPressure[]
): MappedWell[] {
  const pressureMap = new Map(pressures.map(p => [p.wellName, p.avgPressure]))
  return geometry.wells
    .filter(w => pressureMap.has(w.name))
    .map(w => ({
      name: w.name,
      x_m: w.x_m,
      y_m: w.y_m,
      avgPressure: pressureMap.get(w.name)!,
    }))
}

/**
 * Inverse-distance weighting interpolation.
 * Returns the pressure at (x, y) weighted by distance^power to each well.
 * If the query point is within 0.1 m of a well, returns that well's pressure directly.
 */
export function interpolatePressure(
  x: number,
  y: number,
  wells: MappedWell[],
  power = 2
): number {
  for (const w of wells) {
    const d = Math.sqrt((x - w.x_m) ** 2 + (y - w.y_m) ** 2)
    if (d < 0.1) return w.avgPressure
  }
  let num = 0
  let den = 0
  for (const w of wells) {
    const d = Math.sqrt((x - w.x_m) ** 2 + (y - w.y_m) ** 2)
    const w_i = 1 / d ** power
    num += w_i * w.avgPressure
    den += w_i
  }
  return den === 0 ? 0 : num / den
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
