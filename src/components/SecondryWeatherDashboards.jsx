import { useSettings } from "../contexts/SettingsContext";
import SecondryWeatherDetails from "./SecondryWeatherDetails";

function SecondryWeatherDashboards() {
  const { appWeatherData, windSpeedUnit, precipitationUnit } = useSettings();
  const { temperature, windSpeed, precipitation, humidity } = appWeatherData;
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-4 justify-start gap-4 w-full mb-10 sm:mb-6">
      <SecondryWeatherDetails>
        <p className="text-stone-300 text-sm">Feels like</p>
        <p className="text-xl">{Math.round(temperature)}&deg; </p>
      </SecondryWeatherDetails>
      <SecondryWeatherDetails>
        <p className="text-stone-300 text-sm">Humidity</p>
        <p className="text-xl">{Math.round(humidity)} % </p>
      </SecondryWeatherDetails>
      <SecondryWeatherDetails>
        <p className="text-stone-300 text-sm">Wind speed</p>
        <p className="text-xl">
          {windSpeed.toFixed(2)} {windSpeedUnit}
        </p>
      </SecondryWeatherDetails>
      <SecondryWeatherDetails>
        <p className="text-stone-300 text-sm">Precipitation</p>
        <p className="text-xl">
          {Math.round(precipitation)} {precipitationUnit}
        </p>
      </SecondryWeatherDetails>
    </ul>
  );
}

export default SecondryWeatherDashboards;
