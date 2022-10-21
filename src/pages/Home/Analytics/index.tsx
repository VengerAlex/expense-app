import { FC } from "react";
import { Typography } from "@mui/material";
import { MainLayout } from "../../../components/MainLayout";

interface IAnalytics {}
export const Analytics: FC<IAnalytics> = () => {
  return (
    <MainLayout>
      <Typography>Analytics</Typography>
    </MainLayout>
  );
};
