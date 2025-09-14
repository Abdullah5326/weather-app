import Applayout from "./components/Applayout";
import { useSettings } from "./contexts/SettingsContext";
import { useGetWeatherData } from "./hooks/useGetWeatherData";

function App() {
  const { appWeatherData } = useSettings();
  const { isPending } = useGetWeatherData(null);
  if (isPending || !appWeatherData) return <p>Loading..</p>;
  return <Applayout />;
}

export default App;
