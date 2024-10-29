"use client";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import styled from "@emotion/styled";

interface MenuLayerTableProps {
  headings: string[];
  tableBody: JSX.Element;
}

const MenuLayerTable = ({ headings, tableBody }: MenuLayerTableProps) => {
  return (
    <TableContainer
      sx={{
        maxHeight: "80vh",
      }}
      className="horizontal-scrollbar-style"
    >
      <CampaignTable size="medium">
        <TableHead>
          <TableRow>
            {headings.map((heading, index) => {
              return (
                <CampaignTabelCell align="center" key={heading + index}>
                  <CampaignTypography>{heading}</CampaignTypography>
                </CampaignTabelCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>{tableBody}</TableBody>
      </CampaignTable>
    </TableContainer>
  );
};

export default MenuLayerTable;

export const CampaignTable = styled(Table)``;

export const CampaignTabelCell = styled(TableCell)`
  &.MuiTableCell-root {
    border: 2px solid #fff;
  }
`;

export const CampaignTypography = styled(Typography)`
  &.MuiTypography-root {
    color: #fff;
    font-weight: 500;
    font-size: 16px;
  }
`;
