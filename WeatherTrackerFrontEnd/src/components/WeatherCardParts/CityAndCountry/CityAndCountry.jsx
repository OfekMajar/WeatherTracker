import styles from "./CityAndCountry.module.css";
function CityAndCountry() {
  return (
    <section className={styles["city-and-country-box"]}>
      <p className={styles["city-name"]}>Tel aviv</p>
      <p className={styles["country-name"]}>Israel</p>
      <p className={styles["weather-date"]}>13/2/22 at 16:00</p>
    </section>
  );
}

export default CityAndCountry;
