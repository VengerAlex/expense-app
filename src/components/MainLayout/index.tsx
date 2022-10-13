import { FC, ReactNode } from "react";
import { Grid } from "@mui/material";
import { Sidebar } from "../Sidebar";
import { theme } from "../../providers/ThemeProvider";

interface IMainLayout {
  children: ReactNode;
}
export const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Sidebar />
      <Grid item xs={10} sx={{ backgroundColor: theme.palette.bgr }}>
        {children}
      </Grid>
    </Grid>
  );
};
