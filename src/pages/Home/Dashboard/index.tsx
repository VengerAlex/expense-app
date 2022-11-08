import { FC, useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { MainLayout } from "../../../components/MainLayout";
import {
  DashboardLeftSide,
  DashboardRightSide,
  DashboardWrapper,
} from "../../../styles";
import { DashboardHeader } from "./DashboardHeader";
import { NewCategory } from "../../../components/NewCategory";
import { NewTransaction } from "../../../components/NewTransaction";
import { useActions } from "../../../hooks/useActions";
import { AllTransaction } from "./AllTransaction";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { transactionSelector } from "../../../store/slices/transaction/transactionSlice";
import { useDebounce } from "../../../hooks/useDebounce";
import { ICategory } from "../../../store/slices/category/category.interface";
import {
  categorySelector,
  selectFirstCategory,
} from "../../../store/slices/category/categorySlice";

export type SearchBy = {
  label: string;
  id: number;
};

const SEARCH_BY: SearchBy[] = [
  { label: "Title", id: 0 },
  { label: "Category", id: 1 },
];

interface IDashboard {}

export const Dashboard: FC<IDashboard> = () => {
  const firstCategory = useAppSelector(selectFirstCategory);
  const { categories } = useAppSelector(categorySelector);
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState<ICategory>(
    firstCategory || {
      id: -1,
      label: "Інше",
      userId: 1590,
    },
  );
  const [searchBy, setSearchBy] = useState<SearchBy>(SEARCH_BY[0]);
  const debouncedValue = useDebounce(searchValue, 500);
  const { sort } = useAppSelector(transactionSelector);
  const { getTransactions, getCategories } = useActions();

  useEffect(() => {
    getTransactions({
      dateOrder: sort.date,
      idOrder: sort.id,
      searchValue: searchBy.label === "Title" ? debouncedValue : null,
      categoryId: searchBy.label === "Category" ? String(category?.id) : null,
    });
  }, [sort, debouncedValue, category]);

  useEffect(() => {
    getCategories("");
  }, []);

  const changeCategoryByHandler = (value: string) => {
    const searchCategory = categories?.find(
      (elem: ICategory) => elem.label === value,
    );

    if (searchCategory) {
      setCategory(searchCategory);
    }
  };
  const changeSearchByHandler = (value: string) => {
    const searchElem = SEARCH_BY.find((elem: SearchBy) => elem.label === value);

    if (searchElem) {
      setSearchBy(searchElem);
    }
  };

  return (
    <MainLayout>
      <DashboardWrapper>
        <DashboardLeftSide>
          <DashboardHeader />
          <Stack spacing={2} direction="row">
            <NewTransaction />
            <NewCategory />
          </Stack>
          <AllTransaction
            SEARCH_BY={SEARCH_BY}
            searchBy={searchBy}
            changeSearchByHandler={changeSearchByHandler}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            category={category}
            changeCategoryByHandler={changeCategoryByHandler}
          />
        </DashboardLeftSide>
        <DashboardRightSide>
          <Typography>RIGHT SIDE</Typography>
        </DashboardRightSide>
      </DashboardWrapper>
    </MainLayout>
  );
};
