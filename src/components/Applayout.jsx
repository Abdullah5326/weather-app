import AppNav from "./AppNav";
import Header from "./Header";
import Sidebar from "./Sidebar";
import WeatherDashboard from "./WeatherDashboard";
import LoadingAppLayout from "./LoadingAppLayout.";
import { useSettings } from "../contexts/SettingsContext";
import { useGetWeatherData } from "../hooks/useGetWeatherData";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Applayout() {
  const navigate = useNavigate();
  const { appWeatherData } = useSettings();
  const { isPending, forcastError } = useGetWeatherData(null);
  useEffect(
    function () {
      if (forcastError) navigate("/errorPage");
    },
    [forcastError, navigate]
  );
  if (isPending || !appWeatherData) return <LoadingAppLayout />;
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
