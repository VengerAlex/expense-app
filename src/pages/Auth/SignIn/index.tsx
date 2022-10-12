import { FC } from "react";

import { Typography, FormControl } from "@mui/material";
import { useForm } from "react-hook-form";
import Input from "../../../components/Input";
import { AuthPageWrapper } from "../../../components/AuthPageWrapper";
import { ROUTES } from "../../../utils/types";
import { MyLink } from "../../../components/MyLink";
import signInCover from "../../../assets/images/cover-login.jpg";
import {
  ErrorMessage,
  StyledBoxFlex,
  StyledPrimaryButton,
} from "../../../styles/index";
import { useActions } from "../../../hooks/useActions";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { getAuthState } from "../../../store/reducers/auth/authSlice";
import { Checkbox } from "../../../components/Checkbox";

interface ISignInForm {
  username: string;
  password: string;
  isRememberMe: string;
}

const SignIn: FC = () => {
  const { login } = useActions();
  const { errorSignIn } = useAppSelector(getAuthState);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ISignInForm>({ mode: "onChange" });

  const onSubmit = (data: ISignInForm) => {
    const { username, password } = data;

    login({ username, password });
    reset();
  };

  return (
    <AuthPageWrapper bgImage={signInCover}>
      <Typography sx={{ m: "160px 0 32px" }} variant="h1">
        Sign In
      </Typography>

      <FormControl sx={{ maxWidth: "335px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            autoFocus
            error={!!errors.username}
            control={control}
            formName="username"
            label="Username"
          />
          <Input
            error={!!errors.password}
            sx={{ mb: "-15px" }}
            control={control}
            formName="password"
            label="Password"
            isPassword={true}
          />
          <StyledBoxFlex>
            <Checkbox checked control={control} labelText="Remember me" />
            <MyLink to={ROUTES.RESET}>Reset Password?</MyLink>
          </StyledBoxFlex>

          <StyledPrimaryButton type="submit" disabled={!isValid}>
            Login
          </StyledPrimaryButton>
          {errorSignIn && (
            <ErrorMessage variant="subtitle2">{errorSignIn}</ErrorMessage>
          )}
        </form>
      </FormControl>

      <Typography variant="subtitle2">
        Don’t have account yet ?{" "}
        <MyLink to={ROUTES.SIGN_UP}>New Account</MyLink>
      </Typography>
    </AuthPageWrapper>
  );
};

export default SignIn;
