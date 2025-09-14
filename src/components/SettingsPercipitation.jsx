import { HiCheck } from "react-icons/hi";
import { useSettings } from "../contexts/SettingsContext";

function SettingsPercipitation() {
  const { precipitationUnit, changePrecipitationUnit } = useSettings();

  function handleChangePrecipitationUnit() {
    precipitationUnit === "mm"
      ? changePrecipitationUnit("in")
      : changePrecipitationUnit("mm");
  }

  return (
    <div className=" border-b border-neutral-600 pb-3 mb-2">
      <p className="text-xs text-neutral-500 my-2 pl-2">Precipitation</p>
      <ul className="space-y-2 text-sm font-semibold">
        <li
          className={`${
            precipitationUnit === "mm" ? "w-full bg-neutral-600 rounded-lg" : ""
          } flex justify-between items-center px-2`}
          onClick={handleChangePrecipitationUnit}
        >
          <button
            className={`${
              precipitationUnit === "mm"
                ? "w-full py-1 text-sm rounded-lg font-semibold text-left"
                : ""
            }`}
          >
            Millimeters (mm)
          </button>
          {precipitationUnit === "mm" && (
            <span>
              <HiCheck className="h-4 w-4" />
            </span>
          )}
        </li>
        <li
          className={`${
            precipitationUnit === "in" ? "w-full bg-neutral-600 rounded-lg" : ""
          } flex justify-between items-center px-2`}
          onClick={handleChangePrecipitationUnit}
        >
          <button
            className={`${
              precipitationUnit === "in"
                ? "w-full py-1 text-sm rounded-lg font-semibold text-left"
                : ""
            }`}
          >
            Inches (In)
          </button>
          {precipitationUnit === "in" && (
            <span>
              <HiCheck className="h-4 w-4" />
            </span>
          )}
        </li>
      </ul>
    </div>
  );
}

export default SettingsPercipitation;
