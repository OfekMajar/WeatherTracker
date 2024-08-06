import Introduction from "../../components/Introduction/Introduction";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import styles from "./Home.module.css";
import logo from "../../../public/logo.svg";

function Home() {
  return (
    <div className={styles["home-page"]}>
      <section className={styles["home-page-left-side"]}>
        <img className={styles["company-logo"]} src={logo} alt="" />
        <Introduction />
      </section>
      <section className={styles["home-page-right-side"]}>
        <WeatherCard />
      </section>
    </div>
  );
}

export default Home;
