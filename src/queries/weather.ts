import weather from "src/services/endpoints/weather"
import type { Observation } from "src/services/types/weather"

export const getObservation = async (): Promise<Observation> => {
  try {
    const observations = await weather.getObservations()
    return observations.observations[0] as Observation
  } catch (error: any) {
    throw new Error(error.message);
  }
}