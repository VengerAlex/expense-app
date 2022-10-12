import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { FormControl, Typography } from "@mui/material";
import Input from "../Input";
import { RESET_PAGE, showErrorText } from "../../utils/types";
import { StyledPrimaryButton } from "../../styles";
import { resetPasswordSchema } from "../../utils/schema";

interface IResetForm {
  password: string;
  confirmedPassword: string;
}

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
      <Typography sx={{ m: "160px 0 32px", lineHeight: "55px" }} variant="h1">
        Reset Password
      </Typography>

      <FormControl sx={{ maxWidth: "335px" }}>
        <form>
          <Input
            helperText={showErrorText(errors, "password")}
            error={!!errors.password}
            control={control}
            formName="password"
            label="Password"
            isPassword={true}
          />
          <Input
            helperText={showErrorText(errors, "confirmedPassword")}
            error={!!errors.confirmedPassword}
            control={control}
            formName="confirmedPassword"
            label="Repeat New Password"
            isPassword={true}
          />
          <StyledPrimaryButton
            p="9.5px 75.5px"
            sx={{ mb: 3 }}
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
