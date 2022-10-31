import { FC } from "react";
import { Typography } from "@mui/material";
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
  const { deleteCategory } = useActions();

  const editHandler = () => {
    console.log("EDIT");
  };

  return (
    <StyledGridItem item xs={4} sx={{ position: "relative" }}>
      <CategoryWrapper>
        <ActionButtons
          coordinates={{ top: "2px", right: "9px" }}
          onDelete={() => console.log(id)}
          onEdit={editHandler}
        />
        <CategoryAvatar />
        <CategoryTitle variant="h5">{label}</CategoryTitle>
        <Typography variant="subtitle2" sx={{ color: "#1D283A" }}>
          Total Transactions
        </Typography>
        <Typography variant="h5" sx={{ color: "#1D283A", mb: "8px" }}>
          132
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "#1D283A", mb: "8px" }}>
          Total of Money
        </Typography>
        <SliderWrapper />
        <CategoryPriceWrapper>
          <Typography variant="h5" sx={{ color: "#1D283A" }}>
            +$ 1,123,874
          </Typography>
          <Typography variant="h5" sx={{ color: "#1D283A" }}>
            -$ 0
          </Typography>
        </CategoryPriceWrapper>
      </CategoryWrapper>
    </StyledGridItem>
  );
};
