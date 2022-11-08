import { Box, BoxProps, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import illustrationImage from "../../assets/images/ilustration.png";
import { StyledNotificationBox, StyledPrimaryButton } from "../../styles";

type INotificationBoxProps = BoxProps & {
  title: string;
  btnTitle: string;
  color?: string;
  p?: string;
  navigateTo: string;
};

export const NotificationBox = ({
  title,
  navigateTo,
  color,
  p,
  btnTitle,
  ...props
}: INotificationBoxProps) => {
  const navigate = useNavigate();

  const navigateToHandler = () => {
    navigate(navigateTo);
  };

  return (
    <StyledNotificationBox {...props}>
      <Box
        pb={3}
        component="img"
        alt="notification-image"
        src={illustrationImage}
      />
      <Typography
        color={color}
        pb={3}
        variant="h5"
        sx={{ maxWidth: "267px", m: "0 auto" }}
      >
        {title}
      </Typography>
      <StyledPrimaryButton p={p} onClick={navigateToHandler}>
        {btnTitle}
      </StyledPrimaryButton>
    </StyledNotificationBox>
  );
};
