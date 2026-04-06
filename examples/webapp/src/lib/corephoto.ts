export interface CorePhotoMeta {
  depth_start: number
  depth_end: number
  lithology: string
  porosity: number
  permeability: number
  grain_size: string
  texture: string
  color: string
  fractures: number
  bedding_angle: number
  oil_staining: boolean
  formation: string
  well_name: string
  field_name: string
  sample_date: string
  latitude: number
  longitude: number
}

/**
 * Derive the sidecar metadata JSON path from a photo file path.
 * "PPR1-Well-001/photo_001.png" → "PPR1-Well-001/photo_001_metadata.json"
 */
export function metadataPath(photoPath: string): string {
  return photoPath.replace(/\.[^./]+$/, '_metadata.json')
}
