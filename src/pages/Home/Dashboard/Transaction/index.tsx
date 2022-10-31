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

type ITransactionProps = ITransaction & {
  idx: number;
  array: any;
};

export const Transaction: FC<ITransactionProps> = ({
  idx,
  label,
  date,
  amount,
  array,
  id,
  categoryId,
  userId,
}) => {
  const { categories } = useAppSelector(categorySelector);
  const theme = useTheme();

  const categoryTitle = categories?.find(
    (category) => category.id === categoryId,
  )?.label;

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
      <StyledCategoryCell>
        <Typography color={theme.palette.orange} variant="h5">
          {formatNumber(amount)}
        </Typography>
      </StyledCategoryCell>
    </TableRow>
  );
};
