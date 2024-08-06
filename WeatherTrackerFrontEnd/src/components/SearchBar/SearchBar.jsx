import { useContext, useState } from "react";
import { baseUrl } from "../../utils/backEndUtils";
import styles from "./SearchBar.module.css";
import axios from "axios";
import { WeatherContext } from "../../Context/Weather";

function SearchBar() {
  const [cityName, setCityName] = useState("");
  const { setWeather } = useContext(WeatherContext);
  const handleChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const res = await axios.get(`${baseUrl}/weather/city`, {
        params: { city: cityName },
      });
      console.log(res.data);
      setWeather(res.data);
    } catch (error) {
      console.error("Error fetching city data:", error);
      setWeather();
    }
  };

  return (
    <div className={styles["search-bar-container"]}>
      <label className={styles["search-bar-label"]} htmlFor="cityName">
        City name
      </label>
      <div className={styles["search-bar-input-box"]}>
        <input
          className={styles["search-bar-input"]}
          type="text"
          id="cityName"
          value={cityName}
          onChange={handleChange}
        />
        <button className={styles["search-bar-button"]} onClick={handleSearch}>
          Check
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
