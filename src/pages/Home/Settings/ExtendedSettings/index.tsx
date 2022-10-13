import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { FormControl } from "@mui/material";
import Input from "../../../../components/Input";
import { showErrorText } from "../../../../utils/types";
import { extendedSettingsSchema } from "../../../../utils/schema";
import { StyledPrimaryButton, StyledSecondaryButton } from "../../../../styles";

interface IExtendedSettingsForm {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: string;
}

interface IExtendedSettings {}
export const ExtendedSettings: FC<IExtendedSettings> = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<IExtendedSettingsForm>({
    mode: "onChange",
    resolver: yupResolver(extendedSettingsSchema),
  });

  return (
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
        <StyledSecondaryButton disableRipple sx={{ mb: 4 }}>
          Reset Password
        </StyledSecondaryButton>
        <StyledPrimaryButton disabled={!isValid}>
          Save Changes
        </StyledPrimaryButton>
      </form>
    </FormControl>
  );
};
