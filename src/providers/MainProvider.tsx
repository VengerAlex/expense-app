import { FC, ReactNode } from "react";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ReduxToastr } from "../components/ReduxToastr";

import { store } from "../store";
import { theme } from "./ThemeProvider";

interface IMainProvider {
  children: ReactNode;
}

export const MainProvider: FC<IMainProvider> = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <ReduxToastr />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};
