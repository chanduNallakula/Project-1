"use client";
import React from "react";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/Table/components/Columns/table-column-header";
import AudiencesActions from "./AudiencesActions";

interface AudienceSetDataProps {
  asId: number;
  asName: string;
  asStatus: number;
  ctId: number;
  asDesc: string;
  asPicPath: string;
  cId: number;
  sId: number;
  createdBy: number;
  createdOn: string;
}

const AudienceTableColumns: ColumnDef<AudienceSetDataProps>[] = [
  {
    header: "asName",
    accessorKey: "asName",
    cell: ({ getValue }) => (
      <div className="text-nowrap !p-2.5">{getValue<string>()}</div>
    ),
  },
  {
    header: "asDesc",
    accessorKey: "asDesc",
    cell: ({ getValue }) => (
      <div className="text-nowrap !p-2.5">{getValue<string>()}</div>
    ),
  },
  {
    header: "createdOn",
    accessorKey: "createdOn",
    cell: ({ getValue }) => (
      <div className="text-nowrap !p-2.5">{getValue<string>()}</div>
    ),
  },

  {
    accessorKey: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => <AudiencesActions asId={row.original?.asId} />,
  },
];

export default AudienceTableColumns;
