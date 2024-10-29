import React from "react";
import { Typography, CircularProgress, Box, Paper } from "@mui/material";

const progressData = [
  { value: 90, label1: "People", label2: "of 10cm" },
  { value: 60, label1: "Places", label2: "of 1m" },
  { value: 90, label1: "Audience Sets", label2: "of 10k" },
  { value: 70, label1: "Reports", label2: "of 1k" },
  { value: 30, label1: "Active", label2: "Campaigns" },
];

const CircularProgressWithLabel = ({ value }: { value: number }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      height: "100%",
    }}
  >
    <CircularProgress
      variant="determinate"
      value={100}
      size={60}
      sx={{
        color: "lightgray",
        position: "absolute",
        "& .MuiCircularProgress-circle": {
          strokeLinecap: "round",
        },
      }}
    />
    <CircularProgress variant="determinate" value={value} size={60} />
    <Typography
      variant="caption"
      sx={{
        position: "absolute",
        fontSize: "16px",
        zIndex: 1,
      }}
    >
      {`${Math.round(value)}`}
    </Typography>
  </div>
);

const AudienceStats = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          borderRadius: "5px",
          padding: "10px 30px",
        }}
      >
        {progressData.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <CircularProgressWithLabel value={item.value} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="caption"
                style={{ fontSize: "14px", fontWeight: "bold" }}
              >
                {item.label1}
              </Typography>
              <Typography variant="caption">{item.label2}</Typography>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AudienceStats;
