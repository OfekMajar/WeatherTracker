import CityAndCountry from "../WeatherCardParts/CityAndCountry/CityAndCountry";
import ExtraWeatherInfo from "../WeatherCardParts/ExtraWeatherInfo/ExtraWeatherInfo";
import Temperature from "../WeatherCardParts/Temperature/Temperature";
import WeatherForecast from "../WeatherCardParts/WeatherForecast/WeatherForecast";
import styles from "./WeatherCard.module.css";
function WeatherCard() {
  return (
    <div className={styles["weather-card-container"]}>
      <CityAndCountry />
      <div>
        <Temperature />
      </div>
      <div>
        <ExtraWeatherInfo />
      </div>
      <div>
        <WeatherForecast />
      </div>
    </div>
  );
}

export default WeatherCard;
