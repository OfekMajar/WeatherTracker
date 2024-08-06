import toast from "react-hot-toast";
let loadingToastId = null;
export const toastSuccess = (successMsg) => {
  toast.success(successMsg);
};

export const toastLoading = (isLoading) => {
  if (isLoading) {
    // Show loading toast and store the ID
    loadingToastId = toast.loading("Loading...");
  } else {
    // Clear the loading toast if it exists
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
