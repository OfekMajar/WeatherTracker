import styles from "./LatAndLong.module.css";
function LatAndLong() {
  return (
    <div className={styles["lat-and-long-container"]}>
      <div className={styles["lat-and-long-data-container"]}>
        <div>latitude 32.07</div>
        <div>longitude 34.76</div>
      </div>
      <div className={styles["last-updated-timestamp"]}>
        accurate to 13/02/2022 at 16:24
      </div>
    </div>
  );
}

export default LatAndLong;
