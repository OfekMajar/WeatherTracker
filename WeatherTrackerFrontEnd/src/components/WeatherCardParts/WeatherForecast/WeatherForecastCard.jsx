import styles from "./WeatherForecast.module.css";
import propTypes from "prop-types";

function WeatherForecastCard({ forecast, isCelsius }) {
  const hour = new Date(forecast?.time).getHours();
  const temp = Math.round(isCelsius ? forecast.temp_c : forecast.temp_f);

  return (
    <div
      className={styles["weather-forecast-card"]}
      aria-label={`Forecast at ${hour}:00 - Temperature ${temp} ${
        isCelsius ? "°C" : "°F"
      }`}>
      <div className={styles["weather-forecast-time"]}>{hour}:00</div>
      <div className={styles["temperature-number-box"]}>
        <div className={styles["circle"]} aria-hidden="true"></div>
        <div className={styles["temperature-number"]}>{temp}</div>
      </div>
    </div>
  );
}

WeatherForecastCard.propTypes = {
  forecast: propTypes.object,
  isCelsius: propTypes.bool,
};

export default WeatherForecastCard;
