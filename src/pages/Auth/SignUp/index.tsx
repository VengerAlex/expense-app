import { FC } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { AuthPageWrapper } from "../../../components/AuthPageWrapper";
import signUpCover from "../../../assets/images/cover-sign-up.jpg";

const SignUp: FC = () => {
  return (
    <AuthPageWrapper bgImage={signUpCover}>
      <Typography variant="h1">Sign Up</Typography>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Button>Login</Button>
    </AuthPageWrapper>
  );
};

export default SignUp;
