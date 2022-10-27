import {
  Divider,
  Icon,
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
  TableCell,
  Typography,
  Stack,
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

export const StyledSecondaryButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isEdit" && prop !== "isDelete",
})<{
  isEdit?: boolean;
  isDelete?: boolean;
}>(({ isEdit, isDelete }) => ({
  borderRadius: "2px",
  padding: "4px 47.5px",
  color: theme.palette.white,
  fontSize: "16px",
  lineHeight: "24.8px",
  fontWeight: 600,
  backgroundColor: isEdit
    ? theme.palette.green.lighter
    : isDelete
    ? theme.palette.red
    : theme.palette.black,
  textTransform: "none",
  "&:hover": {
    backgroundColor: isEdit
      ? theme.palette.green.lighter
      : isDelete
      ? theme.palette.red
      : theme.palette.black,
    color: isEdit || isDelete ? theme.palette.black : theme.palette.green.main,
  },
  "&:active": {
    opacity: 0.7,
    backgroundColor: isEdit
      ? theme.palette.green.lighter
      : isDelete
      ? theme.palette.red
      : theme.palette.black,
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
  shouldForwardProp: (prop) => prop !== "isBlack" && prop !== "weight",
})<{ isBlack?: boolean; weight?: number }>(
  ({ theme, isBlack, weight = 400 }) => ({
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
        opacity: isBlack ? 1 : 0.7,
        fontSize: "16px",
        lineHeight: "24.8px",
      },
    },
    "& .MuiInputBase-root": {
      color: isBlack ? theme.palette.black : theme.palette.white,
      fontWeight: weight,
      fontSize: "16px",
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
  }),
);

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

export const CategoryHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const SearchField = styled(TextField)(() => ({
  "&.MuiTextField-root": {
    borderColor: "red",
    "&:hover": {
      "&:after": {
        borderColor: "#1D283A !important",
      },
    },
    "&:after": {
      borderColor: "#1D283A !important",
    },
  },
  "&.InputDecoration": {
    borderColor: "red",
  },
  "& .MuiInputBase-root": {
    color: "black",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "21.7px",
    "&:before": {
      borderColor: "#1D283A !important",
    },
    "&:after": {
      borderColor: "#1D283A",
    },
    "&:hover": {
      "&:before": {
        borderColor: "#1D283A !important",
      },
      "&:after": {
        borderColor: "#1D283A !important",
      },
    },
    "&.Mui-focused": {
      "& .MuiIconButton-root": {
        display: "none",
      },
    },
  },
  input: {
    padding: "4px 0 0",
  },
  "& .MuiIconButton-root": {
    padding: "0px 5px 2px 0",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1rem",
  },
}));

export const CategoryWrapper = styled(Grid)(() => ({
  position: "relative",
  // width: "312px",
  // minHeight: "284px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  padding: "24px 16px 22px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const CategoryAvatar = styled(Box)(() => ({
  width: "40px",
  height: "40px",
  backgroundColor: "#F8E4B2",
  border: "1px solid #fff",
  borderRadius: "120px",
  marginBottom: "8px",
}));

export const CategoryTitle = styled(Typography)(() => ({
  color: "#000000",
  marginBottom: "42px",
}));

export const SliderWrapper = styled(Box)(() => ({
  backgroundColor: "#F08E5B",
  height: "9px",
  width: "280px",
  borderRadius: "4px",
  marginBottom: "8px",
  "&::before": {
    content: "''",
    borderRadius: "4px",
    height: "9px",
    display: "block",
    width: "40%",
    backgroundColor: "#539713",
  },
}));

export const CategoryPriceWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

export const ActionIcon = styled(Icon)(() => ({
  cursor: "pointer",
  position: "absolute",
  right: "14px",
  top: "7px",
  fontSize: "20px",
}));

export const StyledGridItem = styled(Grid)(() => ({
  "&.MuiGrid-item": {
    paddingLeft: "24px",
    paddingTop: "24px",
  },
}));

export const ActionButtons = styled(Stack)(() => ({
  position: "absolute",
  right: "14px",
}));

export const DashboardWrapper = styled(Box)(() => ({
  padding: "48px 24px 0 24px",
  display: "flex",
  minHeight: "100vh",
}));

export const DashboardLeftSide = styled(Box)(() => ({
  width: "760px",
}));

export const DashboardRightSide = styled(Box)(() => ({
  width: "calc(100% - 760px)",
}));

export const StyledDashboardHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "40px",
}));

