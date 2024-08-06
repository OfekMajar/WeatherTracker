import styles from "./ExtraWeatherInfo.module.css";
import propTypes from "prop-types";

function ExtraWeatherInfo() {
  return (
    <div className={styles["extra-weather-info-container"]}>
      <div>
        <div className={styles["info-title"]}>precipitation</div>
        <div className={styles["info-amount"]}>0 mm</div>
      </div>
      <div>
        <div className={styles["info-title"]}>humidity</div>
        <div className={styles["info-amount"]}>50%</div>
      </div>
      <div>
        <div className={styles["info-title"]}>wind</div>
        <div className={styles["info-amount"]}>0 km/h</div>
      </div>
    </div>
  );
}
ExtraWeatherInfo.propTypes = {
  isCelsius: propTypes.bool,
};
export default ExtraWeatherInfo;
