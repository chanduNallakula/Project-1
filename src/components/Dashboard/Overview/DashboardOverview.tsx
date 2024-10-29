import React from "react";
import DashboardContainer from "../DashboardContainer";
import DashboardOverviewCards from "./DashboardOverviewCards";
import RecentActivity from "./RecentActivity";

const DashboardOverview = () => {
  return (
    <DashboardContainer>
      <DashboardOverviewCards />
      <RecentActivity />
    </DashboardContainer>
  );
};

export default DashboardOverview;
