import AppNav from "./AppNav";
import Header from "./Header";
import Sidebar from "./Sidebar";
import WeatherDashboard from "./WeatherDashboard";

function Applayout() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[1fr_0.5fr] min-h-screen md:gap-x-5 md:grid-rows-[auto_auto_1fr] bg-neutral-900 text-stone-50 max-w-[1200px] my-0 mx-auto px-5 md:15 lg:px-25 pt-8 pb-10 md:pb-20  sm">
      <AppNav />
      <Header />
      <WeatherDashboard />
      <Sidebar />
    </div>
  );
}

export default Applayout;
