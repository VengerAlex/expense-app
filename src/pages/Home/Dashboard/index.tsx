import { FC } from "react";
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

interface IDashboard {}
export const Dashboard: FC<IDashboard> = () => {
  return (
    <MainLayout>
      <DashboardWrapper>
        <DashboardLeftSide>
          <DashboardHeader />
          <Stack spacing={2} direction="row">
            <NewTransaction />
            <NewCategory />
          </Stack>
        </DashboardLeftSide>
        <DashboardRightSide>
          <Typography>RIGHT SIDE</Typography>
        </DashboardRightSide>
      </DashboardWrapper>
    </MainLayout>
  );
};
