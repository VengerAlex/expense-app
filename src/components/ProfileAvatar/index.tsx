import { FC } from "react";
import { AvatarProps, Typography } from "@mui/material";
import { StyledBoxFlex, StyledAvatar } from "../../styles";
import { theme } from "../../providers/ThemeProvider";

type IProfileAvatar = AvatarProps & {
  color: string;
  bgColor: string;
  myVariant: "subtitle1" | "h4";
  circleText: "h5" | "h4";
};

export const ProfileAvatar: FC<IProfileAvatar> = ({
  myVariant,
  color,
  bgColor,
  circleText,
  ...props
}) => {
  return (
    <StyledBoxFlex>
      <StyledAvatar bgColor={bgColor} {...props}>
        <Typography color={theme.palette.black} variant={circleText}>
          OV
        </Typography>
      </StyledAvatar>
      <Typography color={color} variant={myVariant}>
        Olexander Venger
      </Typography>
    </StyledBoxFlex>
  );
};
