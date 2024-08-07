import { createContext, useState } from "react";
import propTypes from "prop-types";
import axios from "axios";
import { baseUrl } from "../utils/backEndUtils";

export const WeatherContext = createContext({});

export default function WeatherProvider({ children }) {
  const [weather, setWeather] = useState(null);

  const fetchWeatherByCoordinates = async (latitude, longitude) => {
    try {
      const res = await axios.get(`${baseUrl}/weather/coordinates`, {
        params: { lat: latitude, lon: longitude },
      });
      const { data } = res;
      if (res.status === 200 && data.status !== 400) {
        setWeather(data);
      } else {
        console.error("Error fetching weather data:", data.message);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  const shared = { weather, setWeather, fetchWeatherByCoordinates };
  return (
    <WeatherContext.Provider value={shared}>{children}</WeatherContext.Provider>
  );
}

WeatherProvider.propTypes = {
  children: propTypes.node,
};
