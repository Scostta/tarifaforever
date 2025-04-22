import { useEffect, useState } from "react";

const DEFAULT_DELAY = 60000 // 1min

export const useApiPolling = <T>(apiFunction: () => Promise<any>, delay: number = DEFAULT_DELAY): T | null => {
  const [data, setData] = useState(null);

  useEffect(() => {

    const intervalId = setInterval(function caller() {
      apiFunction().then(response => {
        setData(response)
      }).catch(error => console.error(error));
      return caller;
    }(), delay);

    // Clear the interval on unmount
    return () => clearInterval(intervalId);
  }, [apiFunction, delay]);

  return data;
}