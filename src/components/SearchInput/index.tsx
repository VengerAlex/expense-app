import { FC } from "react";
import { Box, IconButton, TextFieldProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchField } from "../../styles/index";

type ISearchInput = TextFieldProps & {};

export const SearchInput: FC<ISearchInput> = () => {
  return (
    <Box sx={{ width: "180px" }}>
      <SearchField
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
