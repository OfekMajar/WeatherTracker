import { useContext } from "react";
import styles from "./Temperature.module.css";
import propTypes from "prop-types";
import { WeatherContext } from "../../../Context/Weather";
function Temperature({ isCelsius }) {
  const { weather } = useContext(WeatherContext);
  const { current } = weather || {};

  const temp = isCelsius
    ? Math.round(current?.temp_c)
    : Math.round(current?.temp_f) || "Unknown";
  const condition = current?.condition?.text || "Unknown";
  const conditionIcon = current?.condition?.icon || null;

  return (
    <section className={styles["temperature-container"]}>
      <div className={styles["temperature-number-box"]}>
        <div className={styles["circle"]}></div>
        <div className={styles["temperature-number"]}>{temp}</div>
      </div>
      <div className={styles["temperature-state"]}>
        {conditionIcon ? <img src={conditionIcon} alt="" /> : null} {condition}
      </div>
    </section>
  );
}

Temperature.propTypes = {
  isCelsius: propTypes.bool,
};
export default Temperature;
