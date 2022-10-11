import { FC } from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import { AuthPageWrapper } from "../../../components/AuthPageWrapper";
import signUpCover from "../../../assets/images/cover-sign-up.jpg";
import Input from "../../../components/Input";
import { StyledPrimaryButton } from "../../../styles";

interface ISignUpForm {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitSuccessful },
    reset,
  } = useForm<ISignUpForm>({ mode: "onChange" });

  return (
    <AuthPageWrapper bgImage={signUpCover}>
      <Typography variant="h1">Sign Up</Typography>
      <FormControl sx={{ width: "335px" }}>
        <Input
          error={!!errors.fullName}
          control={control}
          formName="fullName"
          label="Full Name"
        />
        <Input
          error={!!errors.userName}
          control={control}
          formName="userName"
          label="User Name"
        />
        <Input
          error={!!errors.email}
          control={control}
          formName="email"
          label="Email Address"
        />
        <Input
          error={!!errors.password}
          control={control}
          formName="password"
          label="Password"
          isPassword={true}
        />
        <Input
          error={!!errors.password}
          control={control}
          formName="confirmPassword"
          label="Confirm Password"
          isPassword={true}
        />
      </FormControl>
      <StyledPrimaryButton>Sign Up</StyledPrimaryButton>
      <Link to="/sign-in">SIGN IN</Link>
    </AuthPageWrapper>
  );
};

export default SignUp;
