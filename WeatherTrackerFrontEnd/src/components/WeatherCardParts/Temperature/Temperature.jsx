import { useContext, useState } from "react";
import styles from "./Temperature.module.css";
import propTypes from "prop-types";
import { WeatherContext } from "../../../Context/Weather";

function Temperature({ isCelsius }) {
  const { weather } = useContext(WeatherContext);
  const { current } = weather || {};
  const [imageError, setImageError] = useState(false);

  const temp = isCelsius
    ? Math.round(current?.temp_c)
    : Math.round(current?.temp_f) || "Unknown";
  const condition = current?.condition?.text || "Unknown";
  const conditionIcon = current?.condition?.icon || null;

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className={styles["temperature-container"]}>
      <div className={styles["temperature-number-box"]}>
        <div className={styles["circle"]} aria-hidden="true"></div>
        <div
          className={styles["temperature-number"]}
          aria-label={`City's temperature in ${
            isCelsius ? "celsius" : "fahrenheit "
          }`}>
          {temp}
        </div>
      </div>
      <div
        className={styles["temperature-state"]}
        aria-label={`The weather condition is ${condition}`}>
        {conditionIcon && !imageError ? (
          <img src={conditionIcon} alt="" onError={handleImageError} />
        ) : null}{" "}
        {condition}
      </div>
    </section>
  );
}

Temperature.propTypes = {
  isCelsius: propTypes.bool,
};

export default Temperature;
