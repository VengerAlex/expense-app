import { InfoCard } from "../../../../components/InfoCard";
import WorkIcon from "@mui/icons-material/Work";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DescriptionIcon from "@mui/icons-material/Description";
import { StyledDashboardHeader } from "../../../../styles";
import { useTheme } from "@mui/material";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { transactionSelector } from "../../../../store/slices/transaction/transactionSlice";
import { formatNumber } from "../../../../utils/helpers";

export const DashboardHeader = () => {
  const theme = useTheme();
  const { totalReceipt, totalExpense, transactions } =
    useAppSelector(transactionSelector);

  const INFO_CARDS = [
    {
      isBig: true,
      number: formatNumber(totalReceipt),
      bgColor: theme.palette.green.lighter,
      iconColor: theme.palette.green.main,
      title: "Total Receipt",
      icon: <WorkIcon />,
    },
    {
      isBig: true,
      number: formatNumber(totalExpense),
      bgColor: theme.palette.lightOrange,
      iconColor: theme.palette.orange,
      title: "Total Expense",
      icon: <ShoppingCartIcon />,
    },
    {
      isBig: true,
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
