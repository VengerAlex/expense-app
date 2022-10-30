import { FC, FormEvent, useState } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {
  IconButton,
  InputAdornment,
  TextFieldProps,
  useTheme,
} from "@mui/material";
import { StyledInput } from "../../styles";

type IInput = TextFieldProps & {
  isPassword?: boolean;
  isNumber?: boolean;
  isResetPassword?: boolean;
  control?: any;
  isBlack?: boolean;
  formName?: string;
  weight?: number;
};

const Input: FC<IInput> = ({
  isPassword = false,
  isNumber = false,
  isResetPassword = false,
  formName,
  control,
  weight,
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

  const isRegister = control && { ...control.register(formName) };

  return (
    <StyledInput
      {...isRegister}
      {...props}
      weight={weight}
      isBlack={isBlack}
      InputLabelProps={{ shrink: true }}
      onCopy={handleChange}
      onPaste={handleChange}
      name={formName}
      type={
        isNumber
          ? "number"
          : !isPassword
          ? "text"
          : showPassword
          ? "text"
          : "password"
      }
      variant="standard"
      InputProps={
        isPassword || isNumber
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  {isPassword && (
                    <IconButton
                      disableRipple
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
                  )}
                  {isNumber && (
                    <IconButton
                      sx={{ color: theme.palette.black }}
                      disableRipple
                    >
                      {isNumber && <AttachMoneyIcon />}
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }
          : null
      }
    />
  );
};

export default Input;
