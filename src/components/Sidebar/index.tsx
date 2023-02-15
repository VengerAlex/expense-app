import ArticleIcon from "@mui/icons-material/Article";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import { ListItemIcon, Typography, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import {
  StyledDivider,
  StyledGridNavbar,
  StyledList,
  StyledListItem,
  StyledListItemButton,
  StyledProvideWrapper,
} from "../../styles";
import { ROUTES } from "../../utils/types";
import { Logo } from "../Logo";
import { ProfileAvatar } from "../ProfileAvatar";

const LIST_ITEMS = [
  { text: "DashBoard", to: ROUTES.HOME, icon: <GridViewRoundedIcon /> },
  { text: "Analytics", to: ROUTES.ANALYTICS, icon: <AssessmentIcon /> },
  { text: "Categories", to: ROUTES.CATEGORIES, icon: <ArticleIcon /> },
  { text: "Settings", to: ROUTES.SETTINGS, icon: <SettingsIcon /> },
];

export const Sidebar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActivePage = (to: string) => pathname === to;

  return (
    <StyledGridNavbar>
      <Logo sx={{ mb: "160px" }} />
      <StyledList>
        {LIST_ITEMS.map((item) => (
          <StyledListItem key={item.text} disablePadding>
            <StyledListItemButton
              isActive={isActivePage(item.to)}
              onClick={() => navigate(item.to)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Typography variant="body2">{item.text}</Typography>
            </StyledListItemButton>
          </StyledListItem>
        ))}
      </StyledList>
      <StyledProvideWrapper sx={{ maxWidth: "132px", marginTop: "auto" }}>
        <StyledDivider />
        <ProfileAvatar
          isBig={false}
          myVariant="subtitle1"
          color={theme.palette.white}
        />
      </StyledProvideWrapper>
    </StyledGridNavbar>
  );
};
