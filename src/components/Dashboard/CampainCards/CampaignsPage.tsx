import React from "react";
import CampaignCards from "@/components/Dashboard/CampainCards/CampainCards";
import DashboardContainer from "@/components/Dashboard/DashboardContainer";

const CampaignsPage = () => {
  return (
    <>
      <DashboardContainer>
        <CampaignCards />
      </DashboardContainer>
    </>
  );
};

export default CampaignsPage;
