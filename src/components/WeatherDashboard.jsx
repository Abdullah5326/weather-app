import DailyForcastDetails from "./DailyForcastDetails";
import MainWeatherDashboard from "./MainWeatherDashboard";
import SecondryWeatherDashboards from "./SecondryWeatherDashboards";

function WeatherDashboard() {
  return (
    <main className="space-y-4 flex flex-col justify-center">
      <MainWeatherDashboard />
      <SecondryWeatherDashboards />
      <DailyForcastDetails />
    </main>
  );
}

export default WeatherDashboard;
