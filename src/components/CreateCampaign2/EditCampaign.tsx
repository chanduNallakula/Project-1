import React from "react";
import Box from "@mui/material/Box";

import CreateCampaginHeader from "./CreateCampaginHeader";

import TempCreateCampaign from "./TempCreateCampaign";
import TempEditCampaign from "./EditTempCampaign";
import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";

const EditCampaign = () => {
  const setMyCampaignsDrawerStore = useLeftSideDrawerStore.use.setMyCampaignsDrawer();

  const setEditCampaignDrawerStore = useLeftSideDrawerStore.use.setEditCampaignDrawer();

  return (
    <Box>
      <CreateCampaginHeader
        title="Edit Campaign"
        togglePreviosDrawer={setMyCampaignsDrawerStore}
        toggleCurrentDrawer={setEditCampaignDrawerStore}
      />
      <TempEditCampaign />
    </Box>
  );
};

export default EditCampaign;
