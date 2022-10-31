import { FC, useEffect } from "react";
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
import { LOADING_STATUS, SORT } from "../../../utils/types";

interface IDashboard {}
export const Dashboard: FC<IDashboard> = () => {
  const { loading } = useAppSelector(transactionSelector);
  const { getTransactions } = useActions();

  useEffect(() => {
    if (loading === LOADING_STATUS.IDLE) {
      getTransactions({ dateOrder: SORT.ASC, idOrder: SORT.ASC });
    }
  }, [loading, getTransactions]);

  return (
    <MainLayout>
      <DashboardWrapper>
        <DashboardLeftSide>
          <DashboardHeader />
          <Stack spacing={2} direction="row">
            <NewTransaction />
            <NewCategory />
          </Stack>
          <AllTransaction />
        </DashboardLeftSide>
        <DashboardRightSide>
          <Typography>RIGHT SIDE</Typography>
        </DashboardRightSide>
      </DashboardWrapper>
    </MainLayout>
  );
};
