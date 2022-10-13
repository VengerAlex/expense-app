import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { FormControl } from "@mui/material";
import Input from "../../../../components/Input";
import { SETTINGS, showErrorText } from "../../../../utils/types";
import { extendedSettingsSchema } from "../../../../utils/schema";
import { StyledPrimaryButton, StyledSecondaryButton } from "../../../../styles";
import { ProfileAvatar } from "../../../../components/ProfileAvatar";
import { theme } from "../../../../providers/ThemeProvider";

interface IExtendedSettingsForm {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
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
    formState: { errors, isValid },
  } = useForm<IExtendedSettingsForm>({
    mode: "onChange",
    resolver: yupResolver(extendedSettingsSchema),
  });

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
            helperText={showErrorText(errors, "firstName")}
            isBlack={true}
            error={!!errors.firstName}
            control={control}
            formName="firstName"
            label="First Name"
          />
          <Input
            isBlack={true}
            helperText={showErrorText(errors, "lastName")}
            error={!!errors.firstName}
            control={control}
            formName="lastName"
            label="Last Name"
          />
          <Input
            isBlack={true}
            helperText={showErrorText(errors, "userName")}
            error={!!errors.firstName}
            control={control}
            formName="userName"
            label="User Name"
          />
          <Input
            isBlack={true}
            helperText={showErrorText(errors, "email")}
            error={!!errors.firstName}
            control={control}
            formName="email"
            label="Email"
          />
          <Input
            isBlack={true}
            helperText={showErrorText(errors, "phoneNumber")}
            error={!!errors.firstName}
            control={control}
            formName="phoneNumber"
            label="Phone Number"
          />
          <StyledSecondaryButton
            onClick={() => setCurrentComponent(SETTINGS.PASSWORDS)}
            disableRipple
            sx={{ mb: 4 }}
          >
            Reset Password
          </StyledSecondaryButton>
          <StyledPrimaryButton disabled={!isValid}>
            Save Changes
          </StyledPrimaryButton>
        </form>
      </FormControl>
    </>
  );
};
