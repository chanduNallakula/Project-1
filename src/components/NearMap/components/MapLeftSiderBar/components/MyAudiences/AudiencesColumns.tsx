import { DataTableColumnHeader } from "@/components/Table/components/Columns/table-column-header";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

interface AudiencesProps {
  aId: string;
  aName: string;
  description: string;
  count: number;
}

export const MyAudiencesColumns: ColumnDef<AudiencesProps>[] = [
  // {
  //   accessorKey: "aId",
  //   header: ({ column }) => <DataTableColumnHeader column={column} title="aId" />,
  //   cell: ({ row }) => <div className="text-nowrap p-2.5">{row.getValue("aId")}</div>,
  //   size: 10,
  // },
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Audience Name" />,
    cell: ({ row }) => <div className="text-nowrap !p-2.5">{row.getValue("name")}</div>,
    size: 10,
  },
  {
    accessorKey: "description",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
    cell: ({ row }) => <div className="!p-2.5">{row.getValue("description")}</div>,
    size: 10,
  },
  {
    accessorKey: "count",
    header: ({ column }) => <DataTableColumnHeader center column={column} title="Count" />,
    cell: ({ row }) => (
      <div className="text-nowrap text-center !p-2.5">{row.getValue("count")}</div>
    ),
    size: 10,
  },
];
