import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";
import { Box, Button } from "@mui/material";
import React from "react";
import { createCampagins2ViewMap } from "./CreateCampaign2";

const NavigationButtonsCreateCampaign = () => {
  const createCampagins2View = useLeftSideDrawerStore.use.createCampagins2View();
  const setCreatetMyCampagins2View = useLeftSideDrawerStore.use.setCreatetMyCampagins2View();

  const handleLabelClick = (label: string) => {
    setCreatetMyCampagins2View(label);
  };

  const currentView = createCampagins2ViewMap.findIndex(
    (view) => view.title === createCampagins2View
  );

  const handleNext = () => {
    if (currentView === createCampagins2ViewMap.length - 1) return;
    setCreatetMyCampagins2View(createCampagins2ViewMap[currentView + 1].title);
  };

  const handleBack = () => {
    if (currentView === 0) return;

    setCreatetMyCampagins2View(createCampagins2ViewMap[currentView - 1].title);
  };

  const handleCreateCampaign = () => {
    console.log("create campaign");
  };

  const nextDisabled = currentView === createCampagins2ViewMap.length - 1;
  const backDisabled = currentView === 0;
  const finalView =
    createCampagins2ViewMap[currentView].title ===
    createCampagins2ViewMap[createCampagins2ViewMap.length - 1].title;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {backDisabled ? null : (
        <Button onClick={handleBack} variant={"contained"} color="error">
          Back
        </Button>
      )}
      {nextDisabled ? null : (
        <Button onClick={handleNext} disabled={nextDisabled} variant={"contained"} color="primary">
          Next
        </Button>
      )}

      {finalView && (
        <Button onClick={handleCreateCampaign} variant={"contained"} color="primary">
          Create Campaign
        </Button>
      )}
    </Box>
  );
};

export default NavigationButtonsCreateCampaign;
