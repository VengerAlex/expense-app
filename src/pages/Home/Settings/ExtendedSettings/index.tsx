import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { FormControl, useTheme } from "@mui/material";
import Input from "../../../../components/Input";
import {
  IExtendedSettingsForm,
  LOADING_STATUS,
  SETTINGS,
} from "../../../../utils/types";
import { extendedSettingsSchema } from "../../../../utils/schema";
import {
  StyledLogoutButton,
  StyledPrimaryButton,
  StyledSecondaryButton,
} from "../../../../styles";
import { ProfileAvatar } from "../../../../components/ProfileAvatar";
import { showErrorText } from "../../../../utils/helpers";
import { useActions } from "../../../../hooks/useActions";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { userSelector } from "../../../../store/slices/user/userSlice";

interface IExtendedSettings {
  setCurrentComponent: (component: SETTINGS) => void;
}
export const ExtendedSettings: FC<IExtendedSettings> = ({
  setCurrentComponent,
}) => {
  const theme = useTheme();
  const { user, loading } = useAppSelector(userSelector);
  const { logout, changeInformation, deleteSelf } = useActions();
  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<IExtendedSettingsForm>({
    mode: "onChange",
    resolver: yupResolver(extendedSettingsSchema),
    defaultValues: { username: "", displayName: "" },
  });
  const { username, displayName } = watch();

  const onSubmit = () => {
    changeInformation({
      username: username?.trim(),
      displayName: displayName?.trim(),
    });

    if (loading === LOADING_STATUS.FULFILLED) {
      setCurrentComponent(SETTINGS.NOTIFICATION);
    }
  };

  useEffect(() => {
    reset({ username: user?.username, displayName: user?.displayName });
  }, [reset, user]);

  const isBtnDisabled =
    (username?.trim() === user?.username &&
      displayName?.trim() === user?.displayName) ||
    !isValid;

  return (
    <>
      <ProfileAvatar isBig myVariant="h4" color={theme.palette.black} />
      <FormControl sx={{ minWidth: "335px", marginTop: 4, overflowY: "auto" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            helperText={showErrorText(errors, "displayName", displayName)}
            error={!!errors.displayName && !!displayName}
            control={control}
            placeholder={user?.displayName}
            isBlack
            formName="displayName"
            label="Full Name"
          />
          <Input
            helperText={showErrorText(errors, "username", username)}
            error={!!errors.username && !!username}
            control={control}
            placeholder={user?.username}
            isBlack
            formName="username"
            label="UserName"
          />
          <StyledPrimaryButton
            type="submit"
            disabled={isBtnDisabled}
            sx={{ mb: 2 }}
          >
            {loading === LOADING_STATUS.PENDING ? "Loading" : "Save Changes"}
          </StyledPrimaryButton>
          <StyledSecondaryButton
            onClick={() => setCurrentComponent(SETTINGS.PASSWORDS)}
            disableRipple
            sx={{ mb: 2 }}
          >
            Reset Password
          </StyledSecondaryButton>
          <StyledLogoutButton onClick={() => logout()} sx={{ mb: 2 }}>
            Log Out
          </StyledLogoutButton>
          <StyledLogoutButton
            onClick={() => deleteSelf()}
            sx={{ backgroundColor: theme.palette.red }}
          >
            Delete Your Account
          </StyledLogoutButton>
        </form>
      </FormControl>
    </>
  );
};
