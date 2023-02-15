import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";

import Input from "../../../../components/Input";
import { MyLink } from "../../../../components/MyLink";

import { StyledFormControl, StyledPrimaryButton } from "../../../../styles";
import {
  showErrorOnConfirmPassword,
  showErrorText,
} from "../../../../utils/helpers";
import { resetPasswordSchema } from "../../../../utils/schema";
import { IResetForm, RESET_PAGE, ROUTES } from "../../../../utils/types";

interface IResetPassword {
  setCurrentComponent: (component: RESET_PAGE) => void;
}

export const ResetPassword = ({ setCurrentComponent }: IResetPassword) => {
  const {
    control,
    watch,
    getValues,
    formState: { errors, isValid },
  } = useForm<IResetForm>({
    mode: "onChange",
    resolver: yupResolver(resetPasswordSchema),
  });
  watch();

  const { password, confirmedPassword } = getValues();
  const passwordIsEqual = password === confirmedPassword;

  return (
    <>
      <Typography sx={{ lineHeight: "55px", mb: 4 }} variant="h1">
        Reset Password
      </Typography>

      <StyledFormControl>
        <form>
          <Input
            helperText={showErrorText(errors, "password", password)}
            error={!!errors.password && !!password}
            autoFocus
            placeholder="***************"
            control={control}
            formName="password"
            label="Enter New Password"
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
            label="Repeat New Password"
            isPassword
            isResetPassword
          />
          <StyledPrimaryButton
            p="9.5px 75.5px"
            sx={{ mb: 3, mt: 2 }}
            type="submit"
            disabled={!isValid}
            onClick={() => setCurrentComponent(RESET_PAGE.NOTIFICATION)}
          >
            Save New Password
          </StyledPrimaryButton>
        </form>
        <Typography variant="subtitle2" mt={1}>
          I remembered the password.
          <MyLink to={ROUTES.SIGN_IN}>Go to Sign in</MyLink>
        </Typography>
      </StyledFormControl>
    </>
  );
};
