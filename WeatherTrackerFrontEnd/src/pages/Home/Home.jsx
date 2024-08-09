import Introduction from "../../components/Introduction/Introduction";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import styles from "./Home.module.css";
import logo from "../../../public/logo.svg";
import { useContext } from "react";
import { WeatherContext } from "../../Context/Weather";

function Home() {
  const { weather } = useContext(WeatherContext);
  return (
    <div className={styles["home-page"]}>
      <section className={styles["home-page-left-side"]}>
        <img
          className={styles["company-logo"]}
          src={logo}
          alt="Fintek company logo"
        />
        <Introduction />
      </section>
      {weather ? (
        <section className={styles["home-page-right-side"]}>
          <WeatherCard />
        </section>
      ) : null}
    </div>
  );
}

export default Home;
