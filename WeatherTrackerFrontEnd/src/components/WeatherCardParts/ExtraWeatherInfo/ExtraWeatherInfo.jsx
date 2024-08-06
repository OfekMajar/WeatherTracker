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
  const precipitation = isCelsius
    ? current?.precip_mm
    : current?.precip_in || "Unknown";
  const { humidity } = current || "Unknown";
  return (
    <div className={styles["extra-weather-info-container"]}>
      <div>
        <div className={styles["info-title"]}>precipitation</div>
        <div className={styles["info-amount"]}>
          {precipitation} {isCelsius ? "mm" : "In"}
        </div>
      </div>
      <div>
        <div className={styles["info-title"]}>humidity</div>
        <div className={styles["info-amount"]}>{humidity}%</div>
      </div>
      <div>
        <div className={styles["info-title"]}>wind</div>
        <div className={styles["info-amount"]}>
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
