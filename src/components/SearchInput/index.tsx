import { ChangeEvent, FC } from "react";
import { Box, IconButton, TextFieldProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchField } from "../../styles/index";

type ISearchInput = TextFieldProps & {
  value: string;
  changeHandler: (value: string) => void;
};

export const SearchInput: FC<ISearchInput> = ({ value, changeHandler }) => {
  return (
    <Box sx={{ width: "180px" }}>
      <SearchField
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          changeHandler(e.target.value)
        }
        fullWidth
        variant="standard"
        InputProps={{
          startAdornment: (
            <IconButton disableRipple>
              <SearchIcon sx={{ color: "#1D283A" }} />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
};
