import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { FormControl, Typography } from "@mui/material";
import Input from "../../../../components/Input";
import { IResetForm, RESET_PAGE } from "../../../../utils/types";
import { StyledPrimaryButton } from "../../../../styles";
import { resetPasswordSchema } from "../../../../utils/schema";
import { showErrorText } from "../../../../utils/helperes";

interface IResetPassword {
  setCurrentComponent: (component: RESET_PAGE) => void;
}

export const ResetPassword = ({ setCurrentComponent }: IResetPassword) => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<IResetForm>({
    mode: "onChange",
    resolver: yupResolver(resetPasswordSchema),
  });
  return (
    <>
      <Typography sx={{ lineHeight: "55px", mb: 4 }} variant="h1">
        Reset Password
      </Typography>

      <FormControl sx={{ maxWidth: "335px" }}>
        <form>
          <Input
            helperText={showErrorText(errors, "password")}
            error={!!errors.password}
            autoFocus
            placeholder="***************"
            InputLabelProps={{ shrink: true }}
            control={control}
            formName="password"
            label="Enter New Password"
            isPassword={true}
          />
          <Input
            helperText={showErrorText(errors, "confirmedPassword")}
            error={!!errors.confirmedPassword}
            placeholder="***************"
            InputLabelProps={{ shrink: true }}
            control={control}
            formName="confirmedPassword"
            label="Repeat New Password"
            isPassword={true}
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
      </FormControl>
    </>
  );
};
