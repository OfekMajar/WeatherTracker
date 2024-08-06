import { useContext } from "react";
import styles from "./CityAndCountry.module.css";
import { WeatherContext } from "../../../Context/Weather";
import formatDateTime from "../../../utils/dateFormater";
function CityAndCountry() {
  const { weather } = useContext(WeatherContext);
  const { county, localtime, region } = weather?.location
    ? weather.location
    : "unknown";
    console.log(weather?.location);
    
  const date = formatDateTime(localtime);
  return (
    <section className={styles["city-and-country-box"]}>
      <p className={styles["city-name"]}>{region}</p>
      <p className={styles["country-name"]}>{county}</p>
      <p className={styles["weather-date"]}>{date}</p>
    </section>
  );
}

export default CityAndCountry;
