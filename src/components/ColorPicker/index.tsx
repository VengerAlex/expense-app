import { FC, useState } from "react";
import { Divider, Typography, useTheme } from "@mui/material";
import { ColorPickerBox, ColorPickerWrapper, Picker } from "../../styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface IColorPicker {}

export const ColorPicker: FC<IColorPicker> = () => {
  const theme = useTheme();
  const [color, setColor] = useState("#fff");

  return (
    <ColorPickerWrapper>
      <Typography mb="4px" color={theme.palette.black} variant="subtitle1">
        Сhoose Сolor
      </Typography>
      <ColorPickerBox>
        <label htmlFor="color-picker">
          <Picker sx={{ backgroundColor: color }}>
            <input
              onChange={(event) => setColor(event.target.value)}
              type="color"
              id="color-picker"
            />
          </Picker>
        </label>
        <KeyboardArrowDownIcon sx={{ width: "16px", height: "16px" }} />
      </ColorPickerBox>
      <Divider sx={{ borderColor: theme.palette.black }} />
    </ColorPickerWrapper>
  );
};
