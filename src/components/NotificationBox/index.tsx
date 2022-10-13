import { useNavigate } from "react-router-dom";
import { Box, BoxProps, Typography } from "@mui/material";
import illustrationImage from "../../assets/images/ilustration.png";
import { StyledNotificationBox, StyledPrimaryButton } from "../../styles";

type INotificationBoxProps = BoxProps & {
  title: string;
  btnTitle: string;
  navigateTo: string;
  titleColor?: string;
};

export const NotificationBox = ({
  title,
  titleColor,
  navigateTo,
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
        pb="24px"
        component="img"
        alt="notification-image"
        src={illustrationImage}
      />
      <Typography
        pb="24px"
        variant="h5"
        sx={{ maxWidth: "267px", m: "0 auto", color: titleColor }}
      >
        {title}
      </Typography>
      <StyledPrimaryButton onClick={navigateToHandler}>
        {btnTitle}
      </StyledPrimaryButton>
    </StyledNotificationBox>
  );
};
