import { FC } from "react";
import { Typography } from "@mui/material";
import { MainLayout } from "../../../components/MainLayout";
import {
  DashboardLeftSide,
  DashboardRightSide,
  DashboardWrapper,
} from "../../../styles";
import { DashboardHeader } from "./DashboardHeader";

interface IDashboard {}
export const Dashboard: FC<IDashboard> = () => {
  return (
    <MainLayout>
      <DashboardWrapper>
        <DashboardLeftSide>
          <DashboardHeader />
        </DashboardLeftSide>
        <DashboardRightSide>
          <Typography>RIGHT SIDE</Typography>
        </DashboardRightSide>
      </DashboardWrapper>
    </MainLayout>
  );
};
