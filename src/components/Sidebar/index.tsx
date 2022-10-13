import { useLocation, useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import { Analytics, Dashboard } from "@mui/icons-material";
import { Logo } from "../Logo";
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
import { ROUTES } from "../../utils/types";
import { ProfileAvatar } from "../ProfileAvatar";
import { theme } from "../../providers/ThemeProvider";

const LIST_ITEMS = [
  { text: "DashBoard", to: ROUTES.HOME, icon: <Dashboard /> },
  { text: "Analytics", to: ROUTES.ANALYTICS, icon: <Analytics /> },
  { text: "Categories", to: ROUTES.CATEGORIES, icon: <SettingsIcon /> },
  { text: "Settings", to: ROUTES.SETTINGS, icon: <SettingsIcon /> },
];

export const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActivePage = (to: string) => pathname === to;

  return (
    <StyledGridNavbar xs={2} item>
      <Logo sx={{ mb: "160px" }} />
      <StyledList sx={{ mb: "340px" }}>
        {LIST_ITEMS.map((item) => (
          <StyledListItem
            isActive={isActivePage(item.to)}
            key={item.text}
            disablePadding
          >
            <StyledListItemButton
              disableRipple
              onClick={() => navigate(item.to)}
            >
              <StyledListItemIcon>{item.icon}</StyledListItemIcon>
              <StyledMenu variant="body2">{item.text}</StyledMenu>
            </StyledListItemButton>
          </StyledListItem>
        ))}
      </StyledList>
      <StyledProvideWrapper sx={{ maxWidth: "132px" }}>
        <StyledDivider />
        <ProfileAvatar
          sx={{ width: "32px", height: "32px" }}
          circleText="h5"
          myVariant="subtitle1"
          color={theme.palette.white}
          bgColor={theme.palette.white}
        />
      </StyledProvideWrapper>
    </StyledGridNavbar>
  );
};
