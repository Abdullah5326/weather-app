import { useQuery } from "@tanstack/react-query";
import { getForcast } from "../services/forcast";
import { useEffect } from "react";
import { useSettings } from "../contexts/SettingsContext";

export function useGetWeatherData(position) {
  const { addAppWeatherData } = useSettings();
  const {
    data: weatherData,
    isPending,
    error: forcastError,
  } = useQuery({
    queryKey: ["weatherData"],
    queryFn: () => getForcast(position),
  });

  useEffect(() => {
    if (!weatherData) return;
    addAppWeatherData(weatherData);
  }, [addAppWeatherData, weatherData]);
  return { weatherData, isPending, forcastError };
}
