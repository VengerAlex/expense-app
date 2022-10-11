import {
  Box,
  Button,
  Checkbox,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { theme } from "../providers/ThemeProvider";

export const StyledPrimaryButton = styled(Button)(() => ({
  color: theme.palette.white,
  backgroundColor: theme.palette.green.main,
  border: "1px solid #539713",
  textTransform: "none",
  padding: "9.5px 161.5px",
  margin: "24px 0",
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
}));

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

export const StyledCheckbox = styled(Checkbox)(() => ({
  color: theme.palette.bgr,
  "&:checked": {
    color: theme.palette.green.main,
  },
  "&:hover": {
    color: theme.palette.green.lighter,
  },
}));

export const StyledInput = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    color: theme.palette.white,
    fontSize: "16px",
    opacity: 0.7,
  },
  "& .MuiFormLabel-root": {
    color: theme.palette.white,
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24.8px",
  },
  "& .MuiFocused": {
    color: "red",
  },
  "& .MuiInput-root:after": {
    borderBottom: `2px solid ${theme.palette.green.border}`,
  },
}));
// MuiInput-root:after
