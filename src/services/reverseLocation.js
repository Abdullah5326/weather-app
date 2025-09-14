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

export async function getLocationByCoords() {
  const coords = await getCurrentCoords();
  const res = await fetch(
    `${url}reverse?lat=${coords.lat}&lon=${
      coords.lng
    }&limit=${1}&appid=${API_KEY}`
  );
  const data = await res.json();
  return data;
}

export async function getCoordsByLocation(cityName) {
  const res = await fetch(`${url}direct?q=${cityName}&appid=${API_KEY}`);
  const data = await res.json();
  return data;
}
