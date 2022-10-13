import { FC, useState } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import { IconButton, InputAdornment, TextFieldProps } from "@mui/material";
import { StyledInput } from "../../styles";

type IInput = TextFieldProps & {
  isPassword?: boolean;
  control: any;
  isBlack?: boolean;
  formName: string;
};

const Input: FC<IInput> = ({
  isPassword = false,
  formName,
  control,
  isBlack,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <StyledInput
      {...control.register(formName)}
      {...props}
      isBlack={isBlack}
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
