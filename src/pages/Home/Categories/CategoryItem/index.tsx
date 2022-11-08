import { FC } from "react";

import { Typography, useTheme } from "@mui/material";

import { ActionButtons } from "../../../../components/ActionButtons";

import { useActions } from "../../../../hooks/useActions";
import { ICategory } from "../../../../store/slices/category/category.interface";
import {
  CategoryAvatar,
  CategoryPriceWrapper,
  CategoryTitle,
  CategoryWrapper,
  SliderWrapper,
  StyledGridItem,
} from "../../../../styles";

type ICategoryItem = ICategory & {
  modalHandler: () => void;
  setSelectedCategory: (category: ICategory) => void;
};

export const CategoryItem: FC<ICategoryItem> = ({
  label,
  id,
  userId,
  modalHandler,
  setSelectedCategory,
}) => {
  const theme = useTheme();
  const { deleteCategory } = useActions();

  const editHandler = () => {
    setSelectedCategory({ id, label, userId });
    modalHandler();
  };

  return (
    <StyledGridItem item xs={4} sx={{ position: "relative" }}>
      <CategoryWrapper>
        <ActionButtons
          coordinates={{ top: "2px", right: "9px" }}
          onDelete={() => deleteCategory(id)}
          onEdit={editHandler}
        />
        <CategoryAvatar />
        <CategoryTitle variant="h5">{label}</CategoryTitle>
        <Typography variant="subtitle2" color={theme.palette.black}>
          Total Transactions
        </Typography>
        <Typography variant="h5" color={theme.palette.black} mb={1}>
          132
        </Typography>
        <Typography variant="subtitle2" color={theme.palette.black} mb={1}>
          Total of Money
        </Typography>
        <SliderWrapper />
        <CategoryPriceWrapper>
          <Typography variant="h5" color={theme.palette.black}>
            +$ 1,123,874
          </Typography>
          <Typography variant="h5" color={theme.palette.black}>
            -$ 0
          </Typography>
        </CategoryPriceWrapper>
      </CategoryWrapper>
    </StyledGridItem>
  );
};
