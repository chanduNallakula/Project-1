import React from "react";
import { Card, Typography, Grid, Box } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CheckIcon from "@mui/icons-material/Check";

type Counts = {
  today: number;
  yesterday: number;
  mtd: number;
};

interface BarcardsProps {
  clickCounts: Counts;
  conversionCounts: Counts;
}

const Barcards: React.FC<BarcardsProps> = ({ clickCounts, conversionCounts }) => {
  const renderStats = (counts: Counts, isConversion = false) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "10px",
        flexWrap: "wrap",
      }}
    >
      {["Today", "Yesterday", "MTD"].map((label, idx) => (
        <Box
          key={label}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "#b0b0b0", wordBreak: "break-word" }}>
            {label}
          </Typography>
          <Typography
            sx={{
              color: isConversion ? "#0d98ba" : undefined,
              wordBreak: "break-word", // Ensure text breaks instead of cutting off
            }}
          >
            {Object.values(counts)[idx]}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <Grid container spacing={4}>
      {[
        {
          icon: ThumbUpIcon,
          label: "CLICKS",
          counts: clickCounts,
        },
        {
          icon: CheckIcon,
          label: "CONVERSIONS",
          counts: conversionCounts,
        },
      ].map(({ icon: Icon, label, counts }, idx) => (
        <Grid item xs={12} md={6} key={label}>
          <Card sx={{ padding: "20px", boxSizing: "border-box" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Icon style={{ color: "#0d98ba", marginRight: "8px" }} />
              <Typography
                variant="h6"
                sx={{
                  color: "#0d98ba",
                  flexWrap: "wrap",
                }}
              >
                {label}
              </Typography>
            </Box>
            {renderStats(counts, idx === 1)}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Barcards;
