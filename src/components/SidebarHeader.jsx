import DaySelectInput from "./DaySelectInput";

function SidebarHeader() {
  return (
    <header className="flex justify-between items-center mb-4">
      <h3 className="font-semibold">Hourly forcast</h3>
      <DaySelectInput />
    </header>
  );
}

export default SidebarHeader;
