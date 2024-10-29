import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";
import { Box, IconButton } from "@mui/material";
import React from "react";
import Clear from "@mui/icons-material/Clear";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosRounded";

import { useTheme } from "@mui/material/styles";
import { CampaignTitle } from "../Campaign/Campaign.styles";
import { CampaignTitle2 } from "./CreateCampaign2.styles";
import { MapMenuLayerCloseButton } from "../NearMap/components/MapMenuLayer/MapMenuLayer.style";

interface CampaginHeaderProps {
  title: string;
  toggleCurrentDrawer: (view: boolean) => void;
  togglePreviosDrawer: (view: boolean) => void;
}

const CampaginHeader = ({
  title,
  toggleCurrentDrawer,
  togglePreviosDrawer,
}: CampaginHeaderProps) => {
  const theme = useTheme();

  const setCampaignDrawerStore = useLeftSideDrawerStore.use.setMyCampaignsDrawer();

  const setAddNewCampaignDrawerStore = useLeftSideDrawerStore.use.setAddNewCampaignDrawer();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "theme.custom.bg.transparentLight",
      }}
    >
      <MapMenuLayerCloseButton
        onClick={() => {
          togglePreviosDrawer(true);
          toggleCurrentDrawer(false);
        }}
      />
      <Box
        onClick={() => {
          togglePreviosDrawer(true);
          toggleCurrentDrawer(false);
        }}
        sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        <ArrowBackIosIcon sx={{ fontSize: "30px", color: "#000" }} />
        <CampaignTitle2>{title}</CampaignTitle2>
      </Box>
    </Box>
  );
};

export default CampaginHeader;
