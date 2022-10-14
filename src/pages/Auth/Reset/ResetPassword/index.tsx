import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { FormControl, Typography } from "@mui/material";
import Input from "../../../../components/Input";
import { IResetForm, RESET_PAGE, ROUTES } from "../../../../utils/types";
import { StyledPrimaryButton } from "../../../../styles";
import { resetPasswordSchema } from "../../../../utils/schema";
import { showErrorText } from "../../../../utils/helperes";
import { MyLink } from "../../../../components/MyLink";

interface IResetPassword {
  setCurrentComponent: (component: RESET_PAGE) => void;
}

export const ResetPassword = ({ setCurrentComponent }: IResetPassword) => {
  const {
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<IResetForm>({
    mode: "onChange",
    resolver: yupResolver(resetPasswordSchema),
  });
  const { password, confirmedPassword } = getValues();

  return (
    <>
      <Typography sx={{ lineHeight: "55px", mb: 4 }} variant="h1">
        Reset Password
      </Typography>

      <FormControl sx={{ maxWidth: "335px" }}>
        <form>
          <Input
            helperText={showErrorText(errors, "password", password)}
            error={!!errors.password && !!password}
            autoFocus
            placeholder="***************"
            InputLabelProps={{ shrink: true }}
            control={control}
            formName="password"
            label="Enter New Password"
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
      </FormControl>
    </>
  );
};
