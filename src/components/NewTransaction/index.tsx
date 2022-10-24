import { FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { NewTransactionWrapper } from "../../styles";
import Input from "../Input";

interface INewTransaction {}

export const NewTransaction: FC<INewTransaction> = () => {
  const theme = useTheme();

  return (
    <NewTransactionWrapper>
      <Typography variant="h4" mb={2} color={theme.palette.darkBlack}>
        Add Transaction
      </Typography>
      <Input
        sx={{ mb: 2 }}
        fullWidth
        label="Transaction Name "
        placeholder="For my car tuning wheels by BBS"
        isBlack
      />
    </NewTransactionWrapper>
  );
};
