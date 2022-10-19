import { FC } from "react";
import { AvatarProps, Typography } from "@mui/material";
import { StyledBoxFlex, StyledAvatar } from "../../styles";
import { theme } from "../../providers/ThemeProvider";
import { getUserSelector } from "../../store/slices/user/userSlice";
import { useAppSelector } from "../../hooks/useAppSelector";

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
  const { user } = useAppSelector(getUserSelector);

  const INITIALS = user?.displayName
    .split(" ")
    .map((value) => value[0])
    .join("");

  return (
    <StyledBoxFlex>
      <StyledAvatar bgColor={bgColor} {...props}>
        <Typography color={theme.palette.black} variant={circleText}>
          {INITIALS}
        </Typography>
      </StyledAvatar>
      <Typography color={color} variant={myVariant}>
        {user?.displayName}
      </Typography>
    </StyledBoxFlex>
  );
};
