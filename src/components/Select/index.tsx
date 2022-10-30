import { FC } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SelectWrapper } from "../../styles";
import { useTheme } from "@mui/material";

interface ISelect {
  label: any;
  menuItems: any;
  value: any;
  setCategory: (value: any) => void;
}

export const MySelect: FC<ISelect> = ({
  label,
  menuItems,
  value,
  setCategory,
}) => {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    const category = menuItems?.find(
      (el: any) => el.id === Number(event.target.value),
    );

    if (category) {
      console.log(category, "!!category");
      setCategory(category);
    }
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
        defaultValue=""
        labelId="category"
        onChange={handleChange}
        value={value?.label}
        label="Category"
      >
        {menuItems &&
          menuItems.map((categoryItem: any) => (
            <MenuItem key={categoryItem.id} value={categoryItem.id}>
              {categoryItem.label}
            </MenuItem>
          ))}
      </Select>
    </SelectWrapper>
  );
};
