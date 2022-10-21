import { FC, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { MainLayout } from "../../../components/MainLayout";
import { theme } from "../../../providers/ThemeProvider";
import { CategoryHeader } from "../../../styles";
import { SearchInput } from "../../../components/SearchInput";
import { CategoryList } from "./CategoryList";
import { useActions } from "../../../hooks/useActions";

interface ICategories {}

export const Categories: FC<ICategories> = () => {
  const { getCategories } = useActions();

  useEffect(() => {
    getCategories();
  }, []);

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
