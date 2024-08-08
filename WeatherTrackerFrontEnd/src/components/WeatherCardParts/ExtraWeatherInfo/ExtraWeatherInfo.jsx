import { useContext } from "react";
import styles from "./ExtraWeatherInfo.module.css";
import propTypes from "prop-types";
import { WeatherContext } from "../../../Context/Weather";

function ExtraWeatherInfo({ isCelsius }) {
  const { weather } = useContext(WeatherContext);
  const { current } = weather || {};

  const windSpeed = isCelsius
    ? current?.wind_kph
    : current?.wind_mph || "Unknown";
  const precipitation = isCelsius ? current?.precip_mm : current?.precip_in;
  const { humidity } = current || "Unknown";

  return (
    <div
      aria-label="Weather information"
      className={styles["extra-weather-info-container"]}>
      <div>
        <div
          className={styles["info-title"]}
          aria-label="Precipitation information">
          Precipitation
        </div>
        <div
          className={styles["info-amount"]}
          aria-label={`Precipitation: ${precipitation} ${
            isCelsius ? "mm" : "inches"
          }`}>
          {precipitation} {isCelsius ? "mm" : "in"}
        </div>
      </div>
      <div>
        <div className={styles["info-title"]} aria-label="Humidity information">
          Humidity
        </div>
        <div
          className={styles["info-amount"]}
          aria-label={`Humidity: ${humidity}%`}>
          {humidity}%
        </div>
      </div>
      <div>
        <div
          className={styles["info-title"]}
          aria-label="Wind speed information">
          Wind Speed
        </div>
        <div
          className={styles["info-amount"]}
          aria-label={`Wind Speed: ${windSpeed} ${isCelsius ? "km/h" : "m/h"}`}>
          {windSpeed} {isCelsius ? "km/h" : "m/h"}
        </div>
      </div>
    </div>
  );
}

ExtraWeatherInfo.propTypes = {
  isCelsius: propTypes.bool,
};

export default ExtraWeatherInfo;
