import { FC } from "react";
import { Box, CircularProgress, useTheme } from "@mui/material";

interface IProgress {}
export const Progress: FC<IProgress> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <CircularProgress sx={{ color: theme.palette.black }} />
    </Box>
  );
};
