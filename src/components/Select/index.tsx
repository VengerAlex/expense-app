import { FC } from "react";
import { SelectWrapper } from "../../styles";
import {
  FormControl,
  MenuItem,
  useTheme,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface ISelect {
  menuItems: any;
  value: any;
  changeHandler: (value: any) => void;
}

export const MySelect: FC<ISelect> = ({ value, menuItems, changeHandler }) => {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    changeHandler(event.target.value);
  };

  return (
    <SelectWrapper variant="standard" sx={{ minWidth: "225px" }}>
      <FormControl variant="standard">
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
