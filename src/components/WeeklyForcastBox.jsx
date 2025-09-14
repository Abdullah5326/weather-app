import { findWeatherIcon } from "../services/findWeatherIcon";

function WeeklyForcastBox({ date, maxTemp, minTemp, weatherCode }) {
  const dayName = date.toLocaleDateString(navigator.language, {
    weekday: "short",
  });
  const weatherIcon = findWeatherIcon(weatherCode);
  return (
    <li className=" bg-neutral-700 border border-neutral-600 p-2 rounded-md text-xs flex flex-col gap-2 items-center font-bold">
      <p>{dayName}</p>
      <img
        src={`icon-${weatherIcon}.webp`}
        alt="cloud drazzling"
        className="w-13"
      />
      <p className="space-x-6">
        <span>{Math.round(maxTemp)}&deg; </span>
        <span>{Math.round(minTemp)}&deg; </span>
      </p>
    </li>
  );
}

export default WeeklyForcastBox;
