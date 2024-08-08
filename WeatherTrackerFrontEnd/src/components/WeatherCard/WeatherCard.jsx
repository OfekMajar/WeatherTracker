import { useState } from "react";
import CityAndCountry from "../WeatherCardParts/CityAndCountry/CityAndCountry";
import ExtraWeatherInfo from "../WeatherCardParts/ExtraWeatherInfo/ExtraWeatherInfo";
import Temperature from "../WeatherCardParts/Temperature/Temperature";
import WeatherForecast from "../WeatherCardParts/WeatherForecast/WeatherForecast";
import styles from "./WeatherCard.module.css";
function WeatherCard() {
  const [isCelsius, setIsCelsius] = useState(true);
  const handleCelsiusSwitch = () => {
    setIsCelsius(!isCelsius);
  };
  return (
    <div className={styles["weather-card-container"]}>
      <CityAndCountry />
      <Temperature isCelsius={isCelsius} />
      <ExtraWeatherInfo isCelsius={isCelsius} />
      <WeatherForecast isCelsius={isCelsius} />
      <button
        className={styles["temp-scale"]}
        onClick={handleCelsiusSwitch}
        role="button"
        aria-pressed={!isCelsius}
        aria-label={`Switch to ${isCelsius ? "Fahrenheit" : "Celsius"}`}>
        {isCelsius ? "C°" : "F°"}
      </button>
    </div>
  );
}

export default WeatherCard;
