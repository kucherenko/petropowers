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
