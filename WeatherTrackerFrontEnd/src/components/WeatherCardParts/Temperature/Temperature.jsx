import styles from "./Temperature.module.css";
import propTypes from "prop-types"
function Temperature({isCelsius}) {
  return (
    <section className={styles["temperature-container"]}>
      <div className={styles["temperature-number-box"]}>
        <div className={styles["circle"]}></div>
        <div className={styles["temperature-number"]}>18</div>
      </div>
      <div className={styles["temperature-state"]}>Sunny</div>
    </section>
  );
}

Temperature.propTypes = {
  isCelsius: propTypes.bool,
};
export default Temperature;
