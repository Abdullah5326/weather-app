import { HiCheck } from "react-icons/hi";
import { useSettings } from "../contexts/SettingsContext";

function SettingsTemprature() {
  const { temperatureUnit, changeTempUnit } = useSettings();
  return (
    <div className="border-b border-neutral-600 pb-3 mb-2">
      <p className="text-xs text-neutral-500 my-2 pl-2">Temprature</p>
      <ul className="space-y-2 text-sm font-semibold">
        <li
          className={`${
            temperatureUnit === "C" ? "w-full bg-neutral-600 rounded-lg" : ""
          } flex justify-between items-center px-2`}
          onClick={() => {
            if (temperatureUnit === "F") changeTempUnit("C");
            if (temperatureUnit === "C") changeTempUnit("F");
          }}
        >
          <button
            className={`${
              temperatureUnit === "C"
                ? "w-full py-1 text-sm rounded-lg font-semibold text-left"
                : ""
            }`}
          >
            Celsius (&deg;C)
          </button>
          {temperatureUnit === "C" && (
            <span>
              <HiCheck className="h-4 w-4" />
            </span>
          )}
        </li>
        <li
          className={`${
            temperatureUnit === "F" ? "w-full bg-neutral-600 rounded-lg" : ""
          } flex justify-between items-center px-2`}
          onClick={() => {
            if (temperatureUnit === "C") changeTempUnit("F");
            if (temperatureUnit === "F") changeTempUnit("C");
          }}
        >
          <button
            className={`${
              temperatureUnit === "F"
                ? "w-full py-1 text-sm rounded-lg font-semibold text-left"
                : ""
            }`}
          >
            Fahrenheit (&deg;F)
          </button>
          {temperatureUnit === "F" && (
            <span>
              <HiCheck className="h-4 w-4" />
            </span>
          )}
        </li>
      </ul>
    </div>
  );
}

export default SettingsTemprature;
