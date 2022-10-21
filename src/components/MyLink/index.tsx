import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Typography, useTheme } from "@mui/material";

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
