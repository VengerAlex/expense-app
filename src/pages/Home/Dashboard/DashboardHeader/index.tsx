import { InfoCard } from "../../../../components/InfoCard";
import WorkIcon from "@mui/icons-material/Work";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DescriptionIcon from "@mui/icons-material/Description";
import { StyledDashboardHeader } from "../../../../styles";
import { useTheme } from "@mui/material";

export const DashboardHeader = () => {
  const theme = useTheme();

  const INFO_CARDS = [
    {
      isBig: true,
      number: "2,00,874",
      bgColor: theme.palette.green.lighter,
      iconColor: theme.palette.green.main,
      icon: <WorkIcon />,
    },
    {
      isBig: true,
      number: "5,34,888",
      bgColor: theme.palette.lightOrange,
      iconColor: theme.palette.orange,
      icon: <ShoppingCartIcon />,
    },
    {
      isBig: true,
      number: "1235",
      bgColor: theme.palette.violet,
      iconColor: theme.palette.purple,
      icon: <DescriptionIcon />,
    },
  ];

  return (
    <StyledDashboardHeader>
      {INFO_CARDS.map((cardItem) => (
        <InfoCard
          isBig={cardItem.isBig}
          number={cardItem.number}
          bgColor={cardItem.bgColor}
          iconColor={cardItem.iconColor}
          icon={cardItem.icon}
        />
      ))}
    </StyledDashboardHeader>
  );
};
