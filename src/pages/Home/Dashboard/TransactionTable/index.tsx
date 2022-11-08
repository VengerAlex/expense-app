import { FC } from "react";
import * as React from "react";
import {
  Box,
  TableHead,
  TableContainer,
  TableBody,
  TableRow,
  Table,
  Stack,
} from "@mui/material";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import {
  sortHandler,
  transactionSelector,
} from "../../../../store/slices/transaction/transactionSlice";
import { Transaction } from "../Transaction";
import { IconWrapper, StyledTableCell } from "../../../../styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { SORT } from "../../../../utils/types";
import { useDispatch } from "react-redux";

interface ITransactionTable {}
export const TransactionTable: FC<ITransactionTable> = () => {
  const dispatch = useDispatch();
  const { transactions, sort } = useAppSelector(transactionSelector);

  return (
    <TableContainer component={Box}>
      <Table sx={{ minWidth: 710 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Stack
                justifyContent="center"
                alignItems="flex-start"
                direction="row"
              >
                #
                <IconWrapper
                  onClick={() => dispatch(sortHandler("id"))}
                  disabled={sort.id === SORT.DESC}
                  isActive={sort.id === SORT.DESC}
                >
                  <ArrowDropDownIcon />
                </IconWrapper>
                <IconWrapper
                  onClick={() => dispatch(sortHandler("id"))}
                  isActive={sort.id === SORT.ASC}
                  disabled={sort.id === SORT.ASC}
                >
                  <ArrowDropUpIcon />
                </IconWrapper>
              </Stack>
            </StyledTableCell>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>
              <Stack
                justifyContent="center"
                alignItems="center"
                direction="row"
              >
                Date
                <IconWrapper
                  onClick={() => dispatch(sortHandler("date"))}
                  disabled={sort.date === SORT.DESC}
                  isActive={sort.date === SORT.DESC}
                >
                  <ArrowDropDownIcon />
                </IconWrapper>
                <IconWrapper
                  onClick={() => dispatch(sortHandler("date"))}
                  disabled={sort.date === SORT.ASC}
                  isActive={sort.date === SORT.ASC}
                >
                  <ArrowDropUpIcon />
                </IconWrapper>
              </Stack>
            </StyledTableCell>
            <StyledTableCell>Money </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions?.map((transaction, index) => (
            <Transaction
              key={transaction.id}
              idx={index}
              id={transaction.id}
              label={transaction.label}
              categoryId={transaction.categoryId}
              userId={transaction.userId}
              amount={transaction.amount}
              date={transaction.date}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
