import { FC, memo } from "react";
import { AvatarProps, Typography } from "@mui/material";
import { StyledAvatar, AvatarWrapper } from "../../styles";
import { useAppSelector } from "../../hooks/useAppSelector";
import { selectDisplayName } from "../../store/slices/user/userSlice";

type IProfileAvatar = AvatarProps & {
  color: string;
  isBig?: boolean;
  myVariant: "subtitle1" | "h4";
};

export const ProfileAvatar: FC<IProfileAvatar> = memo(
  ({ myVariant, isBig, color }) => {
    const [INITIALS, displayName] = useAppSelector(selectDisplayName);

    return (
      <AvatarWrapper>
        <StyledAvatar isBig={isBig}>{INITIALS}</StyledAvatar>
        <Typography color={color} variant={myVariant}>
          {displayName}
        </Typography>
      </AvatarWrapper>
    );
  },
);
