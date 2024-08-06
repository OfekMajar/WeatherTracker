import styles from "./Temperature.module.css";
function Temperature() {
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

export default Temperature;
