import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type NotificationHookReturnType = {
  isLoading: boolean;
  loadingHandler: (status: boolean) => void;
  showToast: (notify: notificationType) => void;
  Toastcontainer: JSX.Element;
};

type notificationType = {
  notificationStatus: string;
  notificationMessage: string;
};

const useNotification = (): NotificationHookReturnType => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const loadingHandler = (status: boolean) => {
    setLoading(status);
  };

  const showToast = (notification: notificationType) => {
    if (notification.notificationStatus === "success") {
      toast.success(notification.notificationMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (notification.notificationStatus === "failure") {
      toast.error(notification.notificationMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return {
    isLoading,
    loadingHandler,
    showToast,
    Toastcontainer: (
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </>
    ),
  };
};

export default useNotification;
