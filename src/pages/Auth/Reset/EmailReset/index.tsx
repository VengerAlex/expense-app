import { FormControl, Typography, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { resetSchema } from "../../../../utils/schema";
import Input from "../../../../components/Input";
import { StyledPrimaryButton } from "../../../../styles";
import { IResetPassword, RESET_PAGE, ROUTES } from "../../../../utils/types";
import { MyLink } from "../../../../components/MyLink";
import { showErrorText } from "../../../../utils/helperes";

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
      <Typography variant="h1" mb={4} sx={{ lineHeight: "55px" }}>
        Reset Password
      </Typography>
      <Typography variant="h5" sx={{ opacity: 0.8 }} mb={3}>
        Enter your email and we will send you an email with simple steps to
        reset your password and reset it
      </Typography>

      <FormControl sx={{ maxWidth: "335px" }}>
        <form>
          <Input
            helperText={showErrorText(errors, "email")}
            InputLabelProps={{ shrink: true }}
            autoFocus
            error={!!errors.email}
            placeholder="example@gmail.com"
            control={control}
            formName="email"
            label="Email Address"
          />
          <StyledPrimaryButton
            sx={{ mt: 1, mb: 3 }}
            onClick={() => setCurrentComponent(RESET_PAGE.PASSWORDS)}
            p="9.5px 92.5px"
            type="submit"
            disabled={!isValid}
          >
            Reset Password
          </StyledPrimaryButton>
        </form>
      </FormControl>
      <Typography variant="subtitle2">
        I remembered the password.{" "}
        <MyLink to={ROUTES.SIGN_IN}>Go to Sign in</MyLink>
      </Typography>
    </>
  );
};

export default EmailReset;
