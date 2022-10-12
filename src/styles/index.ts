import {
  Box,
  Button,
  Checkbox,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { theme } from "../providers/ThemeProvider";

type PropsButton = {
  p?: string;
};

export const StyledPrimaryButton = styled(Button)<PropsButton>(
  ({ p = "9.5px 125.5px" }) => ({
    color: theme.palette.white,
    backgroundColor: theme.palette.green.main,
    border: "1px solid #539713",
    textTransform: "none",
    padding: p,
    "&:hover": {
      backgroundColor: theme.palette.green.main,
      border: `1px solid ${theme.palette.green.border}`,
    },
    "&:active": {
      border: `1px solid ${theme.palette.green.main}`,
      backgroundColor: theme.palette.green.main,
    },
    "&:disabled": {
      border: "none",
      backgroundColor: theme.palette.disabled,
    },
  }),
);

export const StyledBoxFlex = styled(Box)(() => ({
  marginTop: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const StyledLabel = styled(Typography)(() => ({
  color: theme.palette.bgr,
  opacity: 0.8,
}));

export const ErrorMessage = styled(Typography)(() => ({
  fontSize: "14px",
  alignItems: "center",
  margin: "0 auto 10px",
  color: theme.palette.red,
}));

export const StyledCheckbox = styled(Checkbox)(() => ({
  color: theme.palette.bgr,
  "&:checked": {
    color: theme.palette.green.main,
  },
  "&:hover": {
    color: theme.palette.green.lighter,
  },
}));

type NotificationBoxProps = {
  light?: boolean;
};

export const StyledNotificationBox = styled(Box)<NotificationBoxProps>(
  ({ theme, light = false }) => ({
    color: light ? theme.palette.black : theme.palette.white,
    maxWidth: "330px",
    height: "381px",
    borderRadius: light ? "8px" : "0px",
    backgroundColor: light ? theme.palette.green.lighter : "transparent",
  }),
);

export const StyledInput = styled(TextField)(() => ({
  marginBottom: "15px",
  "& .MuiFormHelperText-root": {
    fontSize: "12px",
    color: theme.palette.red,
  },
  "& .MuiInputBase-root": {
    color: theme.palette.white,
    fontSize: "16px",
    opacity: 0.7,
    "&.Mui-error": {
      color: theme.palette.red,
    },
  },
  "& .MuiFormLabel-root": {
    color: theme.palette.white,
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24.8px",
  },
  "& .MuiInput-root:after": {
    borderBottom: `2px solid ${theme.palette.green.border}`,
  },
  "& .MuiInput-root": {
    borderBottom: `2px solid ${theme.palette.white}`,
    "&.Mui-focused:not(.Mui-error)": {
      borderBottom: "2px solid transparent",
    },
    "&.Mui-error": {
      borderBottom: `2px solid ${theme.palette.red}`,
    },
  },
  "& .MuiInputLabel-root": {
    "&.Mui-focused": {
      color: theme.palette.white,
    },
  },
}));
