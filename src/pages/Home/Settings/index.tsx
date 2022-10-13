import { FC, useState } from "react";
import { Typography, Box, Paper } from "@mui/material";
import { MainLayout } from "../../../components/MainLayout";
import { theme } from "../../../providers/ThemeProvider";
import { ExtendedSettings } from "./ExtendedSettings";
import { ROUTES, SETTINGS } from "../../../utils/types";
import { ProfileSettings } from "./ProfileSettings";
import { NotificationBox } from "../../../components/NotificationBox";
import { StyledBoxSettingsWrapper, StyledNotifWrapper } from "../../../styles";

export const Settings: FC = () => {
  const [currentComponent, setCurrentComponent] = useState(SETTINGS.EXTENDED);

  return (
    <MainLayout>
      <Box sx={{ p: "48px" }}>
        <Typography color={theme.palette.black} variant="h4">
          Profile Settings
        </Typography>
        <StyledBoxSettingsWrapper>
          {currentComponent === SETTINGS.EXTENDED && (
            <ExtendedSettings setCurrentComponent={setCurrentComponent} />
          )}
          {currentComponent === SETTINGS.PASSWORDS && (
            <ProfileSettings setCurrentComponent={setCurrentComponent} />
          )}
          {currentComponent === SETTINGS.NOTIFICATION && (
            <StyledNotifWrapper>
              <NotificationBox
                titleColor={theme.palette.black}
                navigateTo={ROUTES.HOME}
                btnTitle="Back to dashboard"
                title="your changes are saved"
              />
            </StyledNotifWrapper>
          )}
        </StyledBoxSettingsWrapper>
      </Box>
    </MainLayout>
  );
};
