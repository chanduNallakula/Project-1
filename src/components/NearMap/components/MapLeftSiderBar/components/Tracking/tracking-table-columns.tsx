import { DataTableColumnHeader } from "@/components/Table/components/Columns/table-column-header";
import { trackingProps } from "@/store/trackingStore";
import { ColumnDef } from "@tanstack/react-table";

export const trackingColums: ColumnDef<trackingProps>[] = [
  {
    accessorKey: "campaignName",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Campaign Name" />,
    cell: ({ row }) => <div className="!text-nowrap !p-2.5">{row.getValue("campaignName")}</div>,
  },
  {
    accessorKey: "count",
    header: ({ column }) => <DataTableColumnHeader center column={column} title="Count" />,
    cell: ({ row }) => (
      <div className="!text-nowrap !text-center !p-2.5">{row.getValue("count")}</div>
    ),
  },
  {
    accessorKey: "deviceInfo",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Device Info" />,
    cell: ({ row }) => <div className="!max-w-60 !p-2.5">{row.getValue("deviceInfo")}</div>,
  },
  {
    accessorKey: "pixelTrackingUrl",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Pixel Tracking URL" />,
    cell: ({ row }) => <div className="!max-w-72 !p-2.5">{row.getValue("pixelTrackingUrl")}</div>,
  },
  {
    accessorKey: "callbackUrl",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Callback URL" />,
    cell: ({ row }) => <div className="!max-w-72 !p-2.5">{row.getValue("callbackUrl")}</div>,
  },
];
