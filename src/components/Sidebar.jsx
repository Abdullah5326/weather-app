import { useSettings } from "../contexts/SettingsContext";
import HourlyWeatherRow from "./HourlyWeatherRow";
import SidebarHeader from "./SidebarHeader";

function Sidebar() {
  const { appWeatherData } = useSettings();
  const { hours, hourTemperatures, hourlyWeatherCodes } = appWeatherData;
  const hours24 = hours?.slice(0, 24);
  const hour24Temperatures = hourTemperatures?.slice(0, 24);

  return (
    <aside className="px-4 pt-4 mt-10 md:mt-0  bg-neutral-800 relative rounded-xl md:self-start border-b-5 border-neutral-800 ">
      <SidebarHeader />
      <ul className="space-y-2 overflow-auto h-105 border-b-20 border-neutral-800 ">
        {hours24.map((date, i) => (
          <HourlyWeatherRow
            date={new Date(date)}
            temp={hour24Temperatures[i]}
            weatherCode={hourlyWeatherCodes[i]}
            key={new Date(date).getHours()}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
