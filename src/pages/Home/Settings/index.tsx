import { FC, ReactElement, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { MainLayout } from "../../../components/MainLayout";
import { ROUTES, SETTINGS } from "../../../utils/types";
import { ExtendedSettings } from "./ExtendedSettings";
import { StyledBoxSettingsWrapper, StyledNotifWrapper } from "../../../styles";
import { ProfileSettings } from "./ProfileSettings";
import { NotificationBox } from "../../../components/NotificationBox";

type ISteps = Record<
  SETTINGS,
  { showTitle?: boolean; component: ReactElement }
>;

export const Settings: FC = () => {
  const theme = useTheme();

  const [currentComponent, setCurrentComponent] = useState<SETTINGS>(
    SETTINGS.EXTENDED,
  );

  const STEPS: ISteps = {
    [SETTINGS.EXTENDED]: {
      showTitle: true,
      component: <ExtendedSettings setCurrentComponent={setCurrentComponent} />,
    },
    [SETTINGS.PASSWORDS]: {
      showTitle: true,
      component: <ProfileSettings setCurrentComponent={setCurrentComponent} />,
    },
    [SETTINGS.NOTIFICATION]: {
      showTitle: true,
      component: (
        <StyledNotifWrapper>
          <NotificationBox
            color={theme.palette.black}
            navigateTo={ROUTES.HOME}
            btnTitle="Back to dashboard"
            title="your changes are saved"
            p="6px 82px"
          />
        </StyledNotifWrapper>
      ),
    },
  };

  return (
    <MainLayout>
      <Box sx={{ p: "48px" }}>
        {STEPS[currentComponent].showTitle && (
          <Typography color={theme.palette.black} variant="h4">
            Profile Settings
          </Typography>
        )}
        <StyledBoxSettingsWrapper>
          {STEPS[currentComponent].component}
        </StyledBoxSettingsWrapper>
      </Box>
    </MainLayout>
  );
};
