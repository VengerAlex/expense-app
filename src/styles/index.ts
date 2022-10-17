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
  FormControl,
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
      color: theme.palette.white,
      border: "1px solid transparent",
      backgroundColor: theme.palette.disabled,
    },
  }),
);

enum btnVariant {
  PRIMARY,
  SECONDARY,
}

interface IBtnProps {
  variant: btnVariant;
}

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
  ({ theme, light = false }) => ({
    color: light ? theme.palette.black : theme.palette.white,
    maxWidth: "330px",
    height: "381px",
    borderRadius: light ? "8px" : "0px",
    backgroundColor: light ? theme.palette.green.lighter : "transparent",
  }),
);

export const StyledInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  "&.MuiTextField-root": {
    marginTop: "0px",
    borderColor: theme.palette.blue,
  },

  "& label": {
    fontSize: "14px",
    lineHeight: "21.7px",
    fontWeight: 400,
    color: theme.palette.white,
    "&.Mui-focused": {
      color: theme.palette.white,
    },

    "&.Mui-error": {
      color: theme.palette.white,
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
      color: theme.palette.white,
      fontWeight: 600,
      opacity: 0.7,
      fontSize: "16px",
      lineHeight: "24.8px",
    },
  },
  "& .MuiInputBase-root": {
    color: theme.palette.white,
    fontSize: "16px",
    opacity: 0.7,
    borderColor: theme.palette.white,
    "&:hover": {
      "&:not(.Mui-disabled)": {
        "&:before": {
          borderColor: theme.palette.green.lighter,
        },
      },
    },
    "&:before": {
      borderColor: theme.palette.white,
    },

    "&:after": {
      borderColor: theme.palette.white,
    },

    "&.Mui-focused": {
      "&:after": {
        borderColor: theme.palette.green.main,
      },
    },
    "& .MuiFormLabel-root": {
      color: theme.palette.white,
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
