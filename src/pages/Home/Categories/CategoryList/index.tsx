import { FC } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { CategoryItem } from "../CategoryItem";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { categorySelector } from "../../../../store/slices/category/categorySlice";
import { ICategory } from "../../../../store/slices/category/category.interface";

interface ICategoryList {}

export const CategoryList: FC<ICategoryList> = () => {
  const theme = useTheme();
  const { categories } = useAppSelector(categorySelector);

  return (
    <Grid container spacing={2} sx={{ mt: "40px" }}>
      {categories?.length ? (
        categories?.map((category: ICategory) => (
          <CategoryItem key={category.id} {...category} />
        ))
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "70vh",
            width: "100vw",
          }}
        >
          <Typography color={theme.palette.black} variant="h4">
            We didn't find anything to show here
          </Typography>
        </Box>
      )}
    </Grid>
  );
};
