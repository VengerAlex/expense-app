import { FC } from "react";

import { Box, Stack, Typography, useTheme } from "@mui/material";

import { CircledInfoCard, InfoCardWrapper, ResultNumber } from "../../styles";
import { INFO_CARD_SIZE } from "../../utils/types";

interface IInfoCard {
  size: INFO_CARD_SIZE;
  bgColor?: string;
  number: string | number;
  iconColor: string;
  icon: any;
  title: string;
}

export const InfoCard: FC<IInfoCard> = ({
  number,
  size,
  bgColor,
  iconColor,
  icon,
  title,
}) => {
  const theme = useTheme();

  return (
    <InfoCardWrapper>
      <CircledInfoCard bgColor={bgColor} size={size}>
        <Box sx={{ marginBottom: "-6px", color: iconColor }}>{icon}</Box>
      </CircledInfoCard>
      <Stack>
        <ResultNumber variant="h4">{number}</ResultNumber>
        <Typography variant="subtitle2" color={theme.palette.black}>
          {title}
        </Typography>
      </Stack>
    </InfoCardWrapper>
  );
};
