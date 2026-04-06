import { describe, it, expect } from 'vitest'

/** Build a minimal valid SEG-Y ArrayBuffer with 2 inline × 2 crossline traces, 4 samples each */
function buildMinimalSegy(formatCode: number): ArrayBuffer {
  const samplesPerTrace = 4
  const traceCount = 4 // 2 inline × 2 crossline
  const traceDataBytes = samplesPerTrace * 4
  const totalBytes = 3200 + 400 + traceCount * (240 + traceDataBytes)
  const buf = new ArrayBuffer(totalBytes)
  const view = new DataView(buf)

  // Binary header (starts at byte 3200, big-endian)
  view.setInt16(3200 + 16, 2000, false) // sample interval µs = 2ms
  view.setInt16(3200 + 20, samplesPerTrace, false) // samples per trace
  view.setInt16(3200 + 24, formatCode, false) // data format code

  const traces: Array<[number, number, number[]]> = [
    [1, 1, [1.0, 2.0, 3.0, 4.0]],
    [1, 2, [5.0, 6.0, 7.0, 8.0]],
    [2, 1, [9.0, 10.0, 11.0, 12.0]],
    [2, 2, [13.0, 14.0, 15.0, 16.0]],
  ]

  let offset = 3600
  for (const [il, xl, samples] of traces) {
    // Trace header: inline at byte 188 (0-indexed), crossline at 192
    view.setInt32(offset + 188, il, false)
    view.setInt32(offset + 192, xl, false)
    offset += 240
    for (const s of samples) {
      view.setFloat32(offset, s, false) // big-endian IEEE float32
      offset += 4
    }
  }

  return buf
}

describe('parseSegy with IEEE float32 (format 5)', () => {
  it('reads geometry from binary header', async () => {
    const { parseSegy } = await import('../lib/segy')
    const result = parseSegy(buildMinimalSegy(5))
    expect(result.samplesPerTrace).toBe(4)
    expect(result.inlines).toEqual([1, 2])
    expect(result.crosslines).toEqual([1, 2])
  })

  it('reads amplitude values correctly', async () => {
    const { parseSegy } = await import('../lib/segy')
    const result = parseSegy(buildMinimalSegy(5))
    // IL=1, XL=1, first sample should be 1.0
    expect(result.amplitude(1, 1, 0)).toBeCloseTo(1.0)
    // IL=2, XL=2, last sample should be 16.0
    expect(result.amplitude(2, 2, 3)).toBeCloseTo(16.0)
  })
})
