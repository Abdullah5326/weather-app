import { HiCheck } from "react-icons/hi";
import { useSettings } from "../contexts/SettingsContext";

function SettingsWindSpeed() {
  const { windSpeedUnit, changeWindSpeedUnit } = useSettings();

  function handleChangeWindSpeedUnit() {
    windSpeedUnit === "km/h"
      ? changeWindSpeedUnit("mph")
      : changeWindSpeedUnit("km/h");
  }

  return (
    <div className="border-b border-neutral-600 pb-3 mb-2">
      <p className="text-xs text-neutral-500 my-2 pl-2">Wind Speed</p>
      <ul className="space-y-2 text-sm font-semibold">
        <li
          className={`${
            windSpeedUnit === "km/h" ? "w-full bg-neutral-600 rounded-lg" : ""
          } flex justify-between items-center px-2`}
          onClick={handleChangeWindSpeedUnit}
        >
          <button
            className={`${
              windSpeedUnit === "km/h"
                ? "w-full py-1 text-sm rounded-lg font-semibold text-left"
                : ""
            }`}
          >
            km/h
          </button>
          {windSpeedUnit === "km/h" && (
            <span>
              <HiCheck className="h-4 w-4" />
            </span>
          )}
        </li>
        <li
          className={`${
            windSpeedUnit === "mph" ? "w-full bg-neutral-600 rounded-lg" : ""
          } flex justify-between items-center px-2`}
          onClick={handleChangeWindSpeedUnit}
        >
          <button
            className={`${
              windSpeedUnit === "mph"
                ? "w-full py-1 text-sm rounded-lg font-semibold text-left"
                : ""
            }`}
          >
            mph
          </button>
          {windSpeedUnit === "mph" && (
            <span>
              <HiCheck className="h-4 w-4" />
            </span>
          )}
        </li>
      </ul>
    </div>
  );
}

export default SettingsWindSpeed;
