import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

function AppToaster() {
  const [toastPosition, setToastPosition] = useState("bottom-left");

  useEffect(() => {
    const updatePosition = () => {
      if (window.innerWidth <= 767) {
        setToastPosition("top-center");
      } else {
        setToastPosition("bottom-left");
      }
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  const toasterOpt = {
    className: "toast-popup",
    duration: 3000,
    style: {
      background: "#ffffff",
      color: "var(--main-text-color)",
      minWidth: "250px",
    },
    loading: {
      duration: 60000,
    },
  };

  return (
    <Toaster
      position={toastPosition}
      containerClassName="toaster-container"
      containerStyle={{ fontSize: "large" }}
      toastOptions={toasterOpt}
    />
  );
}

export default AppToaster;
