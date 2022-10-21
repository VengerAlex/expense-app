import { FC, useRef, useState } from "react";
import { Typography, Box } from "@mui/material";
import {
  CategoryWrapper,
  ActionIcon,
  SliderWrapper,
  CategoryAvatar,
  CategoryPriceWrapper,
  CategoryTitle,
  StyledGridItem,
  StyledSecondaryButton,
  ActionButtons,
} from "../../../../styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ICategory } from "../../../../store/slices/category/category.interface";
import { useOnClickOutside } from "../../../../hooks/useOnClickOutside";
import { useActions } from "../../../../hooks/useActions";

export const CategoryItem: FC<ICategory> = ({ label, id }) => {
  const { deleteCategory } = useActions();
  const [isShowBtnAction, setIsShownBtnActions] = useState(false);
  const clickRef = useRef<HTMLSpanElement>(null);
  useOnClickOutside(clickRef, () => setIsShownBtnActions(false));

  const editHandler = () => {
    console.log("editHandler");

    setIsShownBtnActions(false);
  };

  const deleteHandler = () => {
    deleteCategory({ id });

    setIsShownBtnActions(false);
  };

  return (
    <StyledGridItem item xs={4}>
      <CategoryWrapper>
        <Box ref={clickRef}>
          <ActionIcon onClick={() => setIsShownBtnActions(true)}>
            <MoreHorizIcon />
          </ActionIcon>
          {isShowBtnAction && (
            <ActionButtons>
              <StyledSecondaryButton onClick={editHandler} isEdit>
                Edit
              </StyledSecondaryButton>
              <StyledSecondaryButton
                onClick={deleteHandler}
                sx={{ mt: "2px", px: "37px" }}
                isDelete
              >
                Delete
              </StyledSecondaryButton>
            </ActionButtons>
          )}
        </Box>

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
