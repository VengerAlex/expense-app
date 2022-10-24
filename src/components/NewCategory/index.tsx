import { FC } from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { CategoryWrapper } from "../../styles";
import Input from "../Input";
import { ImageButton } from "../ImageButton";

interface INewCategory {}
export const NewCategory: FC<INewCategory> = () => {
  const theme = useTheme();

  return (
    <CategoryWrapper>
      <Typography variant="h4" mb={2} color={theme.palette.darkBlack}>
        Add Category
      </Typography>
      <Input
        sx={{ mb: 2 }}
        fullWidth
        label="Name of Category"
        placeholder="Example123"
        isBlack
      />
      <ImageButton />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography>Color</Typography>
        <Button>ADD</Button>
      </Box>
    </CategoryWrapper>
  );
};
