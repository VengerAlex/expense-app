import { FC } from "react";
import { Typography } from "@mui/material";
import { MainLayout } from "../../../components/MainLayout";

interface ICategories {}
export const Categories: FC<ICategories> = () => {
  return (
    <MainLayout>
      <Typography>Categories</Typography>
    </MainLayout>
  );
};
