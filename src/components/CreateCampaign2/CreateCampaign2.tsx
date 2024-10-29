import React from "react";
import { Box, IconButton } from "@mui/material";
import Clear from "@mui/icons-material/Clear";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosRounded";

import { useTheme } from "@mui/material/styles";
import { CampaignTitle } from "../Campaign/Campaign.styles";
import CreateCampaigWizard from "./CreateCampaignWizard";
import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";
import CreateCampaginHeader from "./CreateCampaginHeader";
import BasicSettingsCreateCampaign from "./BasicSettingsCreateCampaign";
import NavigationButtonsCreateCampaign from "./NavigationButtonsCreateCampaign";
import OptimizationCreateCampaign from "./OptimizationCreateCampaign";
import TargetingOptionsCreateCampaign from "./TargetingOptionsCreateCampaign";
import TempCreateCampaign from "./TempCreateCampaign";

export const createCampagins2ViewMap = [
  {
    title: "Basic Settings",
    component: <BasicSettingsCreateCampaign />,
  },
  {
    title: "Optimization",
    component: <OptimizationCreateCampaign />,
  },
  {
    title: "Targeting Options",
    component: <TargetingOptionsCreateCampaign />,
  },
];

const CreateCampaign = () => {
  const createCampagins2View = useLeftSideDrawerStore.use.createCampagins2View();

  const currentView = createCampagins2ViewMap.find((view) => view.title === createCampagins2View);

  const setMyCampaignsDrawerStore = useLeftSideDrawerStore.use.setMyCampaignsDrawer();
  const setAddNewCampaignDrawerStore = useLeftSideDrawerStore.use.setAddNewCampaignDrawer();

  return (
    <Box>
      <CreateCampaginHeader
        title={"Create Campaign"}
        toggleCurrentDrawer={setAddNewCampaignDrawerStore}
        togglePreviosDrawer={setMyCampaignsDrawerStore}
      />
      <TempCreateCampaign />
      {/*
      <br />
       <CreateCampaigWizard />
      {currentView?.component}
      <NavigationButtonsCreateCampaign /> */}
    </Box>
  );
};

export default CreateCampaign;
