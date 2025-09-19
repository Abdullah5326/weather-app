import { getCoordsByLocation, getCurrentCoords } from "./reverseLocation";

async function getPosition(position) {
  const coords = await getCurrentCoords();
  const userLocation = position ? await getCoordsByLocation(position) : null;
  const { name: cityName, country } = !position
    ? { name: "Current Location", country: null }
    : userLocation;
  const latitude = !position ? [coords.lat] : [userLocation.latitude];
  const longitude = !position ? [coords.lng] : [userLocation.longitude];
  return { latitude, longitude, cityName, country };
}

export async function getForcast(position) {
  try {
    const { latitude, longitude, cityName, country } = await getPosition(
      position
    );

    const url = "https://api.open-meteo.com/v1/forecast";
    const currentParams = `current=temperature_2m,precipitation,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m`;
    const weeklyParams = `daily=weather_code,temperature_2m_max,temperature_2m_min`;
    const hourlyParams = `hourly=temperature_2m,weather_code&`;

    const res = await fetch(
      `${url}?latitude=${latitude}&longitude=${longitude}&${hourlyParams}&${weeklyParams}&${currentParams}`
    );

    if (!res.ok)
      throw new Error(
        "There is an error in fetching forcast of the city",
        res.status
      );

    const data = await res.json();
    const { current, hourly, daily } = data;

    const {
      temperature_2m: temperature,
      weather_code: currentWeatherCode,
      wind_speed_10m: windSpeed,
      relative_humidity_2m: humidity,
      apparent_temperature: apparentTemperature,
      time: currentTime,
      precipitation,
    } = current;
    const {
      temperature_2m: hourTemperatures,
      weather_code: hourlyWeatherCodes,
      time: hours,
    } = hourly;

    const {
      weather_code: weeklyWeatherCodes,
      temperature_2m_max: temperatureMax,
      temperature_2m_min: temperatureMin,
      time: daysTime,
    } = daily;

    const newAppWeatherData = {
      temperature,
      humidity,
      currentWeatherCode,
      windSpeed,
      currentTime,
      apparentTemperature,
      precipitation,
      daysTime,
      temperatureMax,
      temperatureMin,
      hours,
      hourTemperatures,
      weeklyWeatherCodes,
      hourlyWeatherCodes,
      cityName,
      country,
    };
    return newAppWeatherData;
  } catch (err) {
    console.log(err.message, err.status);

    throw new Error(err.message);
  }
}
