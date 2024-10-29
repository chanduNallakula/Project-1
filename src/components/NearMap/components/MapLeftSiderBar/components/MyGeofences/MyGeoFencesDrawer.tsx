"use client";
import React, { useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosRounded";
import { Close, CreateNewFolderRounded } from "@mui/icons-material";

import MapIcon from "@mui/icons-material/MapRounded";
import EditLocationAltIcon from "@mui/icons-material/EditLocationRounded";
import MenuLayerTable, { CampaignTabelCell, CampaignTypography } from "../MenuLayerTable";
import { MapMenuLayerCloseButton } from "../../../MapMenuLayer/MapMenuLayer.style";
import {
  useDeckglLayers,
  useDeckglPolygonModal,
  useGoogleMapDrawingOverlays,
  useGoogleMapStore,
  useMapRightSideDrawerStore,
  useMapUserData,
} from "@/store/googleMapStore";
import { useMap } from "@vis.gl/react-google-maps";
import CustomTable from "@/components/Table/CustomTable";
import { GeofencesColumns } from "./GeofenceColumns";
import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";

const MyGeoFencesDrawer = () => {
  const drawingManager = useGoogleMapStore.use.drawingManager();
  const setSelectedGroupStore = useMapUserData.use.setSelectedGroup();

  const geofences = useGoogleMapStore.use.geofences();
  const setGeogenfenceMode = useGoogleMapStore.use.setGeofenceMode();
  const setGeofenceUpdateId = useGoogleMapStore.use.setGeofenceUpdateId();

  const setPolygonLayersStore = useDeckglLayers.use.setPolygonLayersStore();

  const setDashboardDrawerStore = useLeftSideDrawerStore.use.setDrawer();

  const setGeofencesDrawerStore = useLeftSideDrawerStore.use.setGeofencesDrawer();
  const setAddNewGeofencesDrawerStore = useLeftSideDrawerStore.use.setAddNewGeofencesDrawer();

  const handleViewGeofence = (id: string) => {
    setGeofencesDrawerStore(false);
    setAddNewGeofencesDrawerStore(true);
    setGeogenfenceMode("view");
    setGeofenceUpdateId(id);
  };
  const handleEditGeofence = (id: string) => {
    setGeofencesDrawerStore(false);
    setAddNewGeofencesDrawerStore(true);
    setGeogenfenceMode("edit");
    setGeofenceUpdateId(id);
  };

  const handleNewGeofence = () => {
    setGeofencesDrawerStore(false);
    setAddNewGeofencesDrawerStore(true);
    setGeogenfenceMode("create");
  };

  const setSelectedGeofenceForModalStore = useMapUserData.use.setSelectedGeofenceForModal();
  const setOpenAddAudienceModalStore = useDeckglPolygonModal.use.setOpenGeofenceForModal();

  const handleOpenAddAudienceModal = useCallback(
    (id?: string) => {
      const geoFenceName = geofences.find((geofence) => geofence.id === id)?.properties.name;
      setOpenAddAudienceModalStore(true);
      setSelectedGeofenceForModalStore(geoFenceName || "");
    },
    [geofences, setOpenAddAudienceModalStore, setSelectedGeofenceForModalStore]
  );

  useEffect(() => {
    setSelectedGroupStore("");
  }, [setSelectedGroupStore]);

  const setSelectedIABCategoryStore = useMapRightSideDrawerStore.use.setSelectedIABCategory();

  useEffect(() => {
    setSelectedIABCategoryStore("");
  }, [setSelectedIABCategoryStore]);

  useEffect(() => {
    setPolygonLayersStore(geofences, "true", handleOpenAddAudienceModal);
  }, [geofences, setPolygonLayersStore, handleOpenAddAudienceModal]);

  const addGeofencePolygonData = useGoogleMapDrawingOverlays.use.addGeofencePolygonData();

  useEffect(() => {
    return () => {
      addGeofencePolygonData?.polygon?.overlay?.setMap(null);
    };
  }, [addGeofencePolygonData]);

  return (
    <Box>
      <MapMenuLayerCloseButton
        onClick={() => {
          setGeofencesDrawerStore(false);
          setDashboardDrawerStore(true);
        }}
      ></MapMenuLayerCloseButton>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          onClick={() => {
            setGeofencesDrawerStore(false);
            setDashboardDrawerStore(true);
          }}
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <ArrowBackIosIcon sx={{ fontSize: "30px" }} />
          <Typography sx={{ fontSize: "24px" }}>Geofences</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
          onClick={handleNewGeofence}
        >
          <Button type="button" variant="contained" style={{ marginRight: "50px" }}>
            <CreateNewFolderRounded sx={{ fontSize: "18px" }} />
            &nbsp; New Geofence
          </Button>
        </Box>
      </Box>
      <br />
      {/* <Box>
        <MenuLayerTable
          headings={geoFenceheadings}
          tableBody={
            <>
              {geofences.length > 0 ? (
                geofences.map((geofence, index: number) => {
                  return (
                    <TableRow key={geofence.id}>
                      <CampaignTabelCell align="center">
                        <CampaignTypography>{index + 1}</CampaignTypography>
                      </CampaignTabelCell>
                      <CampaignTabelCell align="center">
                        <CampaignTypography>{geofence.properties.name}</CampaignTypography>
                      </CampaignTabelCell>
                      <CampaignTabelCell align="center">
                        <CampaignTypography>{geofence.properties.category}</CampaignTypography>
                      </CampaignTabelCell>
                      <CampaignTabelCell align="center">
                        <CampaignTypography>{geofence.properties.subCategory}</CampaignTypography>
                      </CampaignTabelCell>
                      <CampaignTabelCell align="center">
                        <CampaignTypography>{geofence.properties.group}</CampaignTypography>
                      </CampaignTabelCell>
                      <CampaignTabelCell align="center">
                        <CampaignTypography>
                          {geofence.properties.isPublic ? "Public" : "Private"}
                        </CampaignTypography>
                      </CampaignTabelCell>
                      <CampaignTabelCell align="center">
                        <Tooltip title="view geofence">
                          <IconButton
                            sx={{ padding: "0px 5px" }}
                            onClick={() => {
                              handleViewGeofence(geofence.id);
                            }}
                          >
                            <MapIcon sx={{ color: "#fff" }} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="edit geofence">
                          <IconButton
                            sx={{ padding: "0px 5px" }}
                            onClick={() => {
                              handleEditGeofence(geofence.id);
                            }}
                          >
                            <EditLocationAltIcon sx={{ color: "#fff" }} />
                          </IconButton>
                        </Tooltip>
                      </CampaignTabelCell>
                    </TableRow>
                  );
                })
              ) : (
                <>
                  <TableRow>
                    <CampaignTabelCell
                      align="center"
                      style={{
                        height: "400px",
                      }}
                      colSpan={6}
                    >
                      <Typography sx={{ fontSize: "26px", color: "white" }}>No Data</Typography>
                    </CampaignTabelCell>
                  </TableRow>
                </>
              )}
            </>
          }
        />
      </Box> */}
      <CustomTable
        theme="light"
        tableData={geofences}
        tableColumns={GeofencesColumns(handleViewGeofence, handleEditGeofence)}
        defaultTableView="table"
      />
    </Box>
  );
};

export default MyGeoFencesDrawer;

const geoFenceheadings: string[] = [
  "Sno",
  "Geofence Name",
  "Category",
  "Sub-Category",
  "Group",
  "Public/Private",
  "Action",
];
