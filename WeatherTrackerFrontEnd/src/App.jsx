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
