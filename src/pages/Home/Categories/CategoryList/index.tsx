import { FC } from "react";
import { Grid } from "@mui/material";
import { CategoryItem } from "../CategoryItem";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { categorySelector } from "../../../../store/slices/category/categorySlice";

interface ICategoryList {}
export const CategoryList: FC<ICategoryList> = () => {
  const { categories } = useAppSelector(categorySelector);

  return (
    <Grid container spacing={2} sx={{ mt: "40px" }}>
      {categories &&
        categories.map((category) => (
          <CategoryItem key={category.id} {...category} />
        ))}
    </Grid>
  );
};
