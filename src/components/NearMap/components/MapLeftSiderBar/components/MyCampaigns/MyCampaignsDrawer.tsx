"use client";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosRounded";
import CreateNewFolderRounded from "@mui/icons-material/CreateNewFolderRounded";

import { MapMenuLayerCloseButton } from "../../../MapMenuLayer/MapMenuLayer.style";

import { Alert, AlertTitle } from "@mui/material";
import toast from "react-hot-toast";
import CustomTable from "@/components/Table/CustomTable";
import { CampainColumns, TempCampainColumns } from "./CampaignColumns";

import { getAllMyCampaigns } from "@/apis/myCampaigns";
import { useQuery } from "@tanstack/react-query";
import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";

const MyCampaignsDrawer = () => {
  const setDashboardDrawerStore = useLeftSideDrawerStore.use.setDrawer();

  const setCampaignDrawerStore = useLeftSideDrawerStore.use.setMyCampaignsDrawer();
  const setAddNewCampaignDrawerStore = useLeftSideDrawerStore.use.setAddNewCampaignDrawer();

  const handleOpenCreateNewCampaignDrawer = () => {
    setDashboardDrawerStore(false);
    setCampaignDrawerStore(false);
    setAddNewCampaignDrawerStore(true);
  };

  const {
    data: campaigns,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["myCampaigns"],
    queryFn: () => getAllMyCampaigns(),
  });
  console.log(campaigns);

  return (
    <>
      <Box>
        <MapMenuLayerCloseButton
          onClick={() => {
            setCampaignDrawerStore(false);
            setDashboardDrawerStore(true);
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            onClick={() => {
              setCampaignDrawerStore(false);
              setDashboardDrawerStore(true);
            }}
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <ArrowBackIosIcon sx={{ fontSize: "30px" }} />
            <Typography sx={{ fontSize: "24px" }}>My Campaigns</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Button
              onClick={handleOpenCreateNewCampaignDrawer}
              type="button"
              variant="contained"
              style={{ marginRight: "50px" }}
            >
              <CreateNewFolderRounded sx={{ fontSize: "18px" }} />
              &nbsp; New Campaign
            </Button>
          </Box>
        </Box>
        <br />
        <br />
        <CustomTable
          loading={false}
          tableData={campaigns?.list || []}
          tableColumns={TempCampainColumns}
          downloadOptions={true}
          defaultTableView="table"
        />
      </Box>
    </>
  );
};

export default MyCampaignsDrawer;
