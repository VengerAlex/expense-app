import { FC } from "react";

import { useForm } from "react-hook-form";
import { FormControl, Typography } from "@mui/material";
import { AuthPageWrapper } from "../../../components/AuthPageWrapper";
import signUpCover from "../../../assets/images/cover-sign-up.jpg";
import Input from "../../../components/Input";
import { ErrorMessage, StyledPrimaryButton } from "../../../styles";
import { MyLink } from "../../../components/MyLink";
import { ROUTES } from "../../../utils/types";
import { useActions } from "../../../hooks/useActions";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { getAuthState } from "../../../store/reducers/auth/authSlice";
import { Checkbox } from "../../../components/Checkbox";

interface ISignUpForm {
  fullName: string;
  username: string;
  password: string;
  confirmedPassword: string;
  isConfirmed: boolean;
}

const SignUp: FC = () => {
  const { register } = useActions();
  const { errorSignUp } = useAppSelector(getAuthState);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitSuccessful },
    reset,
    watch,
  } = useForm<ISignUpForm>({ mode: "onChange" });
  const [password, confirmedPassword] = watch([
    "password",
    "confirmedPassword",
  ]);
  const isTheSamePassword = password === confirmedPassword;

  const onSubmit = (data: ISignUpForm) => {
    const { username, password, fullName: displayName } = data;

    register({ username, password, displayName });
    isSubmitSuccessful && reset();
  };

  return (
    <AuthPageWrapper bgImage={signUpCover}>
      <Typography sx={{ m: "80px 0 32px" }} variant="h1">
        Sign Up
      </Typography>
      <FormControl sx={{ width: "335px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            autoFocus
            error={!!errors.fullName}
            control={control}
            formName="fullName"
            label="Full Name"
          />
          <Input
            error={!!errors.username}
            control={control}
            formName="username"
            label="User Name"
          />
          <Input
            error={!!errors.password}
            control={control}
            formName="password"
            label="Password"
            isPassword={true}
          />
          <Input
            error={!!errors.confirmedPassword}
            control={control}
            formName="confirmedPassword"
            label="Confirmed Password"
            isPassword={true}
          />
          <Checkbox
            labelText="By creating an account you agree to the terms of use and our privacy policy."
            control={control}
          />
          <StyledPrimaryButton
            type="submit"
            disabled={!isValid || !isTheSamePassword}
          >
            Sign
          </StyledPrimaryButton>
          {errorSignUp && (
            <ErrorMessage variant="subtitle2">{errorSignUp}</ErrorMessage>
          )}
        </form>
      </FormControl>
      <Typography variant="subtitle2">
        I have an account. <MyLink to={ROUTES.SIGN_IN}>Go to Sign in</MyLink>
      </Typography>
    </AuthPageWrapper>
  );
};

export default SignUp;
