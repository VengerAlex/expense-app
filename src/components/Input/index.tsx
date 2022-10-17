import { FC, FormEvent, useState } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { IconButton, InputAdornment, TextFieldProps } from "@mui/material";
import { StyledInput } from "../../styles";

type IInput = TextFieldProps & {
  isPassword?: boolean;
  isResetPassword?: boolean;
  control: any;
  formName: string;
};

const Input: FC<IInput> = ({
  isPassword = false,
  isResetPassword = false,
  formName,
  control,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    if (isResetPassword) {
      event.preventDefault();
    }
  };

  return (
    <StyledInput
      {...control.register(formName)}
      {...props}
      InputLabelProps={{ shrink: true }}
      onCopy={handleChange}
      onPaste={handleChange}
      name={formName}
      type={!isPassword ? "text" : showPassword ? "text" : "password"}
      variant="standard"
      InputProps={
        isPassword
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{ color: "#fff" }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <RemoveRedEyeOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
    />
  );
};

export default Input;
