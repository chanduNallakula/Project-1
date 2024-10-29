import { TableContainer, Table, TableRow, TableCell, Typography } from "@mui/material";
import styled from "@emotion/styled";
export const StyledTypography = styled(Typography)`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem; /* Adjust font size as needed */
`;
export const StyledTableContainer = styled(TableContainer)`
  margin: 30px 0;
`;

export const StyledTable = styled(Table)`
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledTableHeadRow = styled(TableRow)`
  background-color: rgb(248, 248, 255);
  border-bottom: 2px solid lightgrey;
`;

export const StyledTableBodyRow = styled(TableRow)`
  &:not(:last-child) {
    border-bottom: 2px solid lightgrey;
  }
`;
