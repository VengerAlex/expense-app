import { FC, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import { useActions } from "../../../../hooks/useActions";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { getAuthState } from "../../../../store/reducers/auth/authSlice";
import { StyledFormControl, StyledPrimaryButton } from "../../../../styles";
import {
  ISignUpFormValue,
  LOADING_STATUS,
  ROUTES,
  SIGN_UP,
} from "../../../../utils/types";
import Input from "../../../../components/Input";
import { Checkbox } from "../../../../components/Checkbox";
import { MyLink } from "../../../../components/MyLink";
import { signUpSchema } from "../../../../utils/schema";
import { showErrorText } from "../../../../utils/helpers";

interface ISignUpForm {
  setCurrentComponent: (component: SIGN_UP) => void;
}

export const SignUpForm: FC<ISignUpForm> = ({ setCurrentComponent }) => {
  const { register } = useActions();
  const { isLoading, statusCode, isFullFilled } = useAppSelector(getAuthState);
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

  useEffect(() => {
    if (isFullFilled && statusCode === 201) {
      setCurrentComponent(SIGN_UP.NOTIFICATION);
    }
  }, [statusCode, isFullFilled]);

  return (
    <>
      <Typography sx={{ m: "80px 0 32px" }} variant="h1">
        Sign Up
      </Typography>
      <StyledFormControl>
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
            isPassword
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
            isPassword
            isResetPassword
          />
          <Box sx={{ textAlign: "left" }}>
            <Checkbox
              defaultChecked
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
            {isLoading === LOADING_STATUS.PENDING ? "Loading" : "Sign Up"}
          </StyledPrimaryButton>
        </form>
      </StyledFormControl>
      <Typography variant="subtitle2">
        I have no account.
        <MyLink to={ROUTES.SIGN_IN}>Go to Sign in</MyLink>
      </Typography>
    </>
  );
};
