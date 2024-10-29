"use client";
import React, { useState } from "react";
import Bargraph from "./Bargraph";
import Linechart from "./Linechart";
import Funnel from "./Funnel";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  ToggleButton,
  ToggleButtonGroup,
  Stack,
  Tooltip,
} from "@mui/material";
import GeofencePerformaceGraph from "./GeofencePerformaceGraph";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BarChartIcon from "@mui/icons-material/BarChart";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";

const cardData = [
  { heading: "Total Impressions" },
  { heading: "Audience Engagement" },
  { heading: "Conversion Funnel" },
  { heading: "Geofence Performance" },
];

const CardsComponent: React.FC = () => {
  const [alignments, setAlignments] = useState<string[]>(["graph", "table", "graph", "graph"]);
  const [geofenceStep, setGeofenceStep] = useState(0);
  const [geofenceView, setGeofenceView] = useState<"graph" | "table">("graph");

  const handleToggleChange = (index: number, newAlignment: string | null) => {
    const newAlignments = [...alignments];
    newAlignments[index] = newAlignment ?? "graph";
    console.log(newAlignments);
    setAlignments(newAlignments);
  };

  const renderGraph = (graph: string) => {
    switch (graph) {
      case "Total Impressions":
        return <Linechart />;
      case "Conversion Funnel":
        return <Funnel />;
      case "Audience Engagement":
        return <Bargraph />;
      case "Geofence Performance":
        return (
          <GeofencePerformaceGraph
            geofenceView={geofenceView}
            step={geofenceStep}
            setStep={setGeofenceStep}
            setGeofenceView={setGeofenceView}
          />
        );
      default:
        return null;
    }
  };

  const handleBackClick = () => {
    setGeofenceStep(0);
    setGeofenceView("graph");
    handleToggleChange(3, "graph");
  };

  return (
    <Grid container spacing={2} my={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card sx={{ height: "100%" }}>
            <CardContent style={{ position: "relative" }}>
              <Stack direction={"row"} justifyContent={"space-between"} mb={2}>
                <Typography variant="h6" gutterBottom>
                  {card.heading === "Geofence Performance" &&
                  geofenceStep > 0 &&
                  geofenceView === "graph" ? (
                    <>
                      <ArrowBackIcon
                        style={{ cursor: "pointer", marginRight: 1 }}
                        onClick={handleBackClick}
                      />
                    </>
                  ) : (
                    card.heading
                  )}
                  {card.heading !== "Geofence Performance"}
                </Typography>
                <ToggleButtonGroup
                  color="primary"
                  value={alignments[index]}
                  exclusive
                  onChange={(event, newAlignment) => {
                    setGeofenceStep(0);
                    handleToggleChange(index, newAlignment);
                  }}
                >
                  {card.heading === "Geofence Performance" && (
                    <>
                      <Tooltip title="Graph view">
                        <ToggleButton
                          value="graph"
                          onClick={() => {
                            setGeofenceView("graph");
                            handleToggleChange(index, "graph");
                          }}
                        >
                          <BarChartIcon />
                        </ToggleButton>
                      </Tooltip>

                      <Tooltip title="Table view">
                        <ToggleButton
                          value="table"
                          onClick={() => {
                            setGeofenceView("table");
                            handleToggleChange(index, "table");
                          }}
                        >
                          <WindowOutlinedIcon />
                        </ToggleButton>
                      </Tooltip>
                    </>
                  )}
                  <Tooltip title="Export to CSV">
                    <ToggleButton value="csv">CSV</ToggleButton>
                  </Tooltip>
                  <Tooltip title="Export to PDF">
                    <ToggleButton value="pdf">PDF</ToggleButton>
                  </Tooltip>
                </ToggleButtonGroup>
              </Stack>
              {renderGraph(card.heading)}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsComponent;
