import { useSettings } from "../contexts/SettingsContext";
import { formatDate } from "../utils/helpers";

function MainWeatherDashboard() {
  const { appWeatherData } = useSettings();
  const { temperature, currentTime, cityName, province } = appWeatherData;
  return (
    <div>
      <div className=" relative">
        <img src="bg-today-large.svg" alt="background" />
        <div className="flex flex-col sm:flex-row justify-between w-full absolute top-[50%] -translate-y-[50%] px-8 ">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-2xl">
              {cityName.split(" ")[0]} {province}
            </p>
            <p className="text-sm text-stone-300">{formatDate(currentTime)}</p>
          </div>
          <img
            src="icon-sunny.webp"
            alt="icon-sunny"
            className="h-24 w-24 absolute top-[50%] -translate-y-[50%] left-[55%]"
          />
          <p className="text-7xl italic font-[600]">
            {Math.round(temperature)}&deg;
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainWeatherDashboard;
