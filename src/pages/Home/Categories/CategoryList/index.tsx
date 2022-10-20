import { FC } from "react";
import { Grid } from "@mui/material";
import { CategoryItem } from "../CategoryItem";

const LISTS = [
  { title: "Family", id: 1, userId: 1285 },
  { title: "Sport", id: 2, userId: 1285 },
  { title: "Education", id: 3, userId: 1285 },
  { title: "Fun", id: 4, userId: 1285 },
  { title: "Game", id: 5, userId: 1285 },
  { title: "Game", id: 6, userId: 1285 },
];

interface ICategoryList {}
export const CategoryList: FC<ICategoryList> = () => {
  return (
    <Grid container spacing={2} sx={{ mt: "40px" }}>
      {LISTS.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </Grid>
  );
};
