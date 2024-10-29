"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";

import CampaignIcon from "@mui/icons-material/CampaignRounded";
import MapIcon from "@mui/icons-material/MapRounded";
import GroupsIcon from "@mui/icons-material/Groups";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaidIcon from "@mui/icons-material/MonetizationOn";
import InfoIcon from "@mui/icons-material/Info";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DashboardIcon from "@mui/icons-material/Dashboard";
import styled from "@emotion/styled";
import Close from "@mui/icons-material/Close";

import MenuComponentLayer from "../MapLeftSiderBar/components/MenuComponentLayer";

import MyGroupDrawer from "./components/MyGeofenceGroups/MyGroupDrawer";
import AddMyGroupDrawer from "./components/MyGeofenceGroups/AddMyGroupDrawer";
import MyAudienceDrawer from "./components/MyAudiences/MyAudienceDrawer";
import AddAudienceDrawer from "./components/MyAudiences/AddAudienceDrawer";
import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";
import CreateCampaign from "@/components/CreateCampaign2/CreateCampaign2";
import MyCampaignsDrawer from "./components/MyCampaigns/MyCampaignsDrawer";
import MyGeoFencesDrawer from "./components/MyGeofences/MyGeoFencesDrawer";
import AddGeoFenceDrawer from "./components/MyGeofences/AddGeoFenceDrawer";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { TrackingTable } from "./components/Tracking/TrackingTable";
import { AddNewTracking } from "./components/Tracking/AddNewTracking";
import axios from "axios";
import EditCampaign from "@/components/CreateCampaign2/EditCampaign";
import EditMyGroupDrawer from "./components/MyGeofenceGroups/EditMyGroupDrawer";

const menuItems = [
  { name: "My Campaigns", icon: <CampaignIcon /> },
  { name: "My Geofence Groups", icon: <GroupsIcon /> },
  { name: "My Geofences", icon: <MapIcon /> },
  { name: "My Audiences", icon: <GroupsIcon /> },
  { name: "My Creatives", icon: <GroupsIcon /> },
  { name: "Tracking", icon: <QueryStatsIcon /> },
  { name: "My Account", icon: <AccountCircleIcon /> },
  { name: "Billing Details", icon: <PaidIcon /> },
  { name: "About", icon: <InfoIcon /> },
  { name: "Support", icon: <SupportAgentIcon /> },
];

