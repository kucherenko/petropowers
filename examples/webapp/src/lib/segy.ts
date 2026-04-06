export interface SegyData {
  samplesPerTrace: number
  sampleIntervalUs: number
  inlines: number[]
  crosslines: number[]
  /** Returns amplitude at given inline, crossline, sample index. Returns NaN if not found. */
  amplitude(il: number, xl: number, sampleIdx: number): number
}

function ibmToIeee(ibm: number): number {
  if (ibm === 0) return 0
  const sign = (ibm >>> 31) & 1
  const exp = ((ibm >>> 24) & 0x7f) - 64
  const mantissa = (ibm & 0xffffff) / 16777216
  const value = mantissa * Math.pow(16, exp)
  return sign ? -value : value
}

export function parseSegy(buffer: ArrayBuffer): SegyData {
  const view = new DataView(buffer)

  // Binary header starts at byte 3200 (0-indexed)
  const sampleIntervalUs = view.getInt16(3200 + 16, false)
  const samplesPerTrace = view.getInt16(3200 + 20, false)
  const formatCode = view.getInt16(3200 + 24, false) // 1=IBM float, 5=IEEE float32

  const traceBytes = 240 + samplesPerTrace * 4
  // Map [il, xl] → Float32Array of samples
  const traceMap = new Map<string, Float32Array>()

  let offset = 3600
  while (offset + 240 + samplesPerTrace * 4 <= buffer.byteLength) {
    const il = view.getInt32(offset + 188, false)
    const xl = view.getInt32(offset + 192, false)
    const key = `${il},${xl}`
    const samples = new Float32Array(samplesPerTrace)
    const dataStart = offset + 240
    for (let i = 0; i < samplesPerTrace; i++) {
      const raw = view.getUint32(dataStart + i * 4, false)
      samples[i] = formatCode === 1 ? ibmToIeee(raw) : view.getFloat32(dataStart + i * 4, false)
    }
    traceMap.set(key, samples)
    offset += traceBytes
  }

  // Collect sorted unique inline and crossline numbers
  const ilSet = new Set<number>()
  const xlSet = new Set<number>()
  for (const key of traceMap.keys()) {
    const [il, xl] = key.split(',').map(Number)
    ilSet.add(il)
    xlSet.add(xl)
  }
  const inlines = [...ilSet].sort((a, b) => a - b)
  const crosslines = [...xlSet].sort((a, b) => a - b)

  return {
    samplesPerTrace,
    sampleIntervalUs,
    inlines,
    crosslines,
    amplitude(il, xl, sampleIdx) {
      const trace = traceMap.get(`${il},${xl}`)
      return trace ? trace[sampleIdx] : NaN
    },
  }
}
