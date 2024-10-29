import React from "react";
import { Card, Typography, Chip, Box, Container } from "@mui/material";

import { CalendarMonthOutlined } from "@mui/icons-material";

const chipColors: { [key: string]: string } = {
  Completed: "#4169e1",
  Active: "#228b22",
};

interface ActivityCardProps {
  title: string;
  status: string;
  date: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, status, date }) => (
  <Card sx={{ p: 2, marginBottom: "1px" }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography>{title}</Typography>
      <Chip label={status} sx={{ color: "white", bgcolor: chipColors[status] || "grey" }} />
    </Box>
    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
      <CalendarMonthOutlined style={{ fontSize: "19px" }} />
      <Typography sx={{ fontSize: "0.8125rem", ml: 0.5 }}>{date}</Typography>
    </Box>
  </Card>
);

const RecentActivity: React.FC = () => (
  <>
    <Box sx={{ marginTop: "50px" }}>
      <Typography variant="h6" gutterBottom>
        Recent Activity
      </Typography>
      <ActivityCard
        title="New audience set created"
        status="Completed"
        date="Created on January 15, 2025"
      />
      <ActivityCard
        title="Campaign 'Summer Sale' launched"
        status="Active"
        date="Launched on January 10, 2025"
      />
      <ActivityCard
        title="New audience set created"
        status="Completed"
        date="Created on January 15, 2025"
      />
      <ActivityCard
        title="Campaign 'Summer Sale' launched"
        status="Active"
        date="Launched on January 10, 2025"
      />
      <ActivityCard
        title="New audience set created"
        status="Completed"
        date="Created on January 15, 2025"
      />
      <ActivityCard
        title="Campaign 'Summer Sale' launched"
        status="Active"
        date="Launched on January 10, 2025"
      />
    </Box>
  </>
);

export default RecentActivity;
