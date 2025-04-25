import { Speedometer } from "@components/LiveWindForecast/components/Speedometer";
import { APP_SECTIONS } from "src/constants";
import { useApiPolling } from "src/hooks/useApiPolling";
import { getObservation } from "src/queries/weather";
import type { Observation } from "src/services/types/weather";

export const LiveWindForecast = () => {

  const data = useApiPolling<Observation>(getObservation)

  const { metric } = data ?? {}
  const { windGust, windSpeed = 0, windChill } = metric ?? {}
  const speed = Math.floor(windSpeed / 1.852)

  console.log({
    windGust, windSpeed, windChill
  })

  return (
    <div id={APP_SECTIONS.LIVE_WIND_FORECAST} className="px-2 lg:px-24">
      <div className="card-primary flex flex-col gap-8">
        <div className="title">Live wind forecast</div>
        <Speedometer value={speed} />
      </div>
    </div>
  );
}