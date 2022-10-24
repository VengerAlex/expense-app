import { FC } from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import { NewCategoryWrapper, StyledSecondaryButton } from "../../styles";
import Input from "../Input";
import { ImageButton } from "../ImageButton";
import { ColorPicker } from "../ColorPicker";

interface INewCategory {}
export const NewCategory: FC<INewCategory> = () => {
  const theme = useTheme();

  const send = () => {
    console.log("SEND");
  };

  return (
    <NewCategoryWrapper>
      <Typography variant="h4" mb={2} color={theme.palette.darkBlack}>
        Add Category
      </Typography>
      <Input
        sx={{ mb: 2 }}
        fullWidth
        label="Name of Category"
        placeholder="Cars & Coffee"
        isBlack
      />
      <ImageButton />
      <Stack
        alignItems="flex-end"
        direction="row"
        justifyContent="space-between"
      >
        <ColorPicker />
        <StyledSecondaryButton onClick={send} sx={{ p: "4px 45px" }}>
          ADD
        </StyledSecondaryButton>
      </Stack>
    </NewCategoryWrapper>
  );
};
