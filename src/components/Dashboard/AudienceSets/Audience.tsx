"use client";
import React from "react";
import AudienceSets from "./AudienceSets";
import AudienceStats from "./AudienceStats";
import DashboardContainer from "../DashboardContainer";
import { Box, Container } from "@mui/material";

const Audience = () => {
  return (
    <Box>
      <DashboardContainer fullWidth>
        <AudienceSets />
      </DashboardContainer>
      <AudienceStats />
    </Box>
  );
};

export default Audience;
