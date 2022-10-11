import { BrowserRouter } from "react-router-dom";
import { FC, ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { theme } from "./ThemeProvider";

interface IMainProvider {
  children: ReactNode;
}

export const MainProvider: FC<IMainProvider> = ({ children }) => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  );
};
