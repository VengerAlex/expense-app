import { FC, useEffect } from "react";
import * as React from "react";
import {
  Box,
  TableHead,
  TableContainer,
  TableBody,
  TableRow,
  Table,
  Stack,
  Typography,
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
import { LOADING_STATUS, SORT } from "../../../../utils/types";
import { useDispatch } from "react-redux";
import { useActions } from "../../../../hooks/useActions";

interface ITransactionTable {}
export const TransactionTable: FC<ITransactionTable> = () => {
  const dispatch = useDispatch();
  const { getTransactions } = useActions();
  const { transactions, loading, sort } = useAppSelector(transactionSelector);

  useEffect(() => {
    const params = {
      dateOrder: sort[0].date,
      idOrder: sort[1].id,
    };

    getTransactions(params);
  }, [sort]);

  if (loading === LOADING_STATUS.PENDING) {
    return <Typography>LOADING...</Typography>;
  }

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
                  disabled={sort[1].id === SORT.DESC}
                  isActive={sort[1].id === SORT.DESC}
                >
                  <ArrowDropDownIcon />
                </IconWrapper>
                <IconWrapper
                  onClick={() => dispatch(sortHandler("id"))}
                  isActive={sort[1].id === SORT.ASC}
                  disabled={sort[1].id === SORT.ASC}
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
                  disabled={sort[0].date === SORT.DESC}
                  isActive={sort[0].date === SORT.DESC}
                >
                  <ArrowDropDownIcon />
                </IconWrapper>
                <IconWrapper
                  onClick={() => dispatch(sortHandler("date"))}
                  disabled={sort[0].date === SORT.ASC}
                  isActive={sort[0].date === SORT.ASC}
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
              array={transactions}
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
