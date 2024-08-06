import { Toaster } from "react-hot-toast";

function AppToaster() {
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
      position={"bottom-left"}
      containerClassName="toaster-container"
      containerStyle={{ fontSize: "large" }}
      toastOptions={toasterOpt}
    />
  );
}

export default AppToaster;
