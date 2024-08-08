import { useState, useContext, useEffect } from "react";
import WeatherForecastCard from "./WeatherForecastCard";
import styles from "./WeatherForecast.module.css";
import propTypes from "prop-types";
import { WeatherContext } from "../../../Context/Weather";

function WeatherForecast({ isCelsius }) {
  const { weather } = useContext(WeatherContext);
  const [next5Hours, setNext5Hours] = useState([]);

  useEffect(() => {
    if (!weather) return;

    const localtime = weather?.location?.localtime || "00:00";

    let currHour = new Date(localtime).getHours();
    const forecast = weather?.forecast?.forecastday;

    const newNext5Hours = [];
    if (forecast && forecast.length > 0 && forecast[0].hour) {
      for (let i = currHour; i < 24 && newNext5Hours.length < 5; i++) {
        newNext5Hours.push(forecast[0].hour[i]);
      }
    }

    // just in case it's after 20:00 and we need more data from the next day
    if (newNext5Hours.length < 5 && forecast.length > 1 && forecast[1].hour) {
      for (let i = 0; i < 24 && newNext5Hours.length < 5; i++) {
        newNext5Hours.push(forecast[1].hour[i]);
      }
    }

    setNext5Hours(newNext5Hours);
  }, [weather]);

  return (
    <div className={styles["weather-forecast-container"]}>
      {next5Hours.map((prediction, index) => (
        <WeatherForecastCard
          forecast={prediction}
          key={`forecast-${index}`}
          isCelsius={isCelsius}
        />
      ))}
    </div>
  );
}

WeatherForecast.propTypes = {
  isCelsius: propTypes.bool,
};

export default WeatherForecast;
