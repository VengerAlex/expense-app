import { FC, useState } from "react";
import { Box, Typography } from "@mui/material";
import { MainLayout } from "../../../components/MainLayout";
import { ROUTES, SETTINGS } from "../../../utils/types";
import { theme } from "../../../providers/ThemeProvider";
import { ExtendedSettings } from "./ExtendedSettings";
import { StyledBoxSettingsWrapper, StyledNotifWrapper } from "../../../styles";
import { ProfileSettings } from "./ProfileSettings";
import { NotificationBox } from "../../../components/NotificationBox";

interface ISettings {}
export const Settings: FC<ISettings> = () => {
  const [currentComponent, setCurrentComponent] = useState(SETTINGS.EXTENDED);

  return (
    <MainLayout>
      <Box sx={{ p: "48px" }}>
        {currentComponent !== SETTINGS.NOTIFICATION && (
          <Typography color={theme.palette.black} variant="h4">
            Profile Settings
          </Typography>
        )}
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
                onClick={() => setCurrentComponent(SETTINGS.EXTENDED)}
                navigateTo={ROUTES.HOME}
                btnTitle="Back to dashboard"
                title="your changes are saved"
                p="9.5px 82px"
              />
            </StyledNotifWrapper>
          )}
        </StyledBoxSettingsWrapper>
      </Box>
    </MainLayout>
  );
};
