import { useState } from "react";
import { getCoordsByLocation } from "../services/reverseLocation";
import { useSettings } from "../contexts/SettingsContext";
import { getForcast } from "../services/forcast";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const [searchCity, setSearchCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { addAppWeatherData, appWeatherData } = useSettings();
  const { cityName } = appWeatherData;
  const navigate = useNavigate();

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      if (!searchCity) return;
      setIsLoading(true);
      setSearchCity("");
      navigate("/");

      const coordsPromise = getCoordsByLocation(searchCity);
      const newPomise = new Promise((_, reject) => {
        setTimeout(
          () => reject(new Error("Your internet connection is to slow!")),
          10000
        );
      });
      const coords = await Promise.race([newPomise, coordsPromise]);

      const { lat, lon: lng } = coords[0];
      const data = await getForcast({ lat, lng });
      addAppWeatherData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
      navigate("/noSearchResults");
    }
  }
  return (
    <div className="max-w-130 flex flex-col gap-3  w-full relative">
      <form className="flex flex-col sm:flex-row sm:justify-center gap-4 w-full items-center ">
        <div className="relative max-w-150  w-full h-10 ">
          <input
            type="search"
            placeholder="Search for place..."
            className="bg-neutral-800 rounded-md py-3 sm:py-1 pr-2 w-full  h-full pl-12 font-semibold placeholder:text-stone-300 text-md cursor-pointer"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
          <img
            src="icon-search.svg"
            alt="Search icon"
            className="absolute top-[50%] -translate-y-[50%]
        left-3 sm:left-5 h-4 w-4"
          />
        </div>
        <button
          className="bg-blue-500 px-4 max-w-150 sm:max-w-20 w-full rounded-md py-2 focus:ring-2  focus:ring-blue-700 cursor-pointer hover:bg-blue-700 transition-all duration-300"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
      {isLoading && (
        <div className="bg-neutral-800 max-w-106 rounded-md  w-full h-10 absolute top-13 z-1 px-4 flex items-center gap-2">
          <div className="spinner"></div>
          <span className="text-sm font-semibold">Search in progress</span>
        </div>
      )}
    </div>
  );
}

export default SearchForm;

// Enter name of the location
// take the location and search its coords
// enter the coords in weather api and put in update the context context
