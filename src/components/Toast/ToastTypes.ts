import { ToastPosition, toast } from "react-toastify";

export interface ToastTypes {
  showToast(message?: string, position?: ToastPosition): void;
}

export const DEFAULT_POSITION = toast.POSITION.BOTTOM_RIGHT;

export const ErrorToast: ToastTypes = class {
  public static showToast = (
    message: string = "",
    position: ToastPosition = DEFAULT_POSITION
  ) => {
    const toastMessage = `ERROR: ${message}`;

    toast.error(toastMessage, {
      position,
      autoClose: 5000,
    });
  };
};

export const InvalidFormToast: ToastTypes = class {
  public static showToast = (
    message: string = "",
    position: ToastPosition = DEFAULT_POSITION
  ) => {
    const toastMessage = `INVALID: ${message}`;

    toast.error(toastMessage, {
      position,
      autoClose: 5000,
    });
  };
}

export const InfoToast: ToastTypes = class {
  public static showToast = (
    message: string = "",
    position: ToastPosition = DEFAULT_POSITION
  ) => {
    const toastMessage = `INFO: ${message}`;

    toast.info(toastMessage, {
      position,
      autoClose: 5000,
    });
  };
};
