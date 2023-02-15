import { FC, ReactNode } from "react";

import { Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

interface ILink {
  to: string;
  children: ReactNode;
}

export const MyLink: FC<ILink> = ({ to, children }) => {
  const theme = useTheme();

  return (
    <Link to={to}>
      <Typography
        sx={{ color: theme.palette.blue, ml: 1 }}
        component="span"
        variant="subtitle2"
      >
        {children}
      </Typography>
    </Link>
  );
};
