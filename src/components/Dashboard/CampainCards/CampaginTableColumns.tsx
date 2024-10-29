"use client";
import React from "react";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/Table/components/Columns/table-column-header";
import CampaginTableActions from "./CampaginTableActions";

interface Campaign {
  cId: number;
  name: string;
  organization: string;
  description: string;
  oId?: string;
}

const CampaginTableColumns: ColumnDef<Campaign>[] = [
  {
    accessorKey: "cName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Campaign Name" />
    ),
    cell: ({ row }) => (
      <div className="text-nowrap !p-2.5">{row.getValue("cName")}</div>
    ),
  },

  {
    accessorKey: "oName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Organization" />
    ),
    cell: ({ row }) => (
      <div className="text-nowrap !p-2.5">
        {row.getValue("oName") ? row.getValue("oName") : row.original.oId}
      </div>
    ),
  },
  {
    accessorKey: "cDescription",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => (
      <div className="text-nowrap !p-2.5">{row.getValue("cDescription")}</div>
    ),
  },
  {
    accessorKey: "opens",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Opens" />
    ),
    cell: ({ row }) => (
      <div className="text-nowrap !p-2.5">
        {row.getValue("opens") ? row.getValue("opens") : 0}
      </div>
    ),
  },
  {
    accessorKey: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => <CampaginTableActions cId={row.original.cId} />,
  },
];
export default CampaginTableColumns;
