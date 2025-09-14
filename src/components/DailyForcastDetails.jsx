import { useSettings } from "../contexts/SettingsContext";
import WeeklyForcastBox from "./WeeklyForcastBox";

function DailyForcastDetails() {
  const { appWeatherData } = useSettings();
  const { temperatureMax, temperatureMin, daysTime, weeklyWeatherCodes } =
    appWeatherData;
  return (
    <div className="mb-8 sm:mb-0">
      <p className="mb-2 font-semibold">Daily forecast</p>
      <ul className="flex gap-2  flex-wrap">
        {daysTime.map((date, i) => (
          <WeeklyForcastBox
            date={date}
            maxTemp={temperatureMax[i]}
            minTemp={temperatureMin[i]}
            weatherCode={weeklyWeatherCodes[i]}
            key={date.getDate()}
          />
        ))}
      </ul>
    </div>
  );
}

export default DailyForcastDetails;
