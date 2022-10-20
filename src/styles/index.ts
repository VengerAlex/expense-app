import {
  Divider,
  Box,
  Paper,
  Avatar,
  Button,
  Checkbox,
  Grid,
  List,
  ListItem,
  styled,
  TextField,
  FormControl,
  Typography,
} from "@mui/material";
import { theme } from "../providers/ThemeProvider";

export const StyledPrimaryButton = styled(Button)<{ p?: string }>(
  ({ p = "9.5px 125.5px" }) => ({
    color: theme.palette.white,
    fontSize: "16px",
    lineHeight: "24.8px",
    fontWeight: 600,
    textTransform: "none",
    backgroundColor: theme.palette.green.main,
    border: "1px solid #539713",
    padding: p,
    "&:hover": {
      backgroundColor: theme.palette.green.main,
      border: `1px solid ${theme.palette.green.border}`,
    },
    "&:active": {
      border: `1px solid ${theme.palette.green.main}`,
      backgroundColor: theme.palette.green.lighter,
    },
    "&:disabled": {
      color: theme.palette.white,
      border: "1px solid transparent",
      backgroundColor: theme.palette.disabled,
    },
  }),
);

export const StyledLogoutButton = styled(Button)(() => ({
  backgroundColor: theme.palette.green.lighter,
  color: theme.palette.white,
  fontSize: "16px",
  lineHeight: "24.8px",
  fontWeight: 600,
  textTransform: "none",
  "&:hover": {
    backgroundColor: theme.palette.green.lighter,
  },
}));

export const StyledSecondaryButton = styled(Button)(() => ({
  color: theme.palette.white,
  fontSize: "16px",
  lineHeight: "24.8px",
  fontWeight: 600,
  backgroundColor: theme.palette.black,
  textTransform: "none",
  "&:hover": {
    backgroundColor: theme.palette.black,
    color: theme.palette.green.main,
  },
  "&:active": {
    opacity: 0.7,
    backgroundColor: theme.palette.black,
  },
  "&:disabled": {
    color: theme.palette.white,
    opacity: 0.7,
    backgroundColor: theme.palette.disabled,
  },
}));

export const StyledAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => prop !== "isBig",
})<{ isBig?: boolean }>(({ isBig }) => ({
  backgroundColor: isBig ? theme.palette.red : theme.palette.bgr,
  color: theme.palette.black,
  width: isBig ? "72px" : "32px",
  height: isBig ? "72px" : "32px",
  fontSize: isBig ? "24px" : "16px",
  fontWeight: "600",
  lineHeight: isBig ? "36px" : "24.8px",
  marginRight: "10px",
  border: isBig ? "3px solid transparent" : "1px solid transparent",
  transition: "all 150ms",
}));

export const AvatarWrapper = styled(Box)(() => ({
  marginTop: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
  "&:hover": {
    "& .MuiAvatar-root": {
      transition: "all 150ms",
      borderColor: theme.palette.green.main,
    },
  },
}));

export const StyledLabel = styled(Typography)(() => ({
  color: theme.palette.bgr,
  opacity: 0.8,
}));

export const StyledFormControl = styled(FormControl)(() => ({
  minWidth: "330px",
}));

export const StyledCheckbox = styled(Checkbox)(() => ({
  color: theme.palette.white,
  "&:checked": {
    color: theme.palette.green.main,
    "&::after": {
      backgroundColor: "red",
    },
  },
  "&:hover": {
    color: theme.palette.green.lighter,
  },
}));

type NotificationBoxProps = {
  light?: boolean;
};

export const StyledNotificationBox = styled(Box)<NotificationBoxProps>(
  ({ theme }) => ({
    color: theme.palette.white,
    maxWidth: "330px",
    borderRadius: "8px",
    backgroundColor: "transparent",
  }),
);

