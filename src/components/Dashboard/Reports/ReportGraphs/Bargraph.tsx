import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataEntry {
  name: string;
  impressions: number;
  clicks: number;
  conversions: number;
  id: number;
}

const Bargraph = () => {
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
          <Bar dataKey="impressions" fill="#8884d8" barSize={30} />
          <Bar dataKey="clicks" fill="#82ca9d" barSize={30} />
          <Bar dataKey="conversions" fill="#FFA500" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Bargraph;
