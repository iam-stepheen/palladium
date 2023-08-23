import { isRejectedWithValue } from "@reduxjs/toolkit";

export const rtkQueryErrorLogger = () => (next: any) => (action: any) => {
  if (isRejectedWithValue(action)) {
    const serverMessage =
      typeof action?.payload?.data?.message[0] === "object"
        ? action?.payload?.data?.message[0]
        : action?.payload?.data?.message;
    const internetStatus = action?.payload?.status;
    const statusCode = action.payload?.data.statusCode;

    switch (internetStatus) {
      case "FETCH_ERROR":
        break;
      default:
        break;
    }

    switch (statusCode) {
      case 400:
      case 401:
        break;
      case 500:
      case 409:
        break;
      case 200:
        break;
      default:
        // Uncomment if you want to show a toast for other statuses
        // Toast.show({
        //   type: 'error',
        //   text1: 'Error',
        //   text2: serverMessage,
        //   position: 'bottom',
        // });
        break;
    }
  }

  return next(action);
};
