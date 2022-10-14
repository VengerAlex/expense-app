import { FC, ReactNode } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Logo } from "../Logo";
import { theme } from "../../providers/ThemeProvider";

interface IAuthPageWrapper {
  children: ReactNode;
  bgImage: string;
}

export const AuthPageWrapper: FC<IAuthPageWrapper> = ({
  children,
  bgImage,
}) => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        sx={{
          backgroundColor: theme.palette.black,
          padding: "48px 60px",
        }}
        item
        xs={6}
        component={Paper}
        square
      >
        <Logo />
        <Box
          sx={{
            overflowY: "auto",
            height: "calc(100vh - 158px)",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "330px",
              margin: "0 auto",
              flexDirection: "column",
            }}
          >
            {children}
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Grid>
  );
};
