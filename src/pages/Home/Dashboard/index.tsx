import { FC } from "react";
import { MainLayout } from "../../../components/MainLayout";

interface IDashboard {}
export const Dashboard: FC<IDashboard> = () => {
  return (
    <MainLayout>
      <h1>Dashboard</h1>
    </MainLayout>
  );
};
