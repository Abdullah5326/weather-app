import { fetchWeatherApi } from "openmeteo";
import { getCurrentCoords, getLocationByCoords } from "./reverseLocation";

export async function getForcast(position) {
  const coords = !position ? await getCurrentCoords() : null;
  const userLocation = !position
    ? await getLocationByCoords(coords)
    : await getLocationByCoords(position);
  const { name: cityName, state: province } = userLocation[0];
  const params = {
    latitude: !position ? [coords.lng] : [position.lat],
    longitude: !position ? [coords.lng] : [position.lng],
    current:
      "temperature_2m,weather_code,wind_speed_10m,precipitation,relative_humidity_2m",
    hourly: "temperature_2m,weather_code",
    daily: "weather_code,temperature_2m_max,temperature_2m_min",
  };

  const url = "https://api.open-meteo.com/v1/forecast";

  async function getWeather() {
    const responses = await fetchWeatherApi(url, params);
    const response = responses[0];

    const utcOffsetSeconds = response.utcOffsetSeconds();

    const current = response.current();
    const hourly = response.hourly();
    const daily = response.daily();

    const range = (start, stop, step) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

    const weatherData = {
      current: {
        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        temperature: current.variables(0).value(),
        weatherCode: current.variables(1).value(),
        windSpeed: current.variables(2).value(),
        precipitation: current.variables(3).value(),
        humidity: current.variables(4).value(),
      },
      hourly: {
        time: range(
          Number(hourly.time()),
          Number(hourly.timeEnd()),
          hourly.interval()
        ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
        temperature: hourly.variables(0).valuesArray(),
        weatherCode: hourly.variables(1).valuesArray(),
      },
      daily: {
        time: range(
          Number(daily.time()),
          Number(daily.timeEnd()),
          daily.interval()
        ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
        weatherCode: daily.variables(0).valuesArray(),
        temperatureMax: daily.variables(1).valuesArray(),
        temperatureMin: daily.variables(2).valuesArray(),
      },
    };

    const {
      temperature,
      humidity,
      windSpeed,
      time: currentTime,
      precipitation,
    } = weatherData?.current;

    const {
      time: daysTime,
      temperatureMax,
      temperatureMin,
      weatherCode: weeklyWeatherCodes,
    } = weatherData?.daily;
    const {
      time: hours,
      temperature: hourTemperatures,
      weatherCode: hourlyWeatherCodes,
    } = weatherData.hourly;
    const newAppWeatherData = {
      temperature,
      humidity,
      windSpeed,
      currentTime,
      precipitation,
      daysTime,
      temperatureMax,
      temperatureMin,
      hours,
      hourTemperatures,
      weeklyWeatherCodes,
      hourlyWeatherCodes,
      cityName,
      province,
    };
    return newAppWeatherData;
  }

  return getWeather();
}