const MapLeftSideBar = () => {
  const [openCampaignDrawer, setOpenCampaignDrawer] = useState(false);
  const [openGeoFencesDrawer, setOpenGeoFencesDrawer] = useState(false);
  const [openAddGeoFencesDrawer, setOpenAddGeoFencesDrawer] = useState(false);
  const [openCreateNewCampaignDrawer, setOpenCreateNewCampaignDrawer] = useState(false);
  const [openAddMyGroupDrawer, setOpenAddMyGroupDrawer] = useState(false);
  const [openMyGroupDrawer, setOpenMyGroupDrawer] = useState(false);
  const [openAudienceDrawer, setOpenAudienceDrawer] = useState(false);
  const [openAddAudienceDrawer, setOpenAddAudienceDrawer] = useState(false);
  const theme = useTheme();

  // drawer store
  const dashboardDrawerStore = useLeftSideDrawerStore.use.drawer();
  const setDashboardDrawerStore = useLeftSideDrawerStore.use.setDrawer();

  // campaign drawer store
  const campaignDrawerStore = useLeftSideDrawerStore.use.myCampaignsDrawer();
  const setCampaignDrawerStore = useLeftSideDrawerStore.use.setMyCampaignsDrawer();
  const addNewCampaignDrawerStore = useLeftSideDrawerStore.use.addNewCampaignDrawer();
  const setAddNewCampaignDrawerStore = useLeftSideDrawerStore.use.setAddNewCampaignDrawer();
  const editCampaignDrawerStore = useLeftSideDrawerStore.use.editCampaignDrawer();
  const setEditCampaignDrawerStore = useLeftSideDrawerStore.use.setEditCampaignDrawer();

  // geofences drawer store
  const geofencesDrawerStore = useLeftSideDrawerStore.use.geofencesDrawer();
  const setGeofencesDrawerStore = useLeftSideDrawerStore.use.setGeofencesDrawer();
  const addNewGeofencesDrawerStore = useLeftSideDrawerStore.use.addNewGeofencesDrawer();
  const setAddNewGeofencesDrawerStore = useLeftSideDrawerStore.use.setAddNewGeofencesDrawer();

  // group drawer store
  const groupDrawerStore = useLeftSideDrawerStore.use.groupDrawer();
  const setGroupDrawerStore = useLeftSideDrawerStore.use.setGroupDrawer();
  const addNewGroupDrawerStore = useLeftSideDrawerStore.use.addNewGroupDrawer();
  const setAddNewGroupDrawerStore = useLeftSideDrawerStore.use.setAddNewGroupDrawer();
  const editGroupDrawerStore = useLeftSideDrawerStore.use.editGroupDrawer();
  const setEditGroupDrawerStore = useLeftSideDrawerStore.use.setEditGroupDrawer();

  // audience drawer store
  const audienceDrawerStore = useLeftSideDrawerStore.use.audienceDrawer();
  const setAudienceDrawerStore = useLeftSideDrawerStore.use.setAudienceDrawer();
  const addNewAudienceDrawerStore = useLeftSideDrawerStore.use.addNewAudienceDrawer();
  const setAddNewAudienceDrawerStore = useLeftSideDrawerStore.use.setAddNewAudienceDrawer();

  // tracking drawer store
  const openTrackingDrawerStore = useLeftSideDrawerStore.use.trackingDrawer();
  const setOpenTrackingDrawerStore = useLeftSideDrawerStore.use.setTrackingDrawer();

  const openNewTrackingDrawerStore = useLeftSideDrawerStore.use.addNewTrackingDrawer();
  const setOpenNewTrackingDrawerStore = useLeftSideDrawerStore.use.setAddNewTrackingDrawer();

  return (
    <Box>
      <Drawer
        PaperProps={{
          className: "horizontal-scrollbar-style",
          sx: {
            "&.MuiDrawer-paper": {
              backgroundColor: theme.palette.primary.main,
              minWidth: "220px",
            },
          },
        }}
        variant="temporary"
        anchor="left"
        open={dashboardDrawerStore}
        onClose={() => setDashboardDrawerStore(false)}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "#f4f4f5",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <MenuItem
                disableRipple
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: theme.spacing(2),
                  padding: theme.spacing(2),
                  color: theme.palette.primary.contrastText,
                }}
              >
                <DashboardIcon />
                <Typography>Dashboard</Typography>
              </MenuItem>
              <IconButton
                sx={{
                  marginRight: "10px",
                }}
                onClick={() => {
                  setDashboardDrawerStore(false);
                }}
              >
                <Close sx={{ color: "#fff" }} />
              </IconButton>
            </Box>

            <Divider sx={{ borderColor: "#fff" }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {menuItems.map((menu, index) => (
                <CustomMenuItem
                  disableRipple
                  onClick={() => {
                    if (menu.name === "My Campaigns") {
                      setCampaignDrawerStore(true);
                      setDashboardDrawerStore(false);
                    } else if (menu.name === "My Geofences") {
                      setDashboardDrawerStore(false);
                      setGeofencesDrawerStore(true);
                    } else if (menu.name === "My Geofence Groups") {
                      setDashboardDrawerStore(false);
                      setGroupDrawerStore(true);
                    } else if (menu.name === "My Audiences") {
                      setDashboardDrawerStore(false);
                      setAudienceDrawerStore(true);
                    } else if (menu.name === "Tracking") {
                      setOpenTrackingDrawerStore(true);
                      setDashboardDrawerStore(false);
                    }
                  }}
                  key={index}
                  style={{
                    display: "inline-flex",
                    gap: "12px",
                    alignItems: "center",
                  }}
                >
                  {menu.icon}
                  <Typography>{menu.name}</Typography>
                </CustomMenuItem>
              ))}
            </Box>
          </Box>
        </Box>
      </Drawer>
      {/* my campaigns drawers */}
      <MenuComponentLayer
        bgColor="#fafafb"
        setOpenMainDrawer={setDashboardDrawerStore}
        openDrawer={campaignDrawerStore}
        setOpenDrawer={setCampaignDrawerStore}
      >
        <MyCampaignsDrawer />
      </MenuComponentLayer>

      {/* add new campaign drawer */}
      <MenuComponentLayer
        bgColor="#fafafb"
        setOpenMainDrawer={setCampaignDrawerStore}
        openDrawer={addNewCampaignDrawerStore}
        setOpenDrawer={setAddNewCampaignDrawerStore}
      >
        <CreateCampaign />
      </MenuComponentLayer>

      {/* edit campaign drawer */}
      <MenuComponentLayer
        bgColor="#fafafb"
        setOpenMainDrawer={setCampaignDrawerStore}
        openDrawer={editCampaignDrawerStore}
        setOpenDrawer={setEditCampaignDrawerStore}
      >
        <EditCampaign />
      </MenuComponentLayer>

      {/* my geofences drawer */}
      <MenuComponentLayer
        bgColor="#fafafb"
        setOpenMainDrawer={setDashboardDrawerStore}
        openDrawer={geofencesDrawerStore}
        setOpenDrawer={setGeofencesDrawerStore}
      >
        <MyGeoFencesDrawer />
      </MenuComponentLayer>

      {/* add new geofence drawer */}
      <MenuComponentLayer
        blur={true}
        bgColor="#fafafb"
        persistent
        autoWidth
        setOpenMainDrawer={setDashboardDrawerStore}
        openDrawer={addNewGeofencesDrawerStore}
        setOpenDrawer={setAddNewGeofencesDrawerStore}
      >
        <AddGeoFenceDrawer />
      </MenuComponentLayer>

      {/* my group drawer */}
      <MenuComponentLayer
        bgColor="#fafafb"
        setOpenMainDrawer={setDashboardDrawerStore}
        openDrawer={groupDrawerStore}
        setOpenDrawer={setGroupDrawerStore}
      >
        <MyGroupDrawer />
      </MenuComponentLayer>

      {/* add my group drawer */}
      <MenuComponentLayer
        blur={true}
        autoWidth
        setOpenMainDrawer={setGroupDrawerStore}
        openDrawer={addNewGroupDrawerStore}
        setOpenDrawer={setAddNewGroupDrawerStore}
      >
        <AddMyGroupDrawer />
      </MenuComponentLayer>

      {/* edit my group drawer */}
      <MenuComponentLayer
        blur={true}
        autoWidth
        setOpenMainDrawer={setGroupDrawerStore}
        openDrawer={editGroupDrawerStore}
        setOpenDrawer={setEditGroupDrawerStore}
      >
        <EditMyGroupDrawer />
      </MenuComponentLayer>

      {/* my audience drawer */}
      <MenuComponentLayer
        bgColor="#fafafb"
        setOpenMainDrawer={setDashboardDrawerStore}
        openDrawer={audienceDrawerStore}
        setOpenDrawer={setAudienceDrawerStore}
      >
        <MyAudienceDrawer />
      </MenuComponentLayer>

      {/* add audience drawer */}
      <MenuComponentLayer
        blur={true}
        autoWidth
        setOpenMainDrawer={setOpenAudienceDrawer}
        openDrawer={addNewAudienceDrawerStore}
        setOpenDrawer={setAddNewAudienceDrawerStore}
      >
        <AddAudienceDrawer />
      </MenuComponentLayer>

      <MenuComponentLayer
        bgColor="#fafafb"
        setOpenMainDrawer={setDashboardDrawerStore}
        openDrawer={openTrackingDrawerStore}
        setOpenDrawer={setOpenTrackingDrawerStore}
      >
        <TrackingTable setOpenMainDrawer={setDashboardDrawerStore} />
      </MenuComponentLayer>

      <MenuComponentLayer
        bgColor="#fafafb"
        setOpenMainDrawer={setOpenTrackingDrawerStore}
        openDrawer={openNewTrackingDrawerStore}
        setOpenDrawer={setOpenNewTrackingDrawerStore}
      >
        <AddNewTracking setOpenMainDrawer={setOpenTrackingDrawerStore} />
      </MenuComponentLayer>
    </Box>
  );
};

export default MapLeftSideBar;

export const CustomMenuItem = styled(MenuItem)`
  &.MuiMenuItem-root {
    color: #ffffff;
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }

  &.MuiMenuItem-root:hover {
    background-color: #055796;
  }
`;
