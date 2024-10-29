import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "2024-01-01", Impressions: 2400, Clicks: 1000 },
  { date: "2024-01-02", Impressions: 1398, Clicks: 1000 },
  { date: "2024-01-03", Impressions: 9800, Clicks: 1000 },
  { date: "2024-01-04", Impressions: 3908, Clicks: 2000 },
  { date: "2024-01-05", Impressions: 4800, Clicks: 1000 },
  { date: "2024-01-06", Impressions: 3800, Clicks: 1000 },
  { date: "2024-01-07", Impressions: 4300, Clicks: 1000 },
];

const Bargraph = () => {
  return (
    <div>
      <ResponsiveContainer height={250}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="linear" dataKey="Impressions" stroke="#8884d8" activeDot={{ r: 6 }} />

          <Line type="linear" dataKey="Clicks" stroke="#82ca9d" activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Bargraph;
