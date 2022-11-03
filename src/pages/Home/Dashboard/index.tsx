import { FC, useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { MainLayout } from "../../../components/MainLayout";
import {
  DashboardLeftSide,
  DashboardRightSide,
  DashboardWrapper,
} from "../../../styles";
import { DashboardHeader } from "./DashboardHeader";
import { NewCategory } from "../../../components/NewCategory";
import { NewTransaction } from "../../../components/NewTransaction";
import { useActions } from "../../../hooks/useActions";
import { AllTransaction } from "./AllTransaction";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { transactionSelector } from "../../../store/slices/transaction/transactionSlice";
import { useDebounce } from "../../../hooks/useDebounce";

interface IDashboard {}
export const Dashboard: FC<IDashboard> = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 500);
  const { sort } = useAppSelector(transactionSelector);
  const { getTransactions, getCategories } = useActions();

  useEffect(() => {
    getTransactions({
      dateOrder: sort[0].date,
      idOrder: sort[1].id,
      searchValue: debouncedValue,
    });
  }, [sort, debouncedValue]);

  useEffect(() => {
    getCategories("");
  }, []);

  return (
    <MainLayout>
      <DashboardWrapper>
        <DashboardLeftSide>
          <DashboardHeader />
          <Stack spacing={2} direction="row">
            <NewTransaction />
            <NewCategory />
          </Stack>
          <AllTransaction
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </DashboardLeftSide>
        <DashboardRightSide>
          <Typography>RIGHT SIDE</Typography>
        </DashboardRightSide>
      </DashboardWrapper>
    </MainLayout>
  );
};
