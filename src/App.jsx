import Applayout from "./components/Applayout";
import LoadingAppLayout from "./components/LoadingAppLayout.";
import { useSettings } from "./contexts/SettingsContext";
import { useGetWeatherData } from "./hooks/useGetWeatherData";

function App() {
  const { appWeatherData } = useSettings();
  const { isPending } = useGetWeatherData(null);
  if (isPending || !appWeatherData) return <LoadingAppLayout />;
  return <Applayout />;
}

export default App;
