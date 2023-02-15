import { FC, MouseEvent, useState } from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  useTheme,
} from "@mui/material";

import { StyledSecondaryButton } from "../../styles";

interface IActionButtons {
  onDelete: () => void;
  onEdit: () => void;
  coordinates: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

export const ActionButtons: FC<IActionButtons> = ({
  onDelete,
  onEdit,
  coordinates,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const deleteHandler = () => {
    onDelete();
    setAnchorEl(null);
  };

  return (
    <Box sx={{ position: "absolute", ...coordinates }}>
      <IconButton
        sx={{ color: theme.palette.black }}
        disableRipple
        aria-label="more"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-menu",
        }}
        PaperProps={{
          style: {
            left: "50%",
            transform: "translateX(-77%) translateY(-12%)",
          },
        }}
        sx={{
          "& .MuiList-root": {
            padding: "0px",
          },
          "& .MuiPopover-paper": {
            padding: "2px",
          },
          "& .MuiMenuItem-root": {
            padding: "2px",
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem>
          <Stack direction="column">
            <StyledSecondaryButton onClick={onEdit} isEdit>
              Edit
            </StyledSecondaryButton>
            <StyledSecondaryButton
              onClick={deleteHandler}
              sx={{ mt: "2px", px: "37px" }}
              isDelete
            >
              Delete
            </StyledSecondaryButton>
          </Stack>
        </MenuItem>
      </Menu>
    </Box>
  );
};
