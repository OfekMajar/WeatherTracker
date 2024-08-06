import LatAndLong from "../LatAndLong/LatAndLong";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Introduction.module.css";
function Introduction() {
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
      <LatAndLong />
    </div>
  );
}

export default Introduction;
