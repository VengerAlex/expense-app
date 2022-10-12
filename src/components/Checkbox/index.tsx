import { FC } from "react";
import { CheckboxProps } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { StyledBoxFlex, StyledCheckbox, StyledLabel } from "../../styles";

type ICheckbox = CheckboxProps & {
  control: any;
  labelText: string;
};

export const Checkbox: FC<ICheckbox> = ({ control, labelText, ...props }) => {
  return (
    <FormControlLabel
      control={
        <StyledCheckbox
          {...props}
          color="success"
          {...control.register("isConfirmed", { required: true })}
        />
      }
      label={<StyledLabel variant="subtitle2">{labelText}</StyledLabel>}
    />
  );
};
