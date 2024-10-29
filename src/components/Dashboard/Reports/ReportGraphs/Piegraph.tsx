"use client";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
import { IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface DataEntry {
  name: string;
  impressions: number;
  clicks: number;
  conversions: number;
  id: number;
}

const barChartData: DataEntry[] = [
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

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

const Piegraph = ({ selectedDate }: { selectedDate: string | null }) => {
  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          {/* Your existing pie chart setup */}
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute bottom-1 left-4">
        <Typography>{selectedDate}</Typography>
      </div>
    </div>
  );
};

export default Piegraph;
