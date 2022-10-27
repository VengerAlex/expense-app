import { FC, useState } from "react";
import { Stack, Typography, Box, useTheme } from "@mui/material";
import { NewTransactionWrapper, StyledSecondaryButton } from "../../styles";
import Input from "../Input";
import { MySelect } from "../Select";
import { useAppSelector } from "../../hooks/useAppSelector";
import { categorySelector } from "../../store/slices/category/categorySlice";
import { DataPicker } from "../DataPicker";
import dayjs, { Dayjs } from "dayjs";

interface INewTransaction {}

export const NewTransaction: FC<INewTransaction> = () => {
  const { categories } = useAppSelector(categorySelector);
  const categoriesTitle = categories?.map((category) => category.label) || [];
  const [category, setCategory] = useState(categoriesTitle[1]);
  const [date, setDate] = useState(new Date());
  const theme = useTheme();

  const addHandler = () => {
    console.log(date, "data");
  };

  return (
    <NewTransactionWrapper>
      <Typography variant="h4" mb={2} color={theme.palette.darkBlack}>
        Add Transaction
      </Typography>
      <Input
        weight={600}
        sx={{ mb: 2 }}
        fullWidth
        label="Transaction Name"
        placeholder="For my car tuning wheels by BBS"
        isBlack
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <Input
          sx={{ mb: 2, width: "225px" }}
          isNumber
          weight={600}
          label="Input Chevron Name"
          placeholder="-000,000.00"
          isBlack
          fullWidth
        />
        <DataPicker date={date} setDate={setDate} />
      </Box>
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
        <StyledSecondaryButton
          onClick={addHandler}
          type="submit"
          sx={{ p: "4px 45px" }}
        >
          ADD
        </StyledSecondaryButton>
      </Stack>
    </NewTransactionWrapper>
  );
};
