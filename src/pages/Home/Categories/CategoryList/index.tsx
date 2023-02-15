import { FC, useState } from "react";

import { Box, Grid, Typography, useTheme } from "@mui/material";

import { Modal } from "../../../../components/Modal";
import { NewCategory } from "../../../../components/NewCategory";

import { useActions } from "../../../../hooks/useActions";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { ICategory } from "../../../../store/slices/category/category.interface";
import { categorySelector } from "../../../../store/slices/category/categorySlice";
import { CATEGORY_ACTION } from "../../../../utils/types";
import { CategoryItem } from "../CategoryItem";

interface ICategoryList {}

export const CategoryList: FC<ICategoryList> = () => {
  const { updateCategory } = useActions();
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const { categories } = useAppSelector(categorySelector);
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null,
  );

  console.log(selectedCategory, "selectedCategory");

  const modalHandler = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  const updateCategoryHandler = (label: string) => {
    if (!selectedCategory?.id) return;

    updateCategory({ id: selectedCategory?.id, label });

    modalHandler();
  };

  return (
    <Grid container spacing={2} sx={{ mt: "40px" }}>
      {categories?.length ? (
        categories?.map((category: ICategory) => (
          <CategoryItem
            key={category.id}
            {...category}
            setSelectedCategory={setSelectedCategory}
            modalHandler={modalHandler}
          />
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
      <Modal open={isOpen} closeHandler={modalHandler}>
        <NewCategory
          type={CATEGORY_ACTION.UPDATE}
          updateCategoryHandler={updateCategoryHandler}
          initLabel={selectedCategory?.label}
          btnTitle="Change"
          title="Change Category"
        />
      </Modal>
    </Grid>
  );
};
