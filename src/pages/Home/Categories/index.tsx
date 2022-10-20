import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { MainLayout } from "../../../components/MainLayout";
import { theme } from "../../../providers/ThemeProvider";
import { CategoryHeader } from "../../../styles";
import { SearchInput } from "../../../components/SearchInput";
import { CategoryList } from "./CategoryList";

interface ICategories {}

export const Categories: FC<ICategories> = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          p: "31px 98px",
          backgroundColor: theme.palette.lightBlue,
          height: "100vh",
        }}
      >
        <CategoryHeader>
          <Typography color={theme.palette.black} variant="h4">
            All Categories
          </Typography>
          <SearchInput />
        </CategoryHeader>

        <CategoryList />
      </Box>
    </MainLayout>
  );
};
