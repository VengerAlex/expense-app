import { FC } from "react";
import { Grid, Typography } from "@mui/material";
import { CategoryItem } from "../CategoryItem";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { categorySelector } from "../../../../store/slices/category/categorySlice";
import { LOADING_STATUS } from "../../../../utils/types";

interface ICategoryList {}
export const CategoryList: FC<ICategoryList> = () => {
  const { categories, loading } = useAppSelector(categorySelector);

  return (
    <Grid container spacing={2} sx={{ mt: "40px" }}>
      {loading === LOADING_STATUS.PENDING && (
        <Typography>Loading...</Typography>
      )}

      {loading === LOADING_STATUS.FULFILLED &&
        categories?.map((category) => (
          <CategoryItem key={category.id} {...category} />
        ))}
    </Grid>
  );
};
