import { toastr } from "react-redux-toastr";

export const showErrorText = (
  errors: any,
  value: string,
  fieldValue?: string,
) => {
  return errors[value]?.message && !!fieldValue ? errors[value]?.message : " ";
};

export const errorCatch = (error: any): string =>
  error.response && error.response.data
    ? typeof error.response.data.message === "object"
      ? error.response.data.message[0]
      : error.response.data.message
    : error.message;

export const toastError = (error: any, title?: string) => {
  const message = errorCatch(error);
  toastr.error(title || "Error request", message);
  throw message;
};
