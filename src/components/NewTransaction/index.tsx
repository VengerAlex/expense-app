import { FC, useState } from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import { NewTransactionWrapper, StyledSecondaryButton } from "../../styles";
import Input from "../Input";
import { MySelect } from "../Select";
import { useAppSelector } from "../../hooks/useAppSelector";
import { categorySelector } from "../../store/slices/category/categorySlice";

interface INewTransaction {}

export const NewTransaction: FC<INewTransaction> = () => {
  const { categories } = useAppSelector(categorySelector);
  const categoriesTitle = categories?.map((category) => category.label) || [];
  const [category, setCategory] = useState(categoriesTitle[1]);
  const theme = useTheme();

  return (
    <NewTransactionWrapper>
      <Typography variant="h4" mb={2} color={theme.palette.darkBlack}>
        Add Transaction
      </Typography>
      <Input
        sx={{ mb: 2 }}
        fullWidth
        label="Transaction Name "
        placeholder="For my car tuning wheels by BBS"
        isBlack
      />
      <Stack
        alignItems="flex-end"
        direction="row"
        justifyContent="space-between"
      >
        <MySelect
          value={category}
          setCategory={setCategory}
          menuItems={categoriesTitle}
          label="Select Category"
        />
        <StyledSecondaryButton type="submit" sx={{ p: "4px 45px" }}>
          ADD
        </StyledSecondaryButton>
      </Stack>
    </NewTransactionWrapper>
  );
};
