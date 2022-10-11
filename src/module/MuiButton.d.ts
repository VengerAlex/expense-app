import { ButtonPropsColorOverrides } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    darkBlue: true;
  }
}
