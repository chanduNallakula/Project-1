"use client";
import React, { useState } from "react";
import { Typography, Grid, IconButton, Container } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

import Barcards from "./Barcards";
import { Calendar } from "lucide-react";

interface DataEntry {
  name: string;
  impressions: number;
  clicks: number;
  conversions: number;
}

interface ChartEntry {
  activePayload?: { payload: DataEntry }[];
}

const GroupBarGraph = () => {
  const [clickCounts, setClickCounts] = useState({
    today: 0,
    yesterday: 0,
    mtd: 4,
  });
  const [conversionCounts, setConversionCounts] = useState({
    today: 0,
    yesterday: 0,
    mtd: 0,
  });

  const data: DataEntry[] = [
    {
      name: "2024-09-06",
      impressions: 2400,
      clicks: 3000,
      conversions: 3400,
    },
    {
      name: "2024-08-04",
      impressions: 1398,
      clicks: 2000,
      conversions: 3000,
    },
    {
      name: "2024-07-06",
      impressions: 1394,
      clicks: 2000,
      conversions: 3000,
    },
    {
      name: "2024-06-08",
      impressions: 1908,
      clicks: 2480,
      conversions: 2890,
    },
  ];

  const handleBarClick = (entry: ChartEntry) => {
    if (entry && entry.activePayload && entry.activePayload.length > 0) {
      const clickedData = entry.activePayload[0].payload;

      setClickCounts((prevCounts) => ({
        ...prevCounts,
        mtd: clickedData.clicks,
      }));
      setConversionCounts((prevCounts) => ({
        ...prevCounts,
        mtd: clickedData.conversions,
      }));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        style={{ marginBottom: "20px" }}
      >
        <Grid item>
          <Typography variant="h6" sx={{ color: "#0d98ba" }}>
            PERFORMANCE REPORT
          </Typography>
        </Grid>

        <Grid
          item
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid lightgray",
            borderRadius: "5px",
          }}
        >
          <IconButton>
            <Calendar size={18} />
          </IconButton>
          <Typography variant="body2" sx={{ marginRight: "4px" }}>
            2024-08-14 - 2024-09-12
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" alignItems="center" style={{ marginBottom: "10px" }}>
        <Typography variant="h6">Performance Reports</Typography>
      </Grid>

      <div
        style={{
          position: "relative",
          marginLeft: "50px",
        }}
      >
        <ResponsiveContainer width="95%" height={400}>
          <BarChart data={data} onClick={handleBarClick}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="impressions" fill="#8884d8" barSize={30} />
            <Bar dataKey="clicks" fill="#82ca9d" barSize={30} />
            <Bar dataKey="conversions" fill="#FFA500" barSize={30} />
          </BarChart>
        </ResponsiveContainer>

        <div
          style={{
            position: "absolute",
            top: "70px",
            left: "-70px",
            transform: "rotate(-90deg)",
            fontSize: "14px",
          }}
        >
          Conversions and
          <br /> <span style={{ marginLeft: "20px" }}>Payouts</span>
        </div>
        <div
          style={{
            position: "absolute",
            top: "200px",
            right: "-20px",
            transform: "rotate(-270deg)",
            fontSize: "14px",
          }}
        >
          Clicks and Impressions
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <Barcards clickCounts={clickCounts} conversionCounts={conversionCounts} />
      </div>
    </div>
  );
};

export default GroupBarGraph;
