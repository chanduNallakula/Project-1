import { Checkbox } from "@/components/ui/checkbox";

import { DataTableColumnHeader } from "@/components/Table/components/Columns/table-column-header";
import { ColumnDef } from "@tanstack/react-table";
import { GeoFenceDataProps } from "@/store/googleMapStore";
import MyGeofencesActions from "./MyGeofencesActions";

export const GeofencesColumns = (
  handleViewGeofence: (id: string) => void,
  handleEditGeofence: (id: string) => void
): ColumnDef<GeoFenceDataProps>[] => {
  return [
    // {
    //   accessorKey: "id",
    //   header: ({ column }) => <DataTableColumnHeader column={column} title="S.No" />,
    //   cell: ({ row }) => <div>{row.index + 1}</div>,
    // },
    {
      accessorKey: "name",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Geofences Name" />,
      cell: ({ row }) => <div>{row.original.properties.name}</div>,
    },

    {
      accessorKey: "category",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Category" />,
      cell: ({ row }) => <div>{row.original.properties.category}</div>,
    },

    {
      accessorKey: "subCategory",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Sub Category" />,
      cell: ({ row }) => <div>{row.original.properties.subCategory}</div>,
    },
    {
      accessorKey: "group",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Group" />,
      cell: ({ row }) => <div>{row.original.properties.group}</div>,
    },
    {
      accessorKey: "visibility",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Public/Private" />,
      cell: ({ row }) => (
        <div>{row.original.properties.isPublic === true ? "Public" : "Private"}</div>
      ),
    },
    {
      accessorKey: "actions",
      header: ({ column }) => <DataTableColumnHeader center column={column} title="Actions" />,
      cell: ({ row }) => (
        <div className="min-w-[80px] text-center">
          <MyGeofencesActions
            id={row.original.id}
            onViewGeofence={handleViewGeofence}
            onEditGeofence={handleEditGeofence}
          />
        </div>
      ),
    },
  ];
};
