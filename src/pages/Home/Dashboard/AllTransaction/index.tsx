import { FC } from "react";
import { Box, Typography, useTheme, Stack } from "@mui/material";
import { SearchInput } from "../../../../components/SearchInput";
import { TransactionTable } from "../TransactionTable";

interface IAllTransaction {}
export const AllTransaction: FC<IAllTransaction> = () => {
  const theme = useTheme();

  return (
    <Box mt={2} p={3}>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        mb={2}
      >
        <Typography variant="h4" color={theme.palette.darkBlack}>
          All Transaction
        </Typography>
        <SearchInput />
      </Stack>
      <TransactionTable />
    </Box>
  );
};
