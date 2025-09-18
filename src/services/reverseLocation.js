import { isApiError } from "../utils/helpers";

const API_KEY = "1c7acf7133529f88a419b54f57a9b0e4";
const url = "https://api.openweathermap.org/geo/1.0/";

export async function getCurrentCoords() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        return resolve({ lat, lng });
      },
      (error) => {
        reject(console.log("There is an error"));
      }
    );
  });
}

export async function getLocationByCoords(coords) {
  try {
    const res = await fetch(
      `${url}reverse?lat=${coords.lat}&lon=${
        coords.lng
      }&limit=${1}&appid=${API_KEY}`
    );
    isApiError(res);
    const data = await res.json();
    return data;
  } catch {
    throw new Error("There is an error in get location by coords");
  }
}

export async function getCoordsByLocation(cityName) {
  try {
    const res = await fetch(`${url}direct?q=${cityName}&appid=${API_KEY}`);
    isApiError(res);
    const data = await res.json();
    return data;
  } catch {
    console.log("yes it comes");
    throw new Error("There is an error in getCoordsByLocation");
  }
}
