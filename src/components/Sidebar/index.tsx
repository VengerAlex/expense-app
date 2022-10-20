import { useLocation, useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ArticleIcon from "@mui/icons-material/Article";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { theme } from "../../providers/ThemeProvider";
import { ProfileAvatar } from "../ProfileAvatar";
import { ROUTES } from "../../utils/types";
import {
  StyledDivider,
  StyledGridNavbar,
  StyledList,
  StyledListItem,
  StyledListItemButton,
  StyledListItemIcon,
  StyledMenu,
  StyledProvideWrapper,
} from "../../styles";
import { Logo } from "../Logo";

const LIST_ITEMS = [
  { text: "DashBoard", to: ROUTES.HOME, icon: <GridViewRoundedIcon /> },
  { text: "Analytics", to: ROUTES.ANALYTICS, icon: <AssessmentIcon /> },
  { text: "Categories", to: ROUTES.CATEGORIES, icon: <ArticleIcon /> },
  { text: "Settings", to: ROUTES.SETTINGS, icon: <SettingsIcon /> },
];

export const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActivePage = (to: string) => pathname === to;

  return (
    <StyledGridNavbar>
      <Logo sx={{ mb: "160px" }} />
      <StyledList sx={{ pb: "340px" }}>
        {LIST_ITEMS.map((item) => (
          <StyledListItem key={item.text} disablePadding>
            <StyledListItemButton
              isActive={isActivePage(item.to)}
              onClick={() => navigate(item.to)}
            >
              <StyledListItemIcon isActive={isActivePage(item.to)}>
                {item.icon}
              </StyledListItemIcon>
              <StyledMenu isActive={isActivePage(item.to)} variant="body2">
                {item.text}
              </StyledMenu>
            </StyledListItemButton>
          </StyledListItem>
        ))}
      </StyledList>
      <StyledProvideWrapper sx={{ maxWidth: "132px" }}>
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
