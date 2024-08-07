import WeatherForecastCard from "./WeatherForecastCard";
import styles from "./WeatherForecast.module.css";
import propTypes from "prop-types";
import { useContext } from "react";
import { WeatherContext } from "../../../Context/Weather";

function WeatherForecast({ isCelsius }) {
  const { weather } = useContext(WeatherContext);
  const localtime = weather?.location?.localtime;
  let currHour = new Date(localtime).getHours();
  const forecast = weather?.forecast?.forecastday;

  const next5Hours = [];

  for (let i = currHour; i < 24 && next5Hours.length < 5; i++) {
    next5Hours.push(forecast[0].hour[i]);
  }

  // just incase its after 20:00 and we need more data from the next day
  if (next5Hours.length < 5) {
    for (let i = 0; i < 24 && next5Hours.length < 5; i++) {
      next5Hours.push(forecast[1].hour[i]);
    }
  }

  console.log(next5Hours);

  return (
    <div className={styles["weather-forecast-container"]}>
      {next5Hours.map((prediction, index) => {
        return (
          <WeatherForecastCard
            forecast={prediction}
            key={`forecast-${index}`}
            isCelsius={isCelsius}
          />
        );
      })}
    </div>
  );
}
WeatherForecast.propTypes = {
  isCelsius: propTypes.bool,
};
export default WeatherForecast;
