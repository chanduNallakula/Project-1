import DashboardContainer from "@/components/Dashboard/DashboardContainer";
import GroupBarGraph from "@/components/Dashboard/Graphs/GroupBarGraph";
import Reports from "@/components/Dashboard/Reports/Reports";
import { Container } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div>
      <DashboardContainer>
        <Reports />
        <GroupBarGraph />
      </DashboardContainer>
    </div>
  );
};

export default page;
