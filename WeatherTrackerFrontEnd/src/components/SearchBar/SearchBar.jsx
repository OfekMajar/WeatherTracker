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
    try {
      toastLoading(true);
      const res = await axios.get(`${baseUrl}/weather/city`, {
        params: { city: cityName },
      });
      const { data } = res;
      console.log(data);

      if (res.status === 200 && data.status !== 400) {
        setWeather(data);
        toastSuccess(`${data?.location?.region}'s weather`);
      }
      if (data.status === 400) {
        toastError(data.message);
      }
    } catch (error) {
      console.error("Error fetching city data:", error);
      setWeather();
      toastError(error);
    } finally {
      toastLoading(false);
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
