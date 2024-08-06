import styles from "./SearchBar.module.css";
function SearchBar() {
  return (
    <div className={styles["search-bar-container"]}>
      <label className={styles["search-bar-label"]} htmlFor="">
        City name
      </label>
      <div className={styles["search-bar-input-box"]}>
        <input
          className={styles["search-bar-input"]}
          type="text"
          name=""
          id=""
        />
        <button className={styles["search-bar-button"]}>Check</button>
      </div>
    </div>
  );
}

export default SearchBar;
