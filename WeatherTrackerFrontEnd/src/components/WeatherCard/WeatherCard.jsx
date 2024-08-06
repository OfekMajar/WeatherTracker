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
      <div>
        <Temperature isCelsius={isCelsius} />
      </div>
      <div>
        <ExtraWeatherInfo isCelsius={isCelsius} />
      </div>
      <div>
        <WeatherForecast isCelsius={isCelsius} />
      </div>
      <div className={`${styles["temp-scale"]} `} onClick={handleCelsiusSwitch}>
        {isCelsius ? "C" : "F"}
      </div>
    </div>
  );
}

export default WeatherCard;
