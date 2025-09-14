import { HiCheck } from "react-icons/hi";
import { useSettings } from "../contexts/SettingsContext";

function SettingSwitchImperial() {
  const {
    windSpeedUnit,
    temperatureUnit,
    precipitationUnit,
    changeWindSpeedUnit,
    changeTempUnit,
    changePrecipitationUnit,
  } = useSettings();
  function handleImperialClick() {
    if (
      windSpeedUnit === "km/h" ||
      temperatureUnit === "C" ||
      precipitationUnit === "mm"
    ) {
      if (precipitationUnit === "mm") changePrecipitationUnit("in");
      if (temperatureUnit === "C") changeTempUnit("F");
      if (windSpeedUnit === "km/h") changeWindSpeedUnit("mph");
    } else {
      if (precipitationUnit === "in") changePrecipitationUnit("mm");
      if (temperatureUnit === "F") changeTempUnit("C");
      if (windSpeedUnit === "mph") changeWindSpeedUnit("km/h");
    }
  }

  return (
    <div
      className={`w-full  ${
        windSpeedUnit === "mph" &&
        temperatureUnit === "F" &&
        precipitationUnit === "in"
          ? "bg-neutral-600"
          : "bg-transparent"
      } rounded-lg`}
    >
      <button
        className="focus:ring focus:ring-neutral-0 w-full py-1 text-sm rounded-lg font-semibold text-left px-2 cursor-pointer flex gap-1 items-center justify-between"
        onClick={handleImperialClick}
      >
        Switch to imperial
        {windSpeedUnit === "mph" &&
          temperatureUnit === "F" &&
          precipitationUnit === "in" && <HiCheck className="w-4 h-4" />}
      </button>
    </div>
  );
}

export default SettingSwitchImperial;
