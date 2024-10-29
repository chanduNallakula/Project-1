import { DataTableColumnHeader } from "@/components/Table/components/Columns/table-column-header";
import { Checkbox } from "@/components/ui/checkbox";

import { ColumnDef } from "@tanstack/react-table";
import GeofenceGroupActions from "./GeofenceGroupActions";

// export interface GeofenceGroupProps {
//   gId: string;
//   groupName: string;
//   description: string;
//   noOfGeofences: number;
//   viewGroup: React.ReactNode;
//   coverageReport: React.ReactNode;
// }

// export const GeofenceGroupColumns: ColumnDef<GeofenceGroupProps>[] = [
//   // {
//   //   accessorKey: "gId",
//   //   header: ({ column }) => <DataTableColumnHeader column={column} title="gId" />,
//   //   cell: ({ row }) => <div className="min-w-[80px]">{row.getValue("gId")}</div>,
//   // },
//   {
//     accessorKey: "groupName",
//     header: ({ column }) => <DataTableColumnHeader column={column} title="Group Name" />,
//     cell: ({ row }) => <div>{row.getValue("groupName")}</div>,
//   },
//   {
//     accessorKey: "description",
//     header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
//     cell: ({ row }) => <div>{row.getValue("description")}</div>,
//   },

//   {
//     accessorKey: "noOfGeofences",
//     header: ({ column }) => (
//       <DataTableColumnHeader center column={column} title="No.of Geofences" />
//     ),
//     cell: ({ row }) => <div className="text-center">{row.getValue("noOfGeofences")}</div>,
//   },
//   {
//     accessorKey: "coverageReport",
//     header: ({ column }) => (
//       <DataTableColumnHeader center column={column} title="Coverage Report" />
//     ),
//     cell: ({ row }) => <div className="text-center">{row.original.coverageReport}</div>,
//   },
//   {
//     accessorKey: "actions",
//     header: ({ column }) => <DataTableColumnHeader center column={column} title="Actions" />,
//     cell: ({ row }) => <div className="text-center">{row.original.viewGroup}</div>,
//   },
// ];

interface GeofenceGroupColumnProps {
  gfgId: number;
  gfgName: string;
  gfgDescription: string;
  coverageReport: string;
}

export const GeofenceGroupColumns: ColumnDef<GeofenceGroupColumnProps>[] = [
  {
    accessorKey: "gfgName",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Group Name" />,
    cell: ({ row }) => <div className="text-nowrap !p-2.5">{row.getValue("gfgName")}</div>,
  },

  {
    accessorKey: "gfgDescription",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
    cell: ({ row }) => <div className="text-nowrap !p-2.5">{row.getValue("gfgDescription")}</div>,
  },

  {
    accessorKey: "actions",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Actions" />,
    cell: ({ row }) => <GeofenceGroupActions gfgId={row.original.gfgId} />,
  },
];
