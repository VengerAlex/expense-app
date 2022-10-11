import { FC } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography, FormControl } from "@mui/material";
import { useForm } from "react-hook-form";

import Input from "../../../components/Input";
import { AuthPageWrapper } from "../../../components/AuthPageWrapper";
import signInCover from "../../../assets/images/cover-login.jpg";
import { ROUTES } from "../../../utils/types";
import { MyLink } from "../../../components/MyLink";

import {
  ErrorMessage,
  StyledBoxFlex,
  StyledCheckbox,
  StyledLabel,
  StyledPrimaryButton,
} from "../../../styles/index";
import { useActions } from "../../../hooks/useActions";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { getAuthState } from "../../../store/reducers/auth/authSlice";

interface ISignInForm {
  email: string;
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
    const { email, password } = data;

    login({ username: email, password });
    reset();
  };

  return (
    <AuthPageWrapper bgImage={signInCover}>
      <Typography mb="32px" variant="h1">
        Sign In
      </Typography>

      <FormControl sx={{ maxWidth: "335px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            autoFocus
            error={!!errors.email}
            control={control}
            formName="email"
            label="Email Address"
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
            <FormControlLabel
              control={
                <StyledCheckbox
                  color="success"
                  {...control.register("isRememberMe")}
                />
              }
              label={<StyledLabel variant="subtitle2">Remember me</StyledLabel>}
            />
            <MyLink to={ROUTES.SIGN_UP}>Reset Password?</MyLink>
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
