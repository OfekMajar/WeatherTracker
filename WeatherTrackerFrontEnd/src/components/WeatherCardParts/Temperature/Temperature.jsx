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
        <div className={styles["circle"]}></div>
        <div className={styles["temperature-number"]}>{temp}</div>
      </div>
      <div className={styles["temperature-state"]}>
        {conditionIcon && !imageError ? (
          <img src={conditionIcon} onError={handleImageError} />
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
