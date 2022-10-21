import { FC } from "react";
import { AvatarProps, Typography } from "@mui/material";
import { StyledAvatar, AvatarWrapper } from "../../styles";
import { userSelector } from "../../store/slices/user/userSlice";
import { useAppSelector } from "../../hooks/useAppSelector";

type IProfileAvatar = AvatarProps & {
  color: string;
  isBig?: boolean;
  myVariant: "subtitle1" | "h4";
};

export const ProfileAvatar: FC<IProfileAvatar> = ({
  myVariant,
  isBig,
  color,
}) => {
  const { user } = useAppSelector(userSelector);

  const INITIALS = user?.displayName
    ?.split(" ")
    .map((value) => value[0])
    .join("");

  return (
    <AvatarWrapper>
      <StyledAvatar isBig={isBig}>{INITIALS}</StyledAvatar>
      <Typography color={color} variant={myVariant}>
        {user && user?.displayName}
      </Typography>
    </AvatarWrapper>
  );
};
