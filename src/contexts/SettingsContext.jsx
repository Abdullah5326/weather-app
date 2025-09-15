import { createContext, useCallback, useContext, useReducer } from "react";

const SettingsContext = createContext();

const initialState = {
  temperatureUnit: "C",
  windSpeedUnit: "km/h",
  precipitationUnit: "mm",
  appWeatherData: null,
  isCityWeatherData: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "settings/changeTempUnit":
      return {
        ...state,
        temperatureUnit: action.payload,
        appWeatherData: {
          ...state.appWeatherData,
          temperature:
            action.payload !== "C"
              ? (state.appWeatherData.temperature * 9) / 5 + 32
              : (state.appWeatherData.temperature - 32) * (5 / 9),
        },
      };
    case "settings/changeWindSpeedUnit":
      return {
        ...state,
        windSpeedUnit: action.payload,
        appWeatherData: {
          ...state.appWeatherData,
          windSpeed:
            action.payload !== "km/h"
              ? state.appWeatherData.windSpeed / (8 / 5)
              : state.appWeatherData.windSpeed * (8 / 5),
        },
      };
    case "settings/changePrecipitationUnit":
      return {
        ...state,
        precipitationUnit: action.payload,
        appWeatherData: {
          ...state.appWeatherData,
          precipitation:
            state.precipitationUnit !== "mm"
              ? state.appWeatherData.precipitation / 25.5
              : state.appWeatherData.precipitation * 25.5,
        },
      };
    case "settings/addAppWeatherData":
      return {
        ...state,
        appWeatherData: action.payload,
      };
    default:
      throw new Error("There is an unknown error in setting context.");
  }
}

function SettingsProvider({ children }) {
  const [
    { temperatureUnit, windSpeedUnit, precipitationUnit, appWeatherData },
    dispatch,
  ] = useReducer(reducer, initialState);
  function changeTempUnit(unit) {
    dispatch({ type: "settings/changeTempUnit", payload: unit });
  }

  function changeWindSpeedUnit(unit) {
    dispatch({ type: "settings/changeWindSpeedUnit", payload: unit });
  }

  function changePrecipitationUnit(unit) {
    dispatch({ type: "settings/changePrecipitationUnit", payload: unit });
  }

  const addAppWeatherData = useCallback(
    (data) => {
      dispatch({ type: "settings/addAppWeatherData", payload: data });
    },
    [dispatch] // dispatch is guaranteed to be stable by useReducer
  );

  return (
    <SettingsContext.Provider
      value={{
        temperatureUnit,
        windSpeedUnit,
        precipitationUnit,
        appWeatherData,
        changeTempUnit,
        changeWindSpeedUnit,
        changePrecipitationUnit,
        addAppWeatherData,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) console.log("There is error in setting context.");
  return context;
}

export { SettingsProvider, useSettings };
