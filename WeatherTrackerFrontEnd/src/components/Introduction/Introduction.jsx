import { useContext } from "react";
import LatAndLong from "../LatAndLong/LatAndLong";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Introduction.module.css";
import { WeatherContext } from "../../Context/Weather";
function Introduction() {
  const { weather } = useContext(WeatherContext);
  return (
    <div className={styles["introduction-container"]}>
      <div className={styles["user-introduction-card"]}>
        <div className={styles["welcome-text"]}>
          Use our weather app to see the weather around the world
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      {weather ? <LatAndLong /> : null}
    </div>
  );
}

export default Introduction;
