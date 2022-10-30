import { FC, ReactElement } from "react";
import { CheckboxProps } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { StyledCheckbox, StyledLabel } from "../../styles";

type ICheckbox = CheckboxProps & {
  control: any;
  label: ReactElement;
};

export const Checkbox: FC<ICheckbox> = ({ control, label, ...props }) => {
  return (
    <FormControlLabel
      control={
        <StyledCheckbox
          {...props}
          color="success"
          {...control.register("isConfirmed")}
        />
      }
      label={label}
    />
  );
};
