export interface LasData {
  depth: number[]
  curves: Record<string, number[]>
  units: Record<string, string>
}

export function parseLas(text: string): LasData {
  const lines = text.split('\n')
  const curves: string[] = []
  const units: Record<string, string> = {}
  let nullValue = -9999.25
  let inCurveSection = false
  let inDataSection = false
  const rows: number[][] = []

  for (const raw of lines) {
    const line = raw.trim()
    if (!line || line.startsWith('#')) continue

    if (line.startsWith('~')) {
      inCurveSection = line.toUpperCase().startsWith('~C')
      inDataSection = line.toUpperCase().startsWith('~A')
      continue
    }

    if (inCurveSection) {
      // Format: MNEM.UNIT   value : description
      const match = line.match(/^(\w+)\s*\.\s*(\S*)\s/)
      if (match) {
        curves.push(match[1].toUpperCase())
        units[match[1].toUpperCase()] = match[2]
      }
      continue
    }

    // Parse NULL value from well information section
    const nullMatch = line.match(/^NULL\s*\.\s*\S*\s+([-\d.]+)/i)
    if (nullMatch) {
      nullValue = parseFloat(nullMatch[1])
    }

    if (inDataSection) {
      const vals = line.split(/\s+/).map(Number)
      if (vals.length === curves.length) rows.push(vals)
    }
  }

  const depth: number[] = []
  const curveData: Record<string, number[]> = {}
  for (const name of curves.slice(1)) curveData[name] = []

  for (const row of rows) {
    depth.push(row[0])
    curves.slice(1).forEach((name, i) => {
      const v = row[i + 1]
      curveData[name].push(Math.abs(v - nullValue) < 0.01 ? NaN : v)
    })
  }

  return { depth, curves: curveData, units }
}
