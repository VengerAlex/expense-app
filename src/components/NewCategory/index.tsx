import { FC, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { Stack, Typography, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";

import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { userSelector } from "../../store/slices/user/userSlice";
import { NewCategoryWrapper, StyledSecondaryButton } from "../../styles";
import { showErrorText } from "../../utils/helpers";
import { createCategorySchema } from "../../utils/schema";
import { CATEGORY_ACTION, ICreateCategoryForm } from "../../utils/types";
import { ColorPicker } from "../ColorPicker";
import { ImageButton } from "../ImageButton";
import Input from "../Input";

interface INewCategory {
  title: string;
  btnTitle: string;
  initLabel?: string;
  type: CATEGORY_ACTION;
  updateCategoryHandler?: (label: string) => void;
}

export const NewCategory: FC<INewCategory> = ({
  title,
  btnTitle,
  initLabel,
  type,
  updateCategoryHandler,
}) => {
  const {
    watch,
    control,
    getValues,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICreateCategoryForm>({
    mode: "onChange",
    resolver: yupResolver(createCategorySchema),
    defaultValues: { label: initLabel ? initLabel : "" },
  });
  watch();
  const [image, setImage] = useState();
  const [color, setColor] = useState("#ffffff");
  const { label } = getValues();
  const { postCategory } = useActions();
  const { user } = useAppSelector(userSelector);
  const theme = useTheme();

  const categoryCreateHandler = (data: ICreateCategoryForm) => {
    const newCategory = { ...data, color, userId: user?.id };

    postCategory(newCategory);
    reset();
  };

  const categoryUpdateHandler = (data: ICreateCategoryForm) => {
    if (CATEGORY_ACTION.UPDATE && updateCategoryHandler) {
      updateCategoryHandler(data?.label);
    }

    reset();
  };

  const uploadImage = (event: any) => {
    setImage(event.target.files[0]);
  };

  const isBtnDisabled = label === initLabel;

  return (
    <NewCategoryWrapper>
      <Typography variant="h4" mb={2} color={theme.palette.darkBlack}>
        {title}
      </Typography>
      <form
        onSubmit={handleSubmit(
          type === CATEGORY_ACTION.CREATE
            ? categoryCreateHandler
            : categoryUpdateHandler,
        )}
      >
        <Input
          helperText={showErrorText(errors, "label", label)}
          error={!!errors.label && !!label}
          control={control}
          weight={600}
          formName="label"
          fullWidth
          label="Name of Category"
          placeholder="Cars & Coffee"
          isBlack
        />
        <ImageButton imageHandler={uploadImage} />
        <Stack
          alignItems="flex-end"
          direction="row"
          justifyContent="space-between"
        >
          <ColorPicker color={color} setColor={setColor} />
          <StyledSecondaryButton
            disabled={isBtnDisabled}
            type="submit"
            sx={{ p: "4px 45px" }}
          >
            {btnTitle}
          </StyledSecondaryButton>
        </Stack>
      </form>
    </NewCategoryWrapper>
  );
};