export const StyledInput = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "isBlack",
})<{ isBlack?: boolean }>(({ theme, isBlack }) => ({
  marginBottom: theme.spacing(1),
  "&.MuiTextField-root": {
    marginTop: "0px",
    borderColor: theme.palette.blue,
  },

  "& label": {
    fontSize: "14px",
    lineHeight: "21.7px",
    fontWeight: 400,
    color: isBlack ? theme.palette.black : theme.palette.white,
    "&.Mui-focused": {
      color: isBlack ? theme.palette.black : theme.palette.white,
    },

    "&.Mui-error": {
      color: isBlack ? theme.palette.black : theme.palette.white,
    },
  },
  "& .MuiFormHelperText-root": {
    marginTop: "12px",
    marginBottom: "5px",
    lineHeight: "0px",
    fontSize: "12px",
    color: theme.palette.red,
    "&.Mui-error": {
      color: theme.palette.red,
    },
  },
  input: {
    "&::placeholder": {
      color: isBlack ? theme.palette.black : theme.palette.white,
      fontWeight: 600,
      opacity: 0.7,
      fontSize: "16px",
      lineHeight: "24.8px",
    },
  },
  "& .MuiInputBase-root": {
    color: isBlack ? theme.palette.black : theme.palette.white,
    fontSize: "16px",
    opacity: 0.7,
    borderColor: isBlack ? theme.palette.black : theme.palette.white,
    "&:hover": {
      "&:not(.Mui-disabled)": {
        "&:before": {
          borderColor: theme.palette.green.lighter,
        },
      },
    },
    "&:before": {
      borderColor: isBlack ? theme.palette.black : theme.palette.white,
    },

    "&:after": {
      borderColor: isBlack ? theme.palette.black : theme.palette.white,
    },

    "&.Mui-focused": {
      "&:after": {
        borderColor: theme.palette.green.main,
      },
    },
    "& .MuiFormLabel-root": {
      color: isBlack ? theme.palette.black : theme.palette.white,
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24.8px",
    },
    "&.Mui-error": {
      color: theme.palette.red,
      "&:after": {
        borderColor: theme.palette.red,
      },
    },
  },
}));

export const StyledList = styled(List)(() => ({
  margin: "0 auto",
  textAlign: "center",
}));

export const StyledListItem = styled(ListItem)(() => ({
  cursor: "pointer",
}));

export const StyledListItemButton = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive?: boolean }>(({ isActive }) => ({
  transition: "all 250ms",
  padding: "10px 10px 4px 0",
  borderBottom: isActive
    ? `2px solid ${theme.palette.green.main}`
    : "2px solid transparent",
  display: "flex",
  "&:hover": {
    transition: "all 250ms",
    borderBottom: `2px solid ${theme.palette.white}`,
    "& .MuiSvgIcon-root": {
      color: theme.palette.white,
      opacity: `${isActive ? "1" : "0.7"}`,
    },
  },
  "&:active": {
    transition: "all 250ms",
    borderBottom: `2px solid ${theme.palette.green.main}`,
  },
  "& .MuiSvgIcon-root": {
    color: theme.palette.white,
    opacity: isActive ? "1" : "0.7",
  },
  "& .MuiTypography-root": {
    color: theme.palette.white,
    marginLeft: "-20px",
    fontWeight: `${isActive ? 600 : 300}`,
  },
}));

export const StyledDivider = styled(Divider)(() => ({
  backgroundColor: theme.palette.bgr,
  opacity: 0.3,
}));

export const StyledProvideWrapper = styled(Box)(() => ({
  margin: "0 auto",
}));

export const StyledBoxSettingsWrapper = styled(Box)(() => ({
  height: "calc(100vh - 140px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledNotifWrapper = styled(Paper)(() => ({
  padding: theme.spacing(4),
  borderRadius: "8px",
  backgroundColor: theme.palette.green.lighter,
  minWidth: "394px",
  minHeight: "369px",
  textAlign: "center",
}));

export const MainWrapper = styled(Box)(() => ({
  display: "flex",
  height: "100vh",
}));

export const MainContent = styled(Box)(() => ({
  width: "calc(100vw - 260px)",
  backgroundColor: theme.palette.bgr,
}));

export const StyledGridNavbar = styled(Grid)(() => ({
  backgroundColor: theme.palette.black,
  width: "260px",
  textAlign: "center",
  padding: "48px 0",
  display: "flex",
  flexDirection: "column",
}));
