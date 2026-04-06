export interface HealthResponse {
  status: string
  reservoirs: string[]
}

export interface ReservoirSummary {
  [dataType: string]: number
}

export interface ApiError {
  status: number
  message: string
}

export interface WellCoordinate {
  name: string
  x_m: number
  y_m: number
}

export interface BoundaryPoint {
  x_m: number
  y_m: number
}

export interface ReservoirGeometry {
  wells: WellCoordinate[]
  boundary: BoundaryPoint[]
}

export interface MappedWell {
  name: string
  x_m: number
  y_m: number
  avgPressure: number
}
