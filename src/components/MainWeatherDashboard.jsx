import { useSettings } from "../contexts/SettingsContext";
import { formatDate } from "../utils/helpers";

function MainWeatherDashboard() {
  const { appWeatherData } = useSettings();
  const { temperature, currentTime, cityName, province } = appWeatherData;
  return (
    <div className="  self-center ">
      <div className="relative">
        <picture>
          <source
            media="(min-width: 640px)"
            srcset="bg-today-large.svg"
            className="h-full"
          />
          <img src="bg-today-small.svg" alt="cclogo" />
        </picture>
        <div className=" w-full  px-8 absolute grid grid-cols-1 h-full top-8">
          <div className="text-center sm:text-left sm:absolute sm:top-[50%]  sm:-translate-y-[100%] sm:left-5">
            <p className="font-semibold text-xl sm:text-xl">
              {cityName.split(" ")[0]}, {province}
            </p>
            <p className="text-sm text-stone-300">{formatDate(currentTime)}</p>
          </div>
          <img
            src="icon-sunny.webp"
            alt="icon-sunny"
            className="h-24 w-24 absolute top-[50%] -translate-y-[50%] sm:-translate-y-[90%] sm:right-[50%] sm:translate-x-[180%] "
          />
          <p className="text-7xl italic font-[600] self-right justify-self-end sm:-translate-y-[100%] absolute top-[50%] -translate-y-[50%] right-5">
            {Math.round(temperature)}&deg;
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainWeatherDashboard;
