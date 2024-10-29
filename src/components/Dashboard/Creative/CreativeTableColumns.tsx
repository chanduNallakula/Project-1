"use client";
import React from "react";
import { TableContainer, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { ColumnDef } from "@tanstack/react-table";
import CustomTable from "@/components/Table/CustomTable";
import CreativeActions from "./CreativeActions";
import { DataTableColumnHeader } from "@/components/Table/components/Columns/table-column-header";

// Styled components
const StyledTypography = styled(Typography)`
  font-weight: bold;
  font-size: 1.3rem;
  margin-top: 20px; /* Corrected 'margintop' */
  margin-bottom: -10px; /* Corrected 'maginbottom' */
`;

const StyledTableContainer = styled(TableContainer)`
  margin: 0px;
`;

interface CreativeDataProps {
  cbId: number;
  cbName: string;
  ctId: number;
  csId: number;
  cszId: number;
  cbPath: string;
}

const columns: ColumnDef<CreativeDataProps>[] = [
  {
    header: "cbName",
    accessorKey: "cbName",
    cell: ({ getValue }) => (
      <div className="text-nowrap !p-2.5">{getValue<string>()}</div>
    ),
  },
  {
    header: "ctId",
    accessorKey: "ctId",
    cell: ({ getValue }) => (
      <div className="text-nowrap !p-2.5">{getValue<string>()}</div>
    ),
  },
  {
    header: "csId",
    accessorKey: "csId",
    cell: ({ getValue }) => (
      <div className="text-nowrap !p-2.5">{getValue<string>()}</div>
    ),
  },
  {
    header: "cszId",
    accessorKey: "cszId",
    cell: ({ getValue }) => (
      <div className="text-nowrap !p-2.5">{getValue<string>()}</div>
    ),
  },
  {
    header: "cbPath",
    accessorKey: "cbPath",
    cell: ({ getValue }) => (
      <div className="text-nowrap !p-2.5">{getValue<string>()}</div>
    ),
  },
  {
    accessorKey: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => <CreativeActions cbId={row.original.cbId} />,
  },
];

const handleEdit = (data: CreativeDataProps) => {
  console.log("Edit:", data);
};

const handleDelete = (data: CreativeDataProps) => {
  console.log("Delete:", data);
};

// Main component
// const CreativeTableColumns: React.FC = () => {
//   return (
//     <>
//       <StyledTypography gutterBottom>Existing Creatives</StyledTypography>
//       <StyledTableContainer>
//         <CustomTable tableData={data} tableColumns={columns} />
//       </StyledTableContainer>
//     </>
//   );
// };

export default columns;
