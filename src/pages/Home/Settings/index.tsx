import { FC } from "react";
import { Typography, Box } from "@mui/material";
import { MainLayout } from "../../../components/MainLayout";
import { theme } from "../../../providers/ThemeProvider";
import { StyledBoxSettingsWrapper } from "../../../styles";
import { ProfileAvatar } from "../../../components/ProfileAvatar";
import { ExtendedSettings } from "./ExtendedSettings";

export const Settings: FC = () => {
  return (
    <MainLayout>
      <Box sx={{ p: "48px" }}>
        <Typography color={theme.palette.black} variant="h4">
          Profile Settings
        </Typography>
        <StyledBoxSettingsWrapper>
          <ProfileAvatar
            sx={{ width: "72px", height: "72px" }}
            circleText="h4"
            myVariant="h4"
            color={theme.palette.black}
            bgColor={theme.palette.red}
          />
          <ExtendedSettings />
        </StyledBoxSettingsWrapper>
      </Box>
    </MainLayout>
  );
};
