import { FC } from "react";

import { Box, Stack, Typography, useTheme } from "@mui/material";

import { SearchInput } from "../../../../components/SearchInput";
import { MySelect } from "../../../../components/Select";

import { useAppSelector } from "../../../../hooks/useAppSelector";
import { ICategory } from "../../../../store/slices/category/category.interface";
import { categorySelector } from "../../../../store/slices/category/categorySlice";
import { TransactionTable } from "../TransactionTable";
import { SearchBy } from "../index";

interface IAllTransaction {
  setSearchValue: (value: string) => void;
  searchValue: string;
  changeCategoryByHandler: (value: string) => void;
  category: ICategory | undefined;
  SEARCH_BY: SearchBy[];
  searchBy: SearchBy;
  changeSearchByHandler: (value: string) => void;
}

export const AllTransaction: FC<IAllTransaction> = ({
  setSearchValue,
  searchValue,
  changeCategoryByHandler,
  category,
  searchBy,
  SEARCH_BY,
  changeSearchByHandler,
}) => {
  const { categories } = useAppSelector(categorySelector);
  const theme = useTheme();

  return (
    <Box mt={2} p={3}>
      <Stack
        justifyContent="space-between"
        alignItems="self-end"
        direction="row"
        mb={2}
      >
        <Typography variant="h4" color={theme.palette.darkBlack}>
          All Transaction
        </Typography>
        {searchBy.label === "Title" && (
          <SearchInput changeHandler={setSearchValue} value={searchValue} />
        )}
        {searchBy.label === "Category" && (
          <MySelect
            width="150px"
            value={category}
            label="Choose Category"
            menuItems={categories}
            changeHandler={changeCategoryByHandler}
          />
        )}
        <MySelect
          value={searchBy}
          label="Search By"
          menuItems={SEARCH_BY}
          changeHandler={changeSearchByHandler}
          width="100px"
        />
      </Stack>
      <TransactionTable />
    </Box>
  );
};
