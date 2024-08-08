import { useContext } from "react";
import styles from "./CityAndCountry.module.css";
import { WeatherContext } from "../../../Context/Weather";
import formatDateTime from "../../../utils/dateFormater";
function CityAndCountry() {
  const { weather } = useContext(WeatherContext);
  const { country, localtime, name } = weather?.location
    ? weather.location
    : "unknown";

  const date = formatDateTime(localtime);
  return (
    <section
      className={styles["city-and-country-box"]}
      aria-label="City and country information">
      <p className={styles["city-name"]} aria-label={`City name: ${name}`}>
        {name}
      </p>
      <p className={styles["country-name"]} aria-label={`Country: ${country}`}>
        {country}
      </p>
      <p className={styles["weather-date"]} aria-label={`Local time: ${date}`}>
        {date}
      </p>
    </section>
  );
}

export default CityAndCountry;
