import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

import CampaignActions from "./CampainActions";
import { DownloadIcon } from "@radix-ui/react-icons";
import { Button, IconButton } from "@mui/material";
import { DataTableColumnHeader } from "@/components/Table/components/Columns/table-column-header";
import CampaginTableActions from "@/components/Dashboard/CampainCards/CampaginTableActions";

interface Campaign {
  cId: string;
  cName: string;
  audienceGroups: string | string[];
  geofenceCount: number;
  deviceCount: number;
  execuinReport: string;
  status: string;
  oId: string;
}

export const CampainColumns: ColumnDef<Campaign>[] = [
  // {
  //   accessorKey: "cId",
  //   header: ({ column }) => <DataTableColumnHeader column={column} title="cId" />,
  //   cell: ({ row }) => <div>{row.getValue("cId")}</div>,
  // },
  {
    accessorKey: "cName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Campaign Name" />
    ),
    cell: ({ row }) => <div>{row.getValue("cName")}</div>,
  },
  {
    accessorKey: "audienceGroups",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Audience Groups" />
    ),
    cell: ({ row }) => (
      <div>{(row.getValue("audienceGroups") as string[]).join(", ")}</div>
    ),
  },

  {
    accessorKey: "geofenceCount",
    header: ({ column }) => (
      <DataTableColumnHeader center column={column} title="No.of Geofences" />
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("geofenceCount")}</div>
    ),
  },
  {
    accessorKey: "deviceCount",
    header: ({ column }) => (
      <DataTableColumnHeader center column={column} title="No.of Devices" />
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("deviceCount")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => <div>{row.getValue("status")}</div>,
  },
  {
    accessorKey: "execuinReport",
    header: ({ column }) => (
      <DataTableColumnHeader center column={column} title="Execution Report" />
    ),
    cell: ({ row }) => (
      <div className="text-center">
        <IconButton title="Download Execution Report">
          <DownloadIcon color="#0984e3" width={24} height={24} />
        </IconButton>
      </div>
    ),
  },
  // {
  //   accessorKey: "Action",
  //   header: ({ column }) => <DataTableColumnHeader column={column} title="Actions" />,
  //   cell: ({ row }) => <CampaignActions id={row.getValue("cId")} />,
  // },
];

interface TempCampaign {
  cId: number;
  name: string;
  organization: string;
  description: string;
  oId?: string;
}

export const TempCampainColumns: ColumnDef<TempCampaign>[] = [
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
