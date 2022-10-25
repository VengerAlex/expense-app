import { FC } from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import { NewCategoryWrapper, StyledSecondaryButton } from "../../styles";
import Input from "../Input";
import { ImageButton } from "../ImageButton";
import { ColorPicker } from "../ColorPicker";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { userSelector } from "../../store/slices/user/userSlice";
import { useForm } from "react-hook-form";
import { ICreateCategoryForm } from "../../utils/types";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { createCategorySchema } from "../../utils/schema";
import { showErrorText } from "../../utils/helpers";

interface INewCategory {}
export const NewCategory: FC<INewCategory> = () => {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICreateCategoryForm>({
    mode: "onSubmit",
    resolver: yupResolver(createCategorySchema),
  });
  const { label } = getValues();
  const { postCategory } = useActions();
  const { user } = useAppSelector(userSelector);
  const theme = useTheme();

  const createCategoryHandler = (data: ICreateCategoryForm) => {
    const newCategory = { ...data, userId: user?.id };

    postCategory(newCategory);
    reset();
  };

  console.log(errors);

  return (
    <NewCategoryWrapper>
      <Typography variant="h4" mb={2} color={theme.palette.darkBlack}>
        Add Category
      </Typography>
      <form onSubmit={handleSubmit(createCategoryHandler)}>
        <Input
          helperText={showErrorText(errors, "label", label)}
          error={!!errors.label && !!label}
          control={control}
          formName="label"
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
          <StyledSecondaryButton type="submit" sx={{ p: "4px 45px" }}>
            ADD
          </StyledSecondaryButton>
        </Stack>
      </form>
    </NewCategoryWrapper>
  );
};
