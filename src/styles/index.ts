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
  ListItemButton,
  ListItemIcon,
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
    fontSize: "16px",
    lineHeight: "24.8px",
    fontWeight: 600,
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
    borderRadius: light ? "8px" : "0px",
    backgroundColor: light ? theme.palette.green.lighter : "transparent",
  }),
);

export const StyledInput = styled(TextField)<{ isBlack?: boolean }>(
  ({ isBlack }) => ({
    marginBottom: "15px",
    "& .MuiFormHelperText-root": {
      fontSize: "12px",
      color: theme.palette.red,
    },
    "& .MuiInputBase-root": {
      color: isBlack ? theme.palette.black : theme.palette.white,
      fontSize: "16px",
      opacity: 0.7,
      "&.Mui-error": {
        color: theme.palette.red,
      },
    },
    "& .MuiFormLabel-root": {
      color: isBlack ? theme.palette.black : theme.palette.white,
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24.8px",
    },
    "& .MuiInput-root:after": {
      borderBottom: `2px solid ${theme.palette.green.border}`,
    },
    "& .MuiInput-root": {
      borderBottom: `2px solid ${
        isBlack ? theme.palette.black : theme.palette.white
      }`,
      "&.Mui-focused:not(.Mui-error)": {
        borderBottom: "2px solid transparent",
      },
      "&.Mui-error": {
        borderBottom: `2px solid ${theme.palette.red}`,
      },
    },
    "& .MuiInputLabel-root": {
      "&.Mui-focused": {
        color: isBlack ? theme.palette.black : theme.palette.white,
      },
    },
  }),
);

export const StyledGridNavbar = styled(Grid)(() => ({
  backgroundColor: theme.palette.black,
  textAlign: "center",
  padding: "48px 0",
  display: "flex",
  flexDirection: "column",
}));

export const StyledList = styled(List)(() => ({
  margin: "0 auto",
  textAlign: "center",
}));

type StyledListItemProps = {
  isActive?: boolean;
};

export const StyledListItem = styled(ListItem)<StyledListItemProps>(
  ({ isActive }) => ({
    borderBottom: isActive
      ? `2px solid ${theme.palette.green.main}`
      : "2px solid transparent",
    transition: "all 250ms",
    "&:hover": {
      transition: "all 250ms",
      borderBottom: `2px solid ${theme.palette.white}`,
    },
    "&:active": {
      borderBottom: `2px solid ${theme.palette.green.main}`,
    },
  }),
);

export const StyledListItemIcon = styled(ListItemIcon)(() => ({
  color: theme.palette.white,
  opacity: 0.7,
}));

export const StyledListItemButton = styled(ListItemButton)(() => ({
  paddingLeft: 0,
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

export const StyledMenu = styled(Typography)(() => ({
  color: theme.palette.white,
  marginLeft: "-20px",
  fontWeight: 300,
}));

export const StyledDivider = styled(Divider)(() => ({
  backgroundColor: theme.palette.bgr,
  opacity: 0.3,
}));

export const StyledProvideWrapper = styled(Box)(() => ({
  margin: "0 auto",
}));

export const StyledAvatar = styled(Avatar)<{ bgColor?: string }>(
  ({ bgColor }) => ({
    backgroundColor: bgColor,
    color: theme.palette.black,
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24.8px",
    marginRight: "10px",
  }),
);

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
