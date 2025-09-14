export function findWeatherIcon(weatherCode) {
  let weatherIcon;
  switch (weatherCode) {
    case 51 || 53 || 55 || 56 || 57:
      weatherIcon = "drizzle";
      break;
    case 45 || 48:
      weatherIcon = "fog";
      break;
    case 3:
      weatherIcon = "overcast";
      break;
    case 2:
      weatherIcon = "partly-cloudy";
      break;
    case 61 || 63 || 65 || 66 || 67 || 80 || 81 || 82:
      weatherIcon = "rain";
      break;
    case 71 || 73 || 75 || 77 || 85 || 86:
      weatherIcon = "snow";
      break;
    case 95 || 96 || 99:
      weatherIcon = "storm";
      break;
    case 0 || 1:
      weatherIcon = "sunny";
      break;
    default:
      weatherIcon = "overcast";
  }
  return weatherIcon;
}
