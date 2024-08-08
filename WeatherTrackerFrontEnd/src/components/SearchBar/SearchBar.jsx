import { useContext, useState } from "react";
import { baseUrl } from "../../utils/backEndUtils";
import styles from "./SearchBar.module.css";
import axios from "axios";
import { WeatherContext } from "../../Context/Weather";
import {
  toastError,
  toastLoading,
  toastSuccess,
} from "../AppToaster/toastCommands";

function SearchBar() {
  const [cityName, setCityName] = useState("");
  const { setWeather } = useContext(WeatherContext);

  const handleChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSearch = async () => {
    if (!cityName) {
      toastError("Please enter a city name.");
      return;
    }

    try {
      toastLoading(true);
      const res = await axios.get(`${baseUrl}/weather/city`, {
        params: { city: cityName },
      });
      const { data } = res;

      if (res.status === 200 && data.status !== 400) {
        setWeather(data);
        toastSuccess(`${data?.location?.name}'s weather`);
      } else {
        toastError(data.message || "Error fetching weather data.");
        setWeather(null);
      }
    } catch (error) {
      console.error("Error fetching city data:", error);
      setWeather(null);
      toastError(error.message || "Error fetching weather data.");
    } finally {
      toastLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleClear = () => {
    setCityName("");
    setWeather();
  };
  return (
    <div className={styles["search-bar-container"]}>
      <label className={styles["search-bar-label"]} htmlFor="cityName">
        City name{" "}
        <button
          className={styles["search-bar-clear-button"]}
          onClick={handleClear}>
          Clear
        </button>
      </label>
      <div className={styles["search-bar-input-box"]}>
        <input
          className={styles["search-bar-input"]}
          type="text"
          id="cityName"
          value={cityName}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button className={styles["search-bar-button"]} onClick={handleSearch}>
          Check
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
