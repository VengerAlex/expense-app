import { FC } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SelectWrapper } from "../../styles";
import { useTheme } from "@mui/material";

interface ISelect {
  label: string;
  menuItems: string[];
  value: string;
  setCategory: (value: string) => void;
}

export const MySelect: FC<ISelect> = ({
  label,
  menuItems,
  value,
  setCategory,
}) => {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <SelectWrapper variant="standard" sx={{ minWidth: "225px" }}>
      <InputLabel id="category">{label}</InputLabel>
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
        labelId="category"
        value={value || ""}
        onChange={handleChange}
        label="Category"
      >
        {menuItems.map((categoryItem) => (
          <MenuItem key={categoryItem} value={categoryItem}>
            {categoryItem}
          </MenuItem>
        ))}
      </Select>
    </SelectWrapper>
  );
};
