import { FC } from "react";
import { Link } from "react-router-dom";

import { Button, TextField, Typography } from "@mui/material";
import { AuthPageWrapper } from "../../../components/AuthPageWrapper";

import signInCover from "../../../assets/images/cover-login.jpg";
import { ROUTES } from "../../../utils/types";

const SignIn: FC = () => {
  return (
    <AuthPageWrapper bgImage={signInCover}>
      <Typography variant="h1">Sign In</Typography>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Button>Login</Button>

      <Typography variant="subtitle2">
        Don’t have account yet ?
        <Link to={ROUTES.SIGN_UP}>
          <Typography
            sx={{ color: "#69B0FF", ml: 1 }}
            component="span"
            variant="subtitle2"
          >
            New Account
          </Typography>
        </Link>
      </Typography>
    </AuthPageWrapper>
  );
};

export default SignIn;
