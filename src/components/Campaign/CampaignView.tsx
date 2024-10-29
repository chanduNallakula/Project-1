import Typography from "@mui/material/Typography";

import React from "react";
import CampaignGoal from "./components/CampaignGoal";
import CampaignNavigationButtons from "./components/CampaignNavigationButtons";
import ChooseCampaignType from "./components/ChooseCampaignType";
import CampaignSettings from "./components/CampaignSettings";
import CampaignBidStrategy from "./components/CampaignBidStrategy";
import CampaignBudget from "./components/CampaignBudget";
import CampaignAdCreator from "./components/CampaignAdCreator";

interface CampaignViewProps {
  activeView: keyof typeof campaignViewsMap;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

export const campaignViewsMap = {
  chooseGoal: <CampaignGoal />,
  chooseCampaign: <ChooseCampaignType />,
  campaignSettings: <CampaignSettings />,
  setBidStrategy: <CampaignBidStrategy />,
  setBudget: <CampaignBudget />,
  adCreator: <CampaignAdCreator />,
};

const CampaignView = ({ activeView, activeStep, setActiveStep }: CampaignViewProps) => {
  return (
    <>
      {campaignViewsMap[activeView]}
      <CampaignNavigationButtons activeStep={activeStep} setActiveStep={setActiveStep} />
    </>
  );
};

export default CampaignView;
