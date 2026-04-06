/** Map a depth value to an SVG Y coordinate (depth increases downward). */
export function depthToY(
  depth: number,
  depthMin: number,
  depthMax: number,
  svgHeight: number
): number {
  return ((depth - depthMin) / (depthMax - depthMin)) * svgHeight
}

/** Map a linear curve value to an SVG X coordinate, clamped to [0, trackWidth]. */
export function linearToX(
  value: number,
  valMin: number,
  valMax: number,
  trackWidth: number
): number {
  const x = ((value - valMin) / (valMax - valMin)) * trackWidth
  return Math.max(0, Math.min(trackWidth, x))
}

/** Map a value on a log₁₀ scale to an SVG X coordinate, clamped to [0, trackWidth]. */
export function log10ToX(
  value: number,
  valMin: number,
  valMax: number,
  trackWidth: number
): number {
  if (value <= 0 || valMin <= 0) return 0
  const logVal = Math.log10(value)
  const logMin = Math.log10(valMin)
  const logMax = Math.log10(valMax)
  const x = ((logVal - logMin) / (logMax - logMin)) * trackWidth
  return Math.max(0, Math.min(trackWidth, x))
}
