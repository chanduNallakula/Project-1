import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosRounded";
import Close from "@mui/icons-material/Close";
import { CreateNewFolderRounded } from "@mui/icons-material";
import { MapMenuLayerCloseButton } from "../../../MapMenuLayer/MapMenuLayer.style";
import MenuLayerTable, { CampaignTabelCell, CampaignTypography } from "../MenuLayerTable";
import { useMapUserData } from "@/store/googleMapStore";
import CustomTable from "@/components/Table/CustomTable";
import { MyAudiencesColumns } from "./AudiencesColumns";
import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";

interface Audience {
  id: number;
  name: string;
  description: string;
}

const MyAudienceDrawer = () => {
  const myAudiencesStore = useMapUserData.use.myAudiencesStore();

  const setDashboardDrawerStore = useLeftSideDrawerStore.use.setDrawer();
  const setAudienceDrawerStore = useLeftSideDrawerStore.use.setAudienceDrawer();
  const setAddNewAudienceDrawerStore = useLeftSideDrawerStore.use.setAddNewAudienceDrawer();

  return (
    <Box>
      <MapMenuLayerCloseButton
        onClick={() => {
          setAudienceDrawerStore(false);
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
            setAudienceDrawerStore(false);
            setDashboardDrawerStore(true);
          }}
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <ArrowBackIosIcon sx={{ fontSize: "30px" }} />
          <Typography sx={{ fontSize: "24px" }}>Audiences</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
          onClick={() => {
            setAddNewAudienceDrawerStore(true);
            setAudienceDrawerStore(false);
            setDashboardDrawerStore(false);
          }}
        >
          <Button
            onClick={() => {}}
            type="button"
            variant="contained"
            style={{ marginRight: "50px" }}
          >
            <CreateNewFolderRounded sx={{ fontSize: "18px" }} />
            &nbsp; New Audience
          </Button>
        </Box>
      </Box>
      <br />
      <br />
      <Box>
        <CustomTable
          defaultTableView="table"
          theme="light"
          tableData={myAudiencesStore}
          tableColumns={MyAudiencesColumns}
        />
      </Box>
    </Box>
  );
};

export default MyAudienceDrawer;

interface AudiencesProps {
  aId: string;
  aName: string;
  description: string;
  count: number;
}

export const AudiencesData: AudiencesProps[] = [
  {
    aId: "1",
    aName: "Movie Goers-Toronto",
    description: "Toronto-based movie enthusiasts.",
    count: 342,
  },
  {
    aId: "2",
    aName: "IKEA-Toronto",
    description: "Fans of IKEA products in Toronto.",
    count: 223,
  },
  {
    aId: "3",
    aName: "Athletes-Toronto",
    description: "Athletes and sports enthusiasts in Toronto.",
    count: 566,
  },
  {
    aId: "4",
    aName: "Fitness Enthusiasts",
    description: "Group of people passionate about fitness.",
    count: 193,
  },
];
