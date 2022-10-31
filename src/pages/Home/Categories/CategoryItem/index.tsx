import { FC } from "react";
import { Typography, useTheme } from "@mui/material";
import {
  CategoryWrapper,
  SliderWrapper,
  CategoryAvatar,
  CategoryPriceWrapper,
  CategoryTitle,
  StyledGridItem,
} from "../../../../styles";
import { ICategory } from "../../../../store/slices/category/category.interface";
import { useActions } from "../../../../hooks/useActions";
import { ActionButtons } from "../../../../components/ActionButtons";

export const CategoryItem: FC<ICategory> = ({ label, id }) => {
  const theme = useTheme();
  const { deleteCategory } = useActions();

  const editHandler = () => {
    console.log("EDIT");
  };

  return (
    <StyledGridItem item xs={4} sx={{ position: "relative" }}>
      <CategoryWrapper>
        <ActionButtons
          coordinates={{ top: "2px", right: "9px" }}
          onDelete={() => deleteCategory({ id })}
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
