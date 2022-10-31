import { FC } from "react";
import { ITransaction } from "../../../../store/slices/transaction/transaction.interface";
import TableRow from "@mui/material/TableRow";
import {
  formatDate,
  formatNumber,
  getBackgroundColor,
  getRandomColor,
} from "../../../../utils/helpers";
import { Stack, Typography, useTheme } from "@mui/material";
import { CircledBox, StyledCategoryCell } from "../../../../styles";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { categorySelector } from "../../../../store/slices/category/categorySlice";
import { ActionButtons } from "../../../../components/ActionButtons";
import { useActions } from "../../../../hooks/useActions";

type ITransactionProps = ITransaction & {
  idx: number;
};

export const Transaction: FC<ITransactionProps> = ({
  idx,
  label,
  date,
  amount,
  id,
  categoryId,
  userId,
}) => {
  const { categories } = useAppSelector(categorySelector);
  const { deleteTransaction } = useActions();
  const theme = useTheme();

  const categoryTitle = categories?.find(
    (category) => category.id === categoryId,
  )?.label;

  const onEdit = () => {
    console.log("EDIT");
  };
  const onDelete = () => {
    deleteTransaction(id);
    console.log("DELETE");
  };

  return (
    <TableRow
      sx={{ backgroundColor: getBackgroundColor(idx), position: "relative" }}
    >
      <StyledCategoryCell align="center">{idx + 1}</StyledCategoryCell>
      <StyledCategoryCell>
        <Stack direction="row" alignItems="center">
          <CircledBox bgColor={getRandomColor()} />
          {categoryTitle}
        </Stack>
      </StyledCategoryCell>
      <StyledCategoryCell>{label}</StyledCategoryCell>
      <StyledCategoryCell>{formatDate(date)}</StyledCategoryCell>
      <StyledCategoryCell sx={{ position: "relative" }}>
        <Typography color={theme.palette.orange} variant="h5">
          {formatNumber(amount)}
        </Typography>
        <ActionButtons
          onDelete={onDelete}
          onEdit={onEdit}
          coordinates={{ top: "2px", right: "20px" }}
        />
      </StyledCategoryCell>
    </TableRow>
  );
};
