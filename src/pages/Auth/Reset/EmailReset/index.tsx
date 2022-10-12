import { FormControl, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { resetSchema } from "../../../../utils/schema";
import Input from "../../../../components/Input";
import { StyledPrimaryButton } from "../../../../styles";
import { RESET_PAGE, showErrorText } from "../../../../utils/types";

interface IResetPassword {
  email: string;
}

interface IEmailReset {
  setCurrentComponent: (component: RESET_PAGE) => void;
}

const EmailReset = ({ setCurrentComponent }: IEmailReset) => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<IResetPassword>({
    mode: "onChange",
    resolver: yupResolver(resetSchema),
  });

  return (
    <>
      <Typography variant="h1" sx={{ m: "160px 0 32px", lineHeight: "55px" }}>
        Reset Password
      </Typography>
      <Typography variant="h5">
        Enter your email and we will send you an email with simple steps to
        reset your password and reset it
      </Typography>

      <FormControl sx={{ maxWidth: "335px" }}>
        <Input
          helperText={showErrorText(errors, "email")}
          sx={{ mt: 3 }}
          autoFocus
          control={control}
          formName="email"
          label="Email Address"
        />
        <StyledPrimaryButton
          onClick={() => setCurrentComponent(RESET_PAGE.PASSWORDS)}
          p="9.5px 92.5px"
          type="submit"
          disabled={!isValid}
        >
          Reset Password
        </StyledPrimaryButton>
      </FormControl>
    </>
  );
};

export default EmailReset;
