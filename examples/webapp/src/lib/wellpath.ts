export interface WellPathJson {
  md: number[]
  tvd: number[]
  inclination: number[]
  azimuth: number[]
}

export interface XYZPoint {
  x: number // east (m)
  y: number // up — negative TVD so depth increases downward
  z: number // north (m)
}

const DEG = Math.PI / 180

/**
 * Converts a well path survey (minimum curvature approximation) to Cartesian XYZ
 * suitable for three.js (Y-up coordinate system, depth as negative Y).
 */
export function wellpathToXyz(path: WellPathJson): XYZPoint[] {
  const { md, tvd, inclination, azimuth } = path
  const n = md.length
  const points: XYZPoint[] = [{ x: 0, y: 0, z: 0 }]
  let east = 0
  let north = 0

  for (let i = 1; i < n; i++) {
    const dMd = md[i] - md[i - 1]
    const inc1 = inclination[i - 1] * DEG
    const inc2 = inclination[i] * DEG
    const az1 = azimuth[i - 1] * DEG
    const az2 = azimuth[i] * DEG

    // Minimum curvature method
    const dl = Math.acos(
      Math.cos(inc2 - inc1) - Math.sin(inc1) * Math.sin(inc2) * (1 - Math.cos(az2 - az1))
    )
    const rf = dl === 0 ? 1 : (2 / dl) * Math.tan(dl / 2)

    east += (dMd / 2) * (Math.sin(inc1) * Math.sin(az1) + Math.sin(inc2) * Math.sin(az2)) * rf
    north += (dMd / 2) * (Math.sin(inc1) * Math.cos(az1) + Math.sin(inc2) * Math.cos(az2)) * rf

    points.push({ x: east, y: -tvd[i], z: north })
  }

  return points
}
