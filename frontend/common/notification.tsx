import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

type notificationType = {
  notificationStatus: string;
  notificationMessage: string;
};

const UserNotification: React.FC<notificationType> = ({
  notificationStatus,
  notificationMessage,
}) => {
  console.log(notificationStatus, notificationMessage);
  useEffect(() => {
    console.log("notification-pannel");
    if (notificationStatus === "success") {
      toast.error(notificationMessage, {
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

    if (notificationStatus === "failure") {
      toast.success(notificationMessage, {
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
  }, []);
  return (
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
  );
};

export default UserNotification;
