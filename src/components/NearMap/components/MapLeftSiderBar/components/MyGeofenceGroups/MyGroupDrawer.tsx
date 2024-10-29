import React, { useCallback, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosRounded";
import Close from "@mui/icons-material/Close";
import { CreateNewFolderRounded, EditLocationAlt, Map } from "@mui/icons-material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { MapMenuLayerCloseButton } from "../../../MapMenuLayer/MapMenuLayer.style";
import MenuLayerTable, { CampaignTabelCell, CampaignTypography } from "../MenuLayerTable";
import {
  useDeckglLayers,
  useDeckglPolygonModal,
  useGoogleMapStore,
  useMapRightSideDrawerStore,
  useMapUserData,
} from "@/store/googleMapStore";
import toast from "react-hot-toast";
import { Alert, AlertTitle } from "@mui/material";
import { useMap } from "@vis.gl/react-google-maps";
import CustomTable from "@/components/Table/CustomTable";
import { GeofenceGroupColumns } from "./GeofenceGroupColumns";
import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";
import { useQuery } from "@tanstack/react-query";
import { getAllMyGeoFencesGroup } from "@/apis/myGeoFenceGroups";

const MyGroupDrawer = () => {
  const myGroupsStore = useMapUserData.use.myGroupsStore();
  const selectedGroupStore = useMapUserData.use.selectedGroup();

  // group drawer store
  const setDashboardDrawerStore = useLeftSideDrawerStore.use.setDrawer();
  const setGroupDrawerStore = useLeftSideDrawerStore.use.setGroupDrawer();
  const setAddNewGroupDrawerStore = useLeftSideDrawerStore.use.setAddNewGroupDrawer();

  const setSelectedGroupStore = useMapUserData.use.setSelectedGroup();

  const geofences = useGoogleMapStore.use.geofences();
  const setPolygonLayersStore = useDeckglLayers.use.setPolygonLayersStore();

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

  const noGeofencesFoundForGroup = () =>
    toast(
      <Alert severity="info">
        <AlertTitle>No Geofence</AlertTitle>
        No geofences found for this group.
      </Alert>
    );

  const map = useMap();

  const handleViewGroup = useCallback(
    (groupName: string) => {
      setSelectedGroupStore(groupName);
      console.log("object, groupName", groupName);
      const geofence = geofences.filter((geofence) => geofence.properties.group === groupName);
      if (geofence.length === 0) {
        noGeofencesFoundForGroup();
        return;
      }
      if (geofence) {
        setPolygonLayersStore(geofence, "true", handleOpenAddAudienceModal);
        setGroupDrawerStore(false);
        setDashboardDrawerStore(false);
        if (map && geofence.length > 0 && geofence[0].bounds && geofence[0].zoom) {
          map.fitBounds(geofence[0].bounds);
          map.setZoom(15);
        }
      }
    },
    [
      map,
      geofences,
      handleOpenAddAudienceModal,
      setGroupDrawerStore,
      setDashboardDrawerStore,
      setPolygonLayersStore,
      setSelectedGroupStore,
    ]
  );

  const setSelectedIABCategoryStore = useMapRightSideDrawerStore.use.setSelectedIABCategory();

  useEffect(() => {
    setSelectedIABCategoryStore("");
  }, [setSelectedIABCategoryStore]);

  const reportToast = () =>
    toast(
      <Alert severity="info">
        <AlertTitle>Coverage report</AlertTitle>
        Coverage report will be generated and automatically downloaded to the device.
      </Alert>
    );

  const {
    data: geofenceGroups,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["myGeofenceGroups"],
    queryFn: () => getAllMyGeoFencesGroup(),
  });

  return (
    <Box>
      <MapMenuLayerCloseButton
        onClick={() => {
          setGroupDrawerStore(false);
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
            setGroupDrawerStore(false);
            setDashboardDrawerStore(true);
          }}
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <ArrowBackIosIcon sx={{ fontSize: "30px" }} />
          <Typography sx={{ fontSize: "24px" }}>Groups</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
          onClick={() => {
            setAddNewGroupDrawerStore(true);
            setGroupDrawerStore(false);
            setDashboardDrawerStore(false);
          }}
        >
          <Button
            onClick={() => {
              // Implement your logic for creating a new group
            }}
            type="button"
            variant="contained"
            style={{ marginRight: "50px" }}
          >
            <CreateNewFolderRounded sx={{ fontSize: "18px" }} />
            &nbsp; New Group
          </Button>
        </Box>
      </Box>
      <br />
      <br />
      <CustomTable
        theme="light"
        tableData={geofenceGroups?.list || []}
        tableColumns={GeofenceGroupColumns}
        defaultTableView="table"
      />
    </Box>
  );
};

export default MyGroupDrawer;

export const groupHeadings = [
  "S.No",
  "Group Name",
  "Description",
  "No. of Geofences",
  "View Group",
  "Coverage Report",
];
