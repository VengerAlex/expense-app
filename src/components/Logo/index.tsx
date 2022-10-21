import { FC } from "react";
import { Link } from "react-router-dom";
import { BoxProps, Box } from "@mui/material";
import companyLogo from "../../assets/images/logo.svg";

type ILogo = BoxProps;

export const Logo: FC<ILogo> = ({ ...props }) => {
  return (
    <Link to="/">
      <Box {...props} component="img" alt="Company logo" src={companyLogo} />
    </Link>
  );
};
