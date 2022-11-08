import { InfoCard } from "../../../../components/InfoCard";
import WorkIcon from "@mui/icons-material/Work";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DescriptionIcon from "@mui/icons-material/Description";
import { StyledDashboardHeader } from "../../../../styles";
import { useTheme } from "@mui/material";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { transactionSelector } from "../../../../store/slices/transaction/transactionSlice";
import { formatNumber } from "../../../../utils/helpers";
import { INFO_CARD_SIZE } from "../../../../utils/types";

export const DashboardHeader = () => {
  const theme = useTheme();
  const { totalReceipt, totalExpense, transactions } =
    useAppSelector(transactionSelector);

  const INFO_CARDS = [
    {
      size: INFO_CARD_SIZE.SM,
      number: formatNumber(totalReceipt),
      bgColor: theme.palette.green.lighter,
      iconColor: theme.palette.green.main,
      title: "Total Receipt",
      icon: <WorkIcon />,
    },
    {
      size: INFO_CARD_SIZE.SM,
      number: formatNumber(totalExpense),
      bgColor: theme.palette.lightOrange,
      iconColor: theme.palette.orange,
      title: "Total Expense",
      icon: <ShoppingCartIcon />,
    },
    {
      size: INFO_CARD_SIZE.SM,
      number: transactions?.length || 0,
      bgColor: theme.palette.violet,
      iconColor: theme.palette.purple.main,
      title: "Total Transactions",
      icon: <DescriptionIcon />,
    },
  ];

  return (
    <StyledDashboardHeader>
      {INFO_CARDS.map((cardItem) => (
        <InfoCard
          title={cardItem.title}
          key={cardItem.title}
          size={cardItem.size}
          number={cardItem.number}
          bgColor={cardItem.bgColor}
          iconColor={cardItem.iconColor}
          icon={cardItem.icon}
        />
      ))}
    </StyledDashboardHeader>
  );
};
