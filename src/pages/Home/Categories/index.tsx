import { FC, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { MainLayout } from "../../../components/MainLayout";
import { theme } from "../../../providers/ThemeProvider";
import { CategoryHeader } from "../../../styles";
import { SearchInput } from "../../../components/SearchInput";
import { CategoryList } from "./CategoryList";
import { useActions } from "../../../hooks/useActions";
import { useDebounce } from "../../../hooks/useDebounce";

interface ICategories {}

export const Categories: FC<ICategories> = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 500);
  const { getCategories } = useActions();

  useEffect(() => {
    if (debouncedValue) {
      getCategories(debouncedValue);
    }
  }, [debouncedValue]);

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
          <SearchInput value={searchValue} changeHandler={setSearchValue} />
        </CategoryHeader>

        <CategoryList />
      </Box>
    </MainLayout>
  );
};
