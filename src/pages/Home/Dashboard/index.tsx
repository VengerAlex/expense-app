import { FC } from "react";
import { Typography } from "@mui/material";
import { MainLayout } from "../../../components/MainLayout";
import {
  DashboardLeftSide,
  DashboardRightSide,
  DashboardWrapper,
} from "../../../styles";
import { DashboardHeader } from "./DashboardHeader";
import { NewCategory } from "../../../components/NewCategory";

interface IDashboard {}
export const Dashboard: FC<IDashboard> = () => {
  return (
    <MainLayout>
      <DashboardWrapper>
        <DashboardLeftSide>
          <DashboardHeader />
          <NewCategory />
        </DashboardLeftSide>
        <DashboardRightSide>
          <Typography>RIGHT SIDE</Typography>
        </DashboardRightSide>
      </DashboardWrapper>
    </MainLayout>
  );
};
