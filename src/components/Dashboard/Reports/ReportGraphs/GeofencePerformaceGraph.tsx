import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Piegraph from "./Piegraph";
import CustomTable from "@/components/Table/CustomTable";
import { DataTableColumnHeader } from "@/components/Table/components/Columns/table-column-header";
import { ColumnDef } from "@tanstack/react-table";

interface GeofencePerformaceGraphProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setGeofenceView: React.Dispatch<React.SetStateAction<"graph" | "table">>;
  geofenceView: "graph" | "table";
}

const GeofencePerformaceGraph = ({
  step,
  setStep,
  geofenceView,
  setGeofenceView,
}: GeofencePerformaceGraphProps) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleTableCellClick = () => {
    setGeofenceView("graph");
    setStep(1);
  };

  const handleBarClick = (data: any) => {
    setStep(1);
    setSelectedDate(data.name);
  };

  return (
    <>
      {geofenceView === "graph" ? (
        step === 0 ? (
          <Bargraph setStep={setStep} onBarClick={handleBarClick} />
        ) : (
          <Piegraph selectedDate={selectedDate} />
        )
      ) : (
        <GeofencePerformanceTable onClickCell={handleTableCellClick} />
      )}
    </>
  );
};

const GeofencePerformanceTable = ({ onClickCell }: { onClickCell: () => void }) => {
  return (
    <div style={{ cursor: "pointer" }}>
      <CustomTable
        defaultTableView="table"
        hideFilters={true}
        tableColumns={GeofencePerformanceTableColumns}
        tableData={GeofencePerformanceTableData}
        onClickCell={onClickCell}
      />
    </div>
  );
};

interface GeofencePerformanceTableProps {
  gfid: number;
  gfName: string;
  impressions: number;
  conversions: number;
  CPM: number;
  CPC: number;
}

const GeofencePerformanceTableData: GeofencePerformanceTableProps[] = [
  {
    gfid: 1,
    gfName: "Geofence 1",
    impressions: 2400,
    conversions: 2400,
    CPM: 10,
    CPC: 20,
  },
  {
    gfid: 2,
    gfName: "Geofence 2",
    impressions: 1398,
    conversions: 2400,
    CPM: 20,
    CPC: 30,
  },
  {
    gfid: 3,
    gfName: "Geofence 3",
    impressions: 1394,
    conversions: 2400,
    CPM: 30,
    CPC: 40,
  },
  {
    gfid: 4,
    gfName: "Geofence 4",
    impressions: 1908,
    conversions: 2400,
    CPM: 40,
    CPC: 50,
  },
];

const GeofencePerformanceTableColumns: ColumnDef<GeofencePerformanceTableProps>[] = [
  {
    accessorKey: "gfName",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Geofence Name" />,
    cell: ({ row }) => <div className="text-nowrap !p-2.5">{row.getValue("gfName")}</div>,
  },
  {
    accessorKey: "impressions",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Impressions" />,
    cell: ({ row }) => <div className="!p-2.5">{row.getValue("impressions")}</div>,
  },
  {
    accessorKey: "conversions",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Conversions" />,
    cell: ({ row }) => <div className="!p-2.5">{row.getValue("conversions")}</div>,
  },
  {
    accessorKey: "CPM",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CPM" tooltip="Cost per impression" />
    ),
    cell: ({ row }) => <div className="!p-2.5">{row.getValue("CPM")}</div>,
  },
  {
    accessorKey: "CPC",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CPC" tooltip="Cost per conversion" />
    ),
    cell: ({ row }) => <div className="!p-2.5">{row.getValue("CPC")}</div>,
  },
];

interface DataEntry {
  name: string;
  impressions: number;
  clicks: number;
  conversions: number;
  id: number;
}

const Bargraph = ({
  setStep,
  onBarClick,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  onBarClick: (data: any) => void;
}) => {
  const data: DataEntry[] = [
    {
      name: "2024-09-06",
      impressions: 2400,
      clicks: 3000,
      conversions: 3400,
      id: 1,
    },
    {
      name: "2024-08-04",
      impressions: 1398,
      clicks: 2400,
      conversions: 3200,
      id: 2,
    },
    {
      name: "2024-07-06",
      impressions: 1394,
      clicks: 1800,
      conversions: 2000,
      id: 3,
    },
    {
      name: "2024-06-08",
      impressions: 1908,
      clicks: 2480,
      conversions: 2890,
      id: 4,
    },
  ];

  return (
    <div>
      <ResponsiveContainer height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            style={{ cursor: "pointer" }}
            onClick={(data) => onBarClick(data)}
            dataKey="impressions"
            fill="#8884d8"
            barSize={30}
          />
          <Bar
            style={{ cursor: "pointer" }}
            onClick={(data) => onBarClick(data)}
            dataKey="clicks"
            fill="#82ca9d"
            barSize={30}
          />
          <Bar
            style={{ cursor: "pointer" }}
            onClick={(data) => onBarClick(data)}
            dataKey="conversions"
            fill="#FFA500"
            barSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GeofencePerformaceGraph;
