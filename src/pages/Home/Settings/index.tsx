import { FC, useState } from "react";
import { Typography, Box } from "@mui/material";
import { MainLayout } from "../../../components/MainLayout";
import { SETTINGS } from "../../../utils/types";
import { theme } from "../../../providers/ThemeProvider";
import { ExtendedSettings } from "./ExtendedSettings";
import { StyledBoxSettingsWrapper } from "../../../styles";
import { ProfileSettings } from "./ProfileSettings";

interface ISettings {}
export const Settings: FC<ISettings> = () => {
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
        </StyledBoxSettingsWrapper>
      </Box>
    </MainLayout>
  );
};
