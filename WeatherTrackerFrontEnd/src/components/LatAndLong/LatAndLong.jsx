import { useContext } from "react";
import styles from "./LatAndLong.module.css";
import { WeatherContext } from "../../Context/Weather";
import formatDateTime from "../../utils/dateFormater";

function LatAndLong() {
  const { weather } = useContext(WeatherContext);

  const lon = weather?.location?.lon || "not provided yet";
  const lat = weather?.location?.lat || "not provided yet";
  const lastUpdated = weather?.current?.last_updated
    ? formatDateTime(weather?.current?.last_updated)
    : "not updated";

  return (
    <div className={styles["lat-and-long-container"]}>
      <div className={styles["lat-and-long-data-container"]}>
        <div>latitude: {lat}</div>
        <div>longitude: {lon}</div>
      </div>
      <div className={styles["last-updated-timestamp"]}>
        accurate to {lastUpdated}
      </div>
    </div>
  );
}

export default LatAndLong;
