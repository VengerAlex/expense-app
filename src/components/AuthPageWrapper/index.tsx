import { FC, ReactNode } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Logo } from "../Logo";

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
        sx={{ backgroundColor: "#1D283A", p: "48px 60px" }}
        item
        xs={10}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <Logo />
        <Box
          sx={{
            textAlign: "center",
            mx: 4,
          }}
        >
          <Box
            sx={{
              maxWidth: "330px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {children}
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        md={7}
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
