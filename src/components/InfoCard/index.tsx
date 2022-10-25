import { FC } from "react";
import { Stack, Typography, useTheme, Box } from "@mui/material";
import { CircledInfoCard, InfoCardWrapper, ResultNumber } from "../../styles";

interface IInfoCard {
  isBig?: boolean;
  bgColor?: string;
  number: string | number;
  iconColor: string;
  icon: any;
  title: string;
}

export const InfoCard: FC<IInfoCard> = ({
  number,
  isBig = false,
  bgColor,
  iconColor,
  icon,
  title,
}) => {
  const theme = useTheme();

  return (
    <InfoCardWrapper>
      <CircledInfoCard bgColor={bgColor} isBig={isBig}>
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
