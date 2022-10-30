import { FC } from "react";
import { FormControl, Typography, useTheme } from "@mui/material";
import Input from "../../../../components/Input";
import {
  IResetProfileForm,
  LOADING_STATUS,
  SETTINGS,
} from "../../../../utils/types";
import { StyledPrimaryButton } from "../../../../styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { profileSettingsSchema } from "../../../../utils/schema";
import { ProfileAvatar } from "../../../../components/ProfileAvatar";
import {
  showErrorOnConfirmPassword,
  showErrorText,
} from "../../../../utils/helpers";
import { useActions } from "../../../../hooks/useActions";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { authSelector } from "../../../../store/slices/auth/authSlice";

interface IProfileSettings {
  setCurrentComponent: (component: SETTINGS) => void;
}

export const ProfileSettings: FC<IProfileSettings> = ({
  setCurrentComponent,
}) => {
  const theme = useTheme();
  const { loading } = useAppSelector(authSelector);
  const { changePassword } = useActions();
  const {
    handleSubmit,
    watch,
    reset,
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<IResetProfileForm>({
    mode: "onChange",
    resolver: yupResolver(profileSettingsSchema),
  });
  const { oldPassword, password, confirmedPassword } = getValues();
  watch();

  const onSubmit = async (data: IResetProfileForm) => {
    const { oldPassword, password } = data;

    changePassword({ oldPassword, newPassword: password });
    if (loading === LOADING_STATUS.FULFILLED) {
      setCurrentComponent(SETTINGS.NOTIFICATION);
    }

    reset();
  };

  const passwordIsEqual = password === confirmedPassword;

  return (
    <>
      <ProfileAvatar isBig myVariant="h4" color={theme.palette.black} />
      <Typography
        color={theme.palette.black}
        sx={{ m: "72px 0 32px" }}
        variant="h4"
      >
        Change Password
      </Typography>

      <FormControl sx={{ maxWidth: "335px", overflowY: "auto" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            helperText={showErrorText(errors, "oldPassword", oldPassword)}
            error={!!errors.oldPassword && !!oldPassword}
            isBlack
            control={control}
            placeholder="***************"
            formName="oldPassword"
            label="Enter Your Password"
            isPassword
          />
          <Input
            helperText={showErrorText(errors, "password", password)}
            error={!!errors.password && !!password}
            control={control}
            placeholder="***************"
            isBlack
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
            control={control}
            isBlack
            placeholder="***************"
            formName="confirmedPassword"
            label="Repeat New Password"
            isPassword
          />
          <StyledPrimaryButton
            p="9.5px 102px"
            sx={{ mb: 3 }}
            type="submit"
            disabled={!isValid}
          >
            {loading === LOADING_STATUS.PENDING ? "Loading" : "Save Changes"}
          </StyledPrimaryButton>
        </form>
      </FormControl>
    </>
  );
};
