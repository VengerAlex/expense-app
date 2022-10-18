import { FC, useEffect } from "react";
import { Typography } from "@mui/material";
import { MainLayout } from "../../../components/MainLayout";

interface IDashboard {}
export const Dashboard: FC<IDashboard> = () => {
  return (
    <MainLayout>
      <Typography>IDashboard</Typography>
    </MainLayout>
  );
};
