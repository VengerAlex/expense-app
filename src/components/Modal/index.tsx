import { FC, ReactElement } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Box, Dialog, DialogProps, IconButton, useTheme } from "@mui/material";

type IModal = DialogProps & {
  children: ReactElement;
  closeHandler: () => void;
};

export const Modal: FC<IModal> = ({ children, closeHandler, ...props }) => {
  const theme = useTheme();

  return (
    <Dialog {...props} onClose={closeHandler}>
      <Box sx={{ p: 4, position: "relative" }}>{children}</Box>

      <IconButton
        disableRipple
        onClick={closeHandler}
        sx={{
          position: "absolute",
          right: "10px",
          top: "5px",
          color: theme.palette.black,
        }}
      >
        <CloseIcon />
      </IconButton>
    </Dialog>
  );
};
