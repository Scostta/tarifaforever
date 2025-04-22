export type Observation = {
  stationID: string
  obsTimeUtc: string
  obsTimeLocal: string
  neighborhood: string
  softwareType: string | null
  country: string
  solarRadiation: number
  lon: number
  realtimeFrequency: number | null
  epoch: number
  lat: number
  uv: number
  winddir: number
  humidity: number
  qcStatus: number
  metric: {
    temp: number
    heatIndex: number
    dewpt: number
    windChill: number
    windSpeed: number
    windGust: number
    pressure: number
    precipRate: number
    precipTotal: number
    elev: number
  }
}

export type Observations = Array<Observation>