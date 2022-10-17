import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { FormControl } from "@mui/material";
import Input from "../../../../components/Input";
import { SETTINGS } from "../../../../utils/types";
import { extendedSettingsSchema } from "../../../../utils/schema";
import { StyledPrimaryButton, StyledSecondaryButton } from "../../../../styles";
import { ProfileAvatar } from "../../../../components/ProfileAvatar";
import { theme } from "../../../../providers/ThemeProvider";
import { showErrorText } from "../../../../utils/helpers";

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
  const {
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<IExtendedSettingsForm>({
    mode: "onChange",
    resolver: yupResolver(extendedSettingsSchema),
  });
  const { fullName, userName, phoneNumber } = getValues();

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
            isBlack
            formName="fullName"
            label="Full Name"
          />
          <Input
            helperText={showErrorText(errors, "userName", userName)}
            error={!!errors.userName && !!userName}
            control={control}
            placeholder="Arafat1488"
            isBlack
            formName="userName"
            label="UserName"
          />
          <Input
            helperText={showErrorText(errors, "phoneNumber", phoneNumber)}
            error={!!errors.phoneNumber && !!phoneNumber}
            control={control}
            placeholder="380937654671"
            isBlack
            formName="phoneNumber"
            label="Phone Number"
          />
          <StyledPrimaryButton disabled={!isValid} sx={{ mb: 4 }}>
            Save Changes
          </StyledPrimaryButton>
          <StyledSecondaryButton
            onClick={() => setCurrentComponent(SETTINGS.PASSWORDS)}
            disableRipple
          >
            Reset Password
          </StyledSecondaryButton>
        </form>
      </FormControl>
    </>
  );
};
