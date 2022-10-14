import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography, FormControl } from "@mui/material";
import { useForm } from "react-hook-form";
import Input from "../../../components/Input";
import { AuthPageWrapper } from "../../../components/AuthPageWrapper";
import { ISignInForm, ROUTES } from "../../../utils/types";
import { MyLink } from "../../../components/MyLink";
import signInCover from "../../../assets/images/cover-login.jpg";
import { ErrorMessage, StyledPrimaryButton } from "../../../styles/index";
import { useActions } from "../../../hooks/useActions";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { getAuthState } from "../../../store/reducers/auth/authSlice";
import { signInSchema } from "../../../utils/schema";
import localstorageService from "../../../services/localstorage.service";
import { showErrorText } from "../../../utils/helperes";

const SignIn: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || ROUTES.Home;
  const isAuth = localstorageService.get("accessToken");
  const { login } = useActions();
  const { errorSignIn, isLoading } = useAppSelector(getAuthState);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ISignInForm>({
    mode: "onChange",
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (data: ISignInForm) => {
    const { username, password } = data;

    login({ username, password });
    reset();
  };

  if (isAuth) {
    navigate(from, { replace: true });
  }

  return (
    <AuthPageWrapper bgImage={signInCover}>
      <Typography variant="h1" mb={4}>
        Sign In
      </Typography>

      <FormControl sx={{ maxWidth: "335px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            helperText={showErrorText(errors, "username")}
            autoFocus
            InputLabelProps={{ shrink: true }}
            placeholder="example@gmail.com"
            error={!!errors.username}
            control={control}
            formName="username"
            label="Username"
          />
          <Input
            helperText={showErrorText(errors, "password")}
            error={!!errors.password}
            sx={{ mb: -1 }}
            InputLabelProps={{ shrink: true }}
            placeholder="***************"
            control={control}
            formName="password"
            label="Password"
            isPassword={true}
          />
          <MyLink to={ROUTES.RESET}>Reset Password?</MyLink>

          <StyledPrimaryButton sx={{ mb: 3 }} type="submit" disabled={!isValid}>
            {isLoading ? "Loading" : "Login"}
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
