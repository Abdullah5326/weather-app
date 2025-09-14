import { useState } from "react";
import { getCoordsByLocation } from "../services/reverseLocation";
import { useSettings } from "../contexts/SettingsContext";

function SearchForm() {
  const [searchCity, setSearchCity] = useState("");
  const [coords, setCoords] = useState(null);
  const { addAppWeatherData } = useSettings();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!searchCity) return;
    const coords = await getCoordsByLocation(searchCity);
    const { lat, lon: lng } = coords[0];
    setCoords({ lat, lng });
    console.log(lat, lng);
  }
  return (
    <form className="flex flex-col sm:flex-row sm:justify-center gap-4 w-full items-center ">
      <div className="relative max-w-100  w-full h-10 ">
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
        className="bg-blue-500 px-4 max-w-100 sm:max-w-20 w-full rounded-md py-2 focus:ring-2  focus:ring-blue-700 cursor-pointer hover:bg-blue-700 transition-all duration-300"
        onClick={handleSubmit}
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;

// Enter name of the location
// take the location and search its coords
// enter the coords in weather api and put in update the context context
