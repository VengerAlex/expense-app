import { FC, FormEvent, useState } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import {
  IconButton,
  InputAdornment,
  TextFieldProps,
  useTheme,
} from "@mui/material";
import { StyledInput } from "../../styles";

type IInput = TextFieldProps & {
  isPassword?: boolean;
  isResetPassword?: boolean;
  control: any;
  isBlack?: boolean;
  formName: string;
};

const Input: FC<IInput> = ({
  isPassword = false,
  isResetPassword = false,
  formName,
  control,
  isBlack = false,
  ...props
}) => {
  const theme = useTheme();
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
      isBlack={isBlack}
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
                    sx={{
                      color: isBlack
                        ? theme.palette.black
                        : theme.palette.white,
                    }}
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
