import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormControl, Typography } from "@mui/material";
import { AuthPageWrapper } from "../../../components/AuthPageWrapper";
import resetCover from "../../../assets/images/cover-reset-password.jpg";
import Input from "../../../components/Input";
import { StyledPrimaryButton } from "../../../styles";
import { resetSchema } from "../../../utils/schema";
import { showErrorText } from "../../../utils/types";

interface IResetPassword {
  email: string;
}

const ResetPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IResetPassword>({
    mode: "onChange",
    resolver: yupResolver(resetSchema),
  });

  return (
    <AuthPageWrapper bgImage={resetCover}>
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
        <StyledPrimaryButton p="9.5px 92.5px" type="submit" disabled={!isValid}>
          Reset Password
        </StyledPrimaryButton>
      </FormControl>
    </AuthPageWrapper>
  );
};

export default ResetPage;
