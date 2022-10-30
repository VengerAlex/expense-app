import { toastr } from "react-redux-toastr";
import { theme } from "../providers/ThemeProvider";

const colors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

export const showErrorText = (
  errors: any,
  value: string,
  fieldValue?: string | number,
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

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    signDisplay: "always",
  })
    .format(number)
    .replace(/^(\D+)/, "$1 ");
};

export const formatDate = (date: any) => {
  return new Intl.DateTimeFormat("en-UK", {
    day: "numeric",
    month: "numeric",
    year: "2-digit",
  }).format(date);
};

export const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
};

export const getBackgroundColor = (index: number) => {
  return (index + 1) % 2 === 0
    ? "rgba(212, 204, 241, 0.3)"
    : theme.palette.white;
};
