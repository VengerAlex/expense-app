import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Box, FormControl, Typography } from "@mui/material";
import { useActions } from "../../../../hooks/useActions";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { getAuthState } from "../../../../store/reducers/auth/authSlice";
import { ErrorMessage, StyledPrimaryButton } from "../../../../styles";
import { ISignUpFormValue, ROUTES, SIGN_UP } from "../../../../utils/types";
import Input from "../../../../components/Input";
import { Checkbox } from "../../../../components/Checkbox";
import { MyLink } from "../../../../components/MyLink";
import { signUpSchema } from "../../../../utils/schema";
import { showErrorText } from "../../../../utils/helperes";

interface ISignUpForm {
  setCurrentComponent: (component: SIGN_UP) => void;
}

export const SignUpForm: FC<ISignUpForm> = ({ setCurrentComponent }) => {
  const { register } = useActions();
  const { errorSignUp, isLoading } = useAppSelector(getAuthState);
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ISignUpFormValue>({
    mode: "onChange",
    resolver: yupResolver(signUpSchema),
  });
  const { username, fullName, password, confirmedPassword } = getValues();

  const onSubmit = (data: ISignUpFormValue) => {
    const { username, password, fullName: displayName } = data;

    register({ username, password, displayName });

    reset();
  };

  return (
    <>
      <Typography sx={{ m: "80px 0 32px" }} variant="h1">
        Sign Up
      </Typography>
      <FormControl sx={{ minWidth: "330px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            helperText={showErrorText(errors, "username", username)}
            error={!!errors.username && !!username}
            autoFocus
            placeholder="Example1488"
            InputLabelProps={{ shrink: true }}
            control={control}
            formName="username"
            label="User Name"
          />
          <Input
            helperText={showErrorText(errors, "fullName", fullName)}
            placeholder="Example1488"
            InputLabelProps={{ shrink: true }}
            error={!!errors.fullName && !!fullName}
            control={control}
            formName="fullName"
            label="Full Name"
          />
          <Input
            helperText={showErrorText(errors, "password", password)}
            error={!!errors.password && !!password}
            placeholder="***************"
            InputLabelProps={{ shrink: true }}
            control={control}
            formName="password"
            label="Password"
            isPassword={true}
          />
          <Input
            helperText={showErrorText(
              errors,
              "confirmedPassword",
              confirmedPassword,
            )}
            error={!!errors.confirmedPassword && !!confirmedPassword}
            placeholder="***************"
            InputLabelProps={{ shrink: true }}
            control={control}
            formName="confirmedPassword"
            label="Confirmed Password"
            isPassword={true}
          />
          <Box sx={{ textAlign: "left" }}>
            <Checkbox
              disableRipple
              labelText="By creating an account you agree to the terms of use and our privacy policy."
              control={control}
            />
          </Box>
          <StyledPrimaryButton
            type="submit"
            disabled={!isValid}
            sx={{ mb: 3, my: 3 }}
          >
            {isLoading ? "Loading" : "Sign Up"}
          </StyledPrimaryButton>
          {errorSignUp && (
            <ErrorMessage variant="subtitle2">{errorSignUp}</ErrorMessage>
          )}
        </form>
      </FormControl>
      <Typography variant="subtitle2">
        I have no account.
        <MyLink to={ROUTES.SIGN_IN}>Go to Sign in</MyLink>
      </Typography>
    </>
  );
};
