import styles from "./WeatherForecast.module.css";
import propTypes from "prop-types";

function WeatherForecastCard({ time, temp }) {
  return (
    <div className={styles["weather-forecast-card"]}>
      <div className={styles["weather-forecast-time"]}>{time}</div>
      <div className={styles["temperature-number-box"]}>
        <div className={styles["circle"]}></div>
        <div className={styles["temperature-number"]}>{temp}</div>
      </div>
    </div>
  );
}

WeatherForecastCard.propTypes = {
  time: propTypes.string,
  temp: propTypes.number || propTypes.string,
};
export default WeatherForecastCard;
