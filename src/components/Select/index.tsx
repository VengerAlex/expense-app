import { FC } from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
} from "@mui/material";

import { SelectWrapper } from "../../styles";

interface ISelect {
  menuItems: any;
  value: any;
  changeHandler: (value: any) => void;
  label?: string;
  width?: string;
}

export const MySelect: FC<ISelect> = ({
  value,
  menuItems,
  changeHandler,
  label,
  width = "225px",
}) => {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    changeHandler(event.target.value);
  };

  return (
    <SelectWrapper variant="standard" sx={{ minWidth: width }}>
      <FormControl variant="standard">
        {label && (
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        )}
        <Select
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: theme.palette.white,
                "& .MuiList-root": {
                  paddingTop: 0,
                },
                "& .MuiMenuItem-root": {
                  color: theme.palette.black,
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24.8px",
                  "&: hover": {
                    backgroundColor: theme.palette.violet,
                  },
                },
                "& .Mui-selected": {
                  backgroundColor: `${theme.palette.violet} !important`,
                },
              },
            },
          }}
          defaultValue=""
          id="demo-simple-select"
          value={value.label}
          onChange={handleChange}
        >
          {menuItems &&
            menuItems.map((elem: any) => (
              <MenuItem key={elem.id} value={elem.label}>
                {elem.label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </SelectWrapper>
  );
};
