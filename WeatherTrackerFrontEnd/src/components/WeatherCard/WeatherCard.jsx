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
      <div className={`${styles["temp-scale"]} `} onClick={handleCelsiusSwitch}>
        {isCelsius ? "C" : "F"}
      </div>
    </div>
  );
}

export default WeatherCard;
