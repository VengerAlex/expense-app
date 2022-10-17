import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { FormControl } from "@mui/material";
import Input from "../../../../components/Input";
import { ROUTES, SETTINGS } from "../../../../utils/types";
import { extendedSettingsSchema } from "../../../../utils/schema";
import {
  StyledLogoutButton,
  StyledPrimaryButton,
  StyledSecondaryButton,
} from "../../../../styles";
import { ProfileAvatar } from "../../../../components/ProfileAvatar";
import { theme } from "../../../../providers/ThemeProvider";
import { showErrorText } from "../../../../utils/helpers";
import { useActions } from "../../../../hooks/useActions";
import { useNavigate } from "react-router-dom";

interface IExtendedSettingsForm {
  fullName: string;
  userName: string;
  phoneNumber: string;
}

interface IExtendedSettings {
  setCurrentComponent: (component: SETTINGS) => void;
}
export const ExtendedSettings: FC<IExtendedSettings> = ({
  setCurrentComponent,
}) => {
  const navigate = useNavigate();
  const { logout } = useActions();
  const {
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<IExtendedSettingsForm>({
    mode: "onChange",
    resolver: yupResolver(extendedSettingsSchema),
  });
  const { fullName, userName, phoneNumber } = getValues();

  const logoutHandler = () => {
    logout();

    navigate(ROUTES.SIGN_IN);
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
      <FormControl sx={{ minWidth: "335px", marginTop: 4 }}>
        <form>
          <Input
            helperText={showErrorText(errors, "fullName", fullName)}
            error={!!errors.fullName && !!fullName}
            control={control}
            placeholder="Arafat"
            isblack
            formName="fullName"
            label="Full Name"
          />
          <Input
            helperText={showErrorText(errors, "userName", userName)}
            error={!!errors.userName && !!userName}
            control={control}
            placeholder="Arafat1488"
            isblack
            formName="userName"
            label="UserName"
          />
          <Input
            helperText={showErrorText(errors, "phoneNumber", phoneNumber)}
            error={!!errors.phoneNumber && !!phoneNumber}
            control={control}
            placeholder="380937654671"
            isblack
            formName="phoneNumber"
            label="Phone Number"
          />
          <StyledPrimaryButton disabled={!isValid} sx={{ mb: 2 }}>
            Save Changes
          </StyledPrimaryButton>
          <StyledSecondaryButton
            onClick={() => setCurrentComponent(SETTINGS.PASSWORDS)}
            disableRipple
            sx={{ mb: 2 }}
          >
            Reset Password
          </StyledSecondaryButton>
          <StyledLogoutButton onClick={logoutHandler}>
            Log Out
          </StyledLogoutButton>
        </form>
      </FormControl>
    </>
  );
};
