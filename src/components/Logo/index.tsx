import { FC } from "react";

import { Box, BoxProps } from "@mui/material";
import { Link } from "react-router-dom";

import companyLogo from "../../assets/images/logo.svg";

type ILogo = BoxProps;

export const Logo: FC<ILogo> = ({ ...props }) => {
  return (
    <Link to="/">
      <Box {...props} component="img" alt="Company logo" src={companyLogo} />
    </Link>
  );
};
