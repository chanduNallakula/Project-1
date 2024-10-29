"use client";
import React, { useState } from "react";
import { StyledTableContainer, StyledTypography } from "./StyledTable";
import CustomTable from "@/components/Table/CustomTable";
import { ColumnDef } from "@tanstack/react-table";

const data = [
  { metric: "Total Reach", value: "2,345,678", change: "+5.4%" },
  { metric: "Engagement Rate", value: "3.21%", change: "-0.5%" },
  { metric: "Average Time Spent", value: "2m 34s", change: "+12s" },
  { metric: "Cost per Conversation", value: "$2.45", change: "-$0.30" },
];

interface MetricData {
  metric: string;
  value: string;
  change: string;
}

const columns: ColumnDef<MetricData>[] = [
  {
    header: "METRIC",
    accessorKey: "metric",
    cell: ({ getValue }) => <div className="text-nowrap !p-2.5">{getValue<string>()}</div>,
  },
  {
    header: "VALUE",
    accessorKey: "value",
    cell: ({ getValue }) => <div className="text-nowrap !p-2.5">{getValue<string>()}</div>,
  },
  {
    header: "CHANGE",
    accessorKey: "change",
    cell: ({ getValue }) => <div className="text-nowrap !p-2.5">{getValue<string>()}</div>,
  },
];

const TableCard = () => {
  return (
    <>
      <StyledTypography>Detailed Metrics</StyledTypography>
      <StyledTableContainer>
        <CustomTable bgColor="#ffffff" hideFilters={true} tableData={data} tableColumns={columns} />
      </StyledTableContainer>
    </>
  );
};

export default TableCard;
