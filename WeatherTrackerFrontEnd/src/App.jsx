import toast, { useToasterStore } from "react-hot-toast";
import "./App.css";
import AppToaster from "./components/AppToaster/AppToaster";
import Home from "./pages/Home/Home";
import { useContext, useEffect } from "react";
import { WeatherContext } from "./Context/Weather";

function App() {
  const { toasts } = useToasterStore();

  const TOAST_LIMIT = 2;

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  const { fetchWeatherByCoordinates } = useContext(WeatherContext);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, [fetchWeatherByCoordinates]);

  return (
    <>
      <main>
        <Home />
      </main>
      <AppToaster />
    </>
  );
}

export default App;
