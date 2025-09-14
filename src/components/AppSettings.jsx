import { useRef } from "react";

import SettingsTemprature from "./SettingsTemprature";
import SettingsWindSpeed from "./SettingsWindSpeed";
import SettingsPercipitation from "./SettingsPercipitation";
import SettingSwitchImperial from "./SettingSwitchImperial";
import { useDetectOutsideClick } from "../hooks/useDetectOutsideClick";

function AppSettings({ onClose }) {
  const ref = useRef(null);

  useDetectOutsideClick(ref, onClose);
  return (
    <div
      className="absolute w-45 bg-neutral-800 z-1 top-12 right-0 rounded-lg px-1 pt-1 border border-neutral-700 flex flex-col text-stone-300 animate-show transition-all duration-300"
      ref={ref}
    >
      <SettingSwitchImperial />
      <SettingsTemprature />
      <SettingsWindSpeed />
      <SettingsPercipitation />
    </div>
  );
}

export default AppSettings;
