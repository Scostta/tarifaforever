const apiKey = import.meta.env.PUBLIC_API_KEY
const stationId = import.meta.env.PUBLIC_STATION_ID
const format = "json"
const units = "m"

const GET_OBSERVATIONS_PATH = "https://api.weather.com/v2/pws/observations"


const weather = {
  async getObservations() {
    const url =
      `${GET_OBSERVATIONS_PATH}/current?stationId=${stationId}&format=${format}&units=${units}&apiKey=${apiKey}`
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch observations');
    }
    return response.json();
  },
} as const;

export default weather;
