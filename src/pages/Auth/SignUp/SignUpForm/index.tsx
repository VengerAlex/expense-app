import { FC, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import { useActions } from "../../../../hooks/useActions";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { authSelector } from "../../../../store/slices/auth/authSlice";
import { StyledFormControl, StyledPrimaryButton } from "../../../../styles";
import {
  ISignUpFormValue,
  LOADING_STATUS,
  ROUTES,
  SIGN_UP,
  STATUS_CODE,
} from "../../../../utils/types";
import Input from "../../../../components/Input";
import { Checkbox } from "../../../../components/Checkbox";
import { MyLink } from "../../../../components/MyLink";
import { signUpSchema } from "../../../../utils/schema";
import {
  showErrorOnConfirmPassword,
  showErrorText,
} from "../../../../utils/helpers";

interface ISignUpForm {
  setCurrentComponent: (component: SIGN_UP) => void;
}

export const SignUpForm: FC<ISignUpForm> = ({ setCurrentComponent }) => {
  const { register } = useActions();
  const { loading, statusCode } = useAppSelector(authSelector);
  const {
    watch,
    control,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ISignUpFormValue>({
    mode: "onChange",
    resolver: yupResolver(signUpSchema),
  });
  watch();
  const { username, fullName, password, confirmedPassword } = getValues();
  const passwordIsEqual = password === confirmedPassword;

  const onSubmit = (data: ISignUpFormValue) => {
    const { username, password, fullName: displayName } = data;

    register({ username, password, displayName });

    reset();
  };

  useEffect(() => {
    if (
      loading === LOADING_STATUS.FULFILLED &&
      statusCode === STATUS_CODE.CREATED
    ) {
      setCurrentComponent(SIGN_UP.NOTIFICATION);
    }
  }, [statusCode]);

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
            control={control}
            formName="username"
            label="User Name"
          />
          <Input
            helperText={showErrorText(errors, "fullName", fullName)}
            placeholder="Example1488"
            error={!!errors.fullName && !!fullName}
            control={control}
            formName="fullName"
            label="Full Name"
          />
          <Input
            helperText={showErrorText(errors, "password", password)}
            error={!!errors.password && !!password}
            placeholder="***************"
            control={control}
            formName="password"
            label="Password"
            isPassword
          />
          <Input
            helperText={showErrorOnConfirmPassword(
              password,
              confirmedPassword,
              passwordIsEqual,
            )}
            error={!passwordIsEqual && !!confirmedPassword}
            placeholder="***************"
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
            {loading === LOADING_STATUS.PENDING ? "Loading" : "Sign Up"}
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
