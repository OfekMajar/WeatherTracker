import styles from "./ExtraWeatherInfo.module.css";

function ExtraWeatherInfoCard({ text, amount }) {
  return (
    <div>
      <div className={styles[""]}>precipitation</div>
      <div className={styles[""]}>0 mm</div>
    </div>
  );
}

export default ExtraWeatherInfoCard;
