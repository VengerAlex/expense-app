import { FC, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";

import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { ICategory } from "../../store/slices/category/category.interface";
import {
  categorySelector,
  selectFirstCategory,
} from "../../store/slices/category/categorySlice";
import { userSelector } from "../../store/slices/user/userSlice";
import { NewTransactionWrapper, StyledSecondaryButton } from "../../styles";
import { showErrorText } from "../../utils/helpers";
import { createTransactionSchema } from "../../utils/schema";
import { ICreateTransactionForm } from "../../utils/types";
import { DataPicker } from "../DataPicker";
import Input from "../Input";
import { MySelect } from "../Select";

interface INewTransaction {}

export const NewTransaction: FC<INewTransaction> = () => {
  const {
    control,
    watch,
    getValues,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICreateTransactionForm>({
    mode: "onSubmit",
    resolver: yupResolver(createTransactionSchema),
  });
  watch();
  const { label, amount } = getValues();

  const theme = useTheme();
  const { createTransaction } = useActions();
  const [date, setDate] = useState(new Date());
  const { categories } = useAppSelector(categorySelector);
  const { user } = useAppSelector(userSelector);
  const firstCategory = useAppSelector(selectFirstCategory);

  const [category, setCategory] = useState<ICategory>(
    firstCategory || {
      id: -1,
      label: "Інше",
      userId: user?.id,
    },
  );

  const createTransactionHandler = () => {
    if (user && category?.id) {
      const newTransaction = {
        label,
        amount: Number(amount),
        date,
        userId: user.id,
        categoryId: category.id,
      };

      createTransaction(newTransaction);
    }

    reset();
  };

  const setCategoryHandler = (value: string) => {
    const category = categories?.find((el: ICategory) => el.label === value);

    if (category) {
      setCategory(category);
    }
  };

  return (
    <NewTransactionWrapper>
      <Typography variant="h4" mb={2} color={theme.palette.darkBlack}>
        Add Transaction
      </Typography>
      <form onSubmit={handleSubmit(createTransactionHandler)}>
        <Input
          control={control}
          formName="label"
          helperText={showErrorText(errors, "label", label)}
          error={!!errors.label && !!label}
          weight={600}
          sx={{ mb: 1 }}
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
            control={control}
            formName="amount"
            helperText={showErrorText(errors, "amount", amount)}
            error={!!errors.amount && !!amount}
            sx={{ width: "225px" }}
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
            changeHandler={setCategoryHandler}
            menuItems={categories}
            value={category}
          />
          <StyledSecondaryButton type="submit" sx={{ p: "4px 45px" }}>
            ADD
          </StyledSecondaryButton>
        </Stack>
      </form>
    </NewTransactionWrapper>
  );
};
