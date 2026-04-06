import { describe, it, expect } from 'vitest'

describe('metadataPath', () => {
  it('replaces .png extension with _metadata.json', async () => {
    const { metadataPath } = await import('../lib/corephoto')
    expect(metadataPath('PPR1-Well-001/PPR1-Well-001_depth_2021.9m.png'))
      .toBe('PPR1-Well-001/PPR1-Well-001_depth_2021.9m_metadata.json')
  })

  it('works for jpeg extension', async () => {
    const { metadataPath } = await import('../lib/corephoto')
    expect(metadataPath('PPR1-Well-001/photo_001.jpeg'))
      .toBe('PPR1-Well-001/photo_001_metadata.json')
  })

  it('preserves subdirectory path', async () => {
    const { metadataPath } = await import('../lib/corephoto')
    const result = metadataPath('WellA/sub/photo.png')
    expect(result.startsWith('WellA/sub/')).toBe(true)
  })
})
