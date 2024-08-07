import toast from "react-hot-toast";
let loadingToastId = null;
export const toastSuccess = (successMsg) => {
  toast.success(successMsg);
};

export const toastLoading = (isLoading) => {
  if (isLoading) {
    loadingToastId = toast.loading("Loading...");
  } else {
    if (loadingToastId) {
      toast.remove(loadingToastId);
      loadingToastId = null;
    }
  }
};
export const toastError = (errorMsg) => {
  toast.error(errorMsg);
};

export const toastAlert = (alertMsg) => {
  toast(alertMsg);
};