export const CircledInfoCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isBig" && prop !== "bgColor",
})<{ isBig?: boolean; bgColor?: string }>(({ isBig, bgColor = "#fff" }) => ({
  width: isBig ? "48px" : "36px",
  height: isBig ? "48px" : "36px",
  marginRight: "16px",
  borderRadius: "100%",
  backgroundColor: bgColor,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const InfoCardWrapper = styled(Box)(() => ({
  display: "flex",
}));

export const ResultNumber = styled(Typography)(() => ({
  color: theme.palette.black,
  lineHeight: "30px",
}));

export const NewCategoryWrapper = styled(Box)(() => ({
  padding: "24px",
  borderRadius: "4px",
  backgroundColor: theme.palette.purple.lighter,
  width: "calc(100% - 426px)",
}));

export const AddImageBtn = styled("label")(() => ({
  border: `1px solid ${theme.palette.defaultBlack}`,
  padding: "13px 24px",
  borderRadius: "2px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "25px",
  backgroundColor: "transparent",
  color: theme.palette.black,
  textTransform: "none",
  marginBottom: theme.spacing(2),
  transition: "all 250ms",
  "&:hover": {
    transition: "all 250ms",
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.green.main}`,
    "& .MuiSvgIcon-root": {
      color: theme.palette.green.main,
    },
  },
  "&:active": {
    backgroundColor: "transparent",
    opacity: "0.7px",
    border: `1px solid ${theme.palette.green.lighter}`,
    "& .MuiSvgIcon-root": {
      color: theme.palette.black,
    },
  },
}));

export const ColorPickerWrapper = styled(Box)(() => ({
  width: "104px",
  "&:hover": {
    "& .MuiDivider-root": {
      borderColor: theme.palette.green.lighter,
    },
  },
}));

export const Picker = styled(Box)(() => ({
  width: "80px",
  height: "23px",
  marginLeft: "-7px",
  cursor: "pointer",
}));

export const ColorPickerBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: theme.spacing(0),
}));

export const NewTransactionWrapper = styled(Box)(() => ({
  padding: "24px",
  borderRadius: "4px",
  backgroundColor: theme.palette.violet,
  width: "426px",
}));

export const SelectWrapper = styled(FormControl)(() => ({
  "& .MuiFormLabel-root": {
    fontSize: "14px",
    lineHeight: "21.7px",
    color: theme.palette.black,
    fontWeight: 400,
  },
  "& .MuiInput-input": {
    color: theme.palette.black,
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24.8px",
  },
  "& .MuiSelect-select": {
    backgroundColor: "transparent !important",
  },
  "& .MuiInputBase-root": {
    backgroundColor: "transparent",

    "&::after": {
      borderBottom: `1px solid ${theme.palette.black} !important`,
    },
    "&::before": {
      borderBottom: `1px solid ${theme.palette.black} !important`,
    },
    "&:hover": {
      "&:before": {
        borderBottom: `1px solid ${theme.palette.black} !important`,
      },
      "&:after": {
        borderBottom: `1px solid ${theme.palette.black} !important`,
      },
    },
  },
}));

export const StyledTableCell = styled(TableCell)(() => ({
  color: theme.palette.black,
  opacity: 0.7,
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "18.6px",
  padding: "0px",
  border: "none",
}));

export const CircledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bgColor",
})<{ bgColor: string }>(({ bgColor }) => ({
  width: "16px",
  height: "16px",
  backgroundColor: bgColor,
  borderRadius: "100%",
  marginRight: "4px",
}));

export const StyledCategoryCell = styled(TableCell)(() => ({
  color: theme.palette.black,
  fontSize: "14px",
  lineHeight: "21.7px",
  paddingLeft: 0,
  backgroundColor: "rgba(212, 204, 241, 0.3)}",
  "& .MuiTableCell-root": {
    border: "none",
    padding: "10px",
  },
}));

export const IconWrapper = styled(Box)(() => ({
  color: theme.palette.black,
  "& .MuiSvgIcon-root": {
    width: "16px",
    height: "16px",
  },
}));
