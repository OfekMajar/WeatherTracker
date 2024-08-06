import WeatherForecastCard from "./WeatherForecastCard";
import styles from "./WeatherForecast.module.css";

function WeatherForecast() {
  let forecast = [
    { time: "13:00", temperature: 19 },
    { time: "14:00", temperature: 21 },
    { time: "15:00", temperature: 23 },
    { time: "16:00", temperature: 20 },
    { time: "17:00", temperature: 16 },
  ];
  return (
    <div className={styles["weather-forecast-container"]}>
      {forecast.map((prediction) => {
        return (
          <WeatherForecastCard
            time={prediction.time}
            key={prediction.time}
            temp={prediction.temperature}
          />
        );
      })}
    </div>
  );
}

export default WeatherForecast;
