import { FC } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography, FormControl, Checkbox, Box } from "@mui/material";
import { useForm } from "react-hook-form";

import Input from "../../../components/Input";
import { AuthPageWrapper } from "../../../components/AuthPageWrapper";
import signInCover from "../../../assets/images/cover-login.jpg";
import { ROUTES } from "../../../utils/types";
import { MyLink } from "../../../components/MyLink";

import {
  StyledBoxFlex,
  StyledCheckbox,
  StyledLabel,
  StyledPrimaryButton,
} from "../../../styles/index";

interface ISignInForm {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitSuccessful },
    reset,
  } = useForm<ISignInForm>({ mode: "onChange" });

  const onSubmit = (data: ISignInForm) => {
    console.log(data);
    // axios

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
            sx={{ mb: "15px" }}
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
          <StyledBoxFlex>
            <FormControlLabel
              control={<StyledCheckbox color="success" />}
              label={<StyledLabel variant="subtitle2">Remember me</StyledLabel>}
            />
            <MyLink to={ROUTES.SIGN_UP}>Reset Password?</MyLink>
          </StyledBoxFlex>
          <StyledPrimaryButton type="submit" disabled={!isValid}>
            Login
          </StyledPrimaryButton>
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
