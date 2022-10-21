import { FC } from "react";
import { Typography } from "@mui/material";
import {
  CategoryWrapper,
  ActionIcon,
  SliderWrapper,
  CategoryAvatar,
  CategoryPriceWrapper,
  CategoryTitle,
  StyledGridItem,
} from "../../../../styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ICategory } from "../../../../store/slices/category/category.interface";

export const CategoryItem: FC<ICategory> = ({ label }) => {
  return (
    <StyledGridItem item xs={4}>
      <CategoryWrapper>
        <ActionIcon>
          <MoreHorizIcon />
        </ActionIcon>
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
