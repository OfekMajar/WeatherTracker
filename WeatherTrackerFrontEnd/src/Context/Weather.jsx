import { createContext, useState } from "react";
import propTypes from "prop-types";

export const WeatherContext = createContext({});

export default function WeatherProvider({ children }) {
  const [weather, setWeather] = useState();

  const shared = { weather, setWeather };
  return (
    <WeatherContext.Provider value={shared}>{children}</WeatherContext.Provider>
  );
}

WeatherProvider.propTypes = {
  children: propTypes.node,
};
