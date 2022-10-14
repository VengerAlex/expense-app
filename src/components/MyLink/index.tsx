import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

interface ILink {
  to: string;
  children: ReactNode;
}

export const MyLink: FC<ILink> = ({ to, children }) => {
  return (
    <Link to={to}>
      <Typography
        sx={{ color: "#69B0FF", ml: 1 }}
        component="span"
        variant="subtitle2"
      >
        {children}
      </Typography>
    </Link>
  );
};
