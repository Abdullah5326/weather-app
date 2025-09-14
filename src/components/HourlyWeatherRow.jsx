import { findWeatherIcon } from "../services/findWeatherIcon";

function HourlyWeatherRow({ date, temp, weatherCode }) {
  const weatherIcon = findWeatherIcon(weatherCode);
  return (
    <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600">
      <div className="flex gap-1 items-center">
        <img
          src={`icon-${weatherIcon}.webp`}
          alt="cloud drizzle"
          className="w-8 h-8"
        />
        <span className="font-semibold text-md">
          {date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}{" "}
          {date.getHours() > 12 ? "PM" : "AM"}
        </span>
      </div>
      <p className="text-xs font-bold">{Math.round(temp)}&deg;</p>
    </li>
  );
}

export default HourlyWeatherRow;
