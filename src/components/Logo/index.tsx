import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import companyLogo from "../../assets/images/logo.svg";

export const Logo = () => {
  return (
    <Link to="/">
      <Box component="img" alt="Company logo" src={companyLogo} />
    </Link>
  );
};
