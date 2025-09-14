import { useState } from "react";
import AppSettings from "./AppSettings";
import Button from "./Button";

function AppNav() {
  const [showSettings, setShowSettings] = useState(false);

  function handleClose(isShow) {
    setShowSettings(isShow);
  }

  return (
    <nav className="col-span-2 sm:px-4">
      <ul className="flex justify-between pb-2 items-center h-full ">
        <li className="text-stone-50 text-lg font-semibold">
          <img src="logo.svg" alt="logo" className="w-30 sm:w-48" />
        </li>
        <li className="relative">
          {!showSettings && (
            <Button
              onClick={(e) => {
                if (!showSettings) handleClose(true);
              }}
            >
              <img src="icon-units.svg" alt="Units icon" /> Units
              <img src="icon-dropdown.svg" alt="dropdown icon" />
            </Button>
          )}
          {showSettings && (
            <button
              className="py-2 px-4 flex gap-2 bg-neutral-800 rounded-md cursor-pointer ring-neutral-200 ring"
              onClick={(e) => {
                if (!showSettings) handleClose(false);
              }}
            >
              <img src="icon-units.svg" alt="Units icon" /> Units
              <img src="icon-dropdown.svg" alt="dropdown icon" />
            </button>
          )}
          {showSettings && <AppSettings onClose={handleClose} />}
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
