import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    black: string;
    purple: {
      main: string;
      lighter: string;
    };
    defaultBlack: string;
    violet: string;
    blue: string;
    lightBlue: string;
    orange: string;
    lightOrange: string;
    darkBlack: string;
    red: string;
    green: {
      main: string;
      lighter: string;
      border: string;
    };
    white: string;
    bgr: string;
    disabled: string;
  }

  interface PaletteOptions {
    black: string;
    purple: {
      main: string;
      lighter: string;
    };
    defaultBlack: string;
    violet: string;
    darkBlack: string;
    blue: string;
    lightBlue: string;
    orange: string;
    lightOrange: string;
    red: string;
    green: {
      main: string;
      lighter: string;
      border: string;
    };
    white: string;
    bgr: string;
    disabled: string;
  }
}

export const theme = createTheme({
  palette: {
    success: {
      main: "#539713",
    },
    darkBlack: "#010025",
    defaultBlack: "#000000",
    black: "#1d283a",
    purple: {
      main: "#cca9ff",
      lighter: "#d9e7f8",
    },
    violet: "#d4ccf1",
    blue: "#69b0ff",
    lightBlue: "#D9E7F8",
    orange: "#f08e5b",
    lightOrange: "#f4e5de",
    red: "#ee5e5e",
    green: {
      main: "#539713",
      lighter: "#b2d0ad",
      border: "#58F83B",
    },
    white: "#ffffff",
    bgr: "#f5f5f5",
    disabled: "#a19eaa",
  },
  spacing: [4, 8, 16, 24, 32, 64],
  typography: {
    allVariants: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 16,
      color: "#fff",
    },
    h1: {
      textTransform: "uppercase",
      fontSize: "56px",
      fontWeight: 700,
      letterSpacing: "3%",
      lineHeight: "84px",
    },
    h2: {
      fontSize: "48px",
      fontWeight: 700,
      lineHeight: "72px",
    },
    h3: {
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: "54px",
    },
    h4: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "36px",
    },
    h5: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "25px",
    },
    body1: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "31px",
    },
    body2: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "25px",
    },
    subtitle1: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "22px",
    },
    subtitle2: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "19px",
    },
  },
});
