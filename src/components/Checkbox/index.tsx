import { FC } from "react";
import { CheckboxProps } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { StyledCheckbox, StyledLabel } from "../../styles";
import { theme } from "../../providers/ThemeProvider";

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
          {...control.register("isConfirmed")}
        />
      }
      label={<StyledLabel variant="subtitle2">{labelText}</StyledLabel>}
    />
  );
};
