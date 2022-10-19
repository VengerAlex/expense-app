import { FC } from "react";
import { FormControl, Typography } from "@mui/material";
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
import { theme } from "../../../../providers/ThemeProvider";
import { ProfileAvatar } from "../../../../components/ProfileAvatar";
import { showErrorText } from "../../../../utils/helpers";
import { useActions } from "../../../../hooks/useActions";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { getAuthSelector } from "../../../../store/slices/auth/authSlice";

interface IProfileSettings {
  setCurrentComponent: (component: SETTINGS) => void;
}

export const ProfileSettings: FC<IProfileSettings> = ({
  setCurrentComponent,
}) => {
  const { loading } = useAppSelector(getAuthSelector);
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

  return (
    <>
      <ProfileAvatar
        sx={{ width: "72px", height: "72px" }}
        circleText="h4"
        myVariant="h4"
        color={theme.palette.black}
        bgColor={theme.palette.red}
      />
      <Typography
        color={theme.palette.black}
        sx={{ m: "72px 0 32px" }}
        variant="h4"
      >
        Change Password
      </Typography>

      <FormControl sx={{ maxWidth: "335px" }}>
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
            helperText={showErrorText(
              errors,
              "confirmedPassword",
              confirmedPassword,
            )}
            error={!!errors.confirmedPassword && !!confirmedPassword}
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
