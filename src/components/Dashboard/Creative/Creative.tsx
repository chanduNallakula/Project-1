"use client";
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Grid,
  Box,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import CreativeCards from "./CreativeCards";
import CreativeuploadMain from "./CreativeuploadMain";

import CustomTable from "@/components/Table/CustomTable";
import CreativeTableColumns from "./CreativeTableColumns";
import { useQuery } from "@tanstack/react-query";
import { getAllCreatives } from "@/apis/creatives";
import { DashboardTitle } from "../DashboardContainer";
import CreativeuploadNewSetMain from "./CreativeuploadNewSetMain";

interface CreativeDataProps {
  cbName: string;
  ctId: number;
  csId: number;
  cszId: number;
  cbPath: string;
}

const CreativeMain: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("Types1");
  const [selectedSize, setSelectedSize] = useState<string>("sizes1");
  const [selectedCampaign, setSelectedCampaign] =
    useState<string>("campaigns1");

  const handleTypeChange = (event: SelectChangeEvent) => {
    setSelectedType(event.target.value);
  };

  const handleSizeChange = (event: SelectChangeEvent) => {
    setSelectedSize(event.target.value);
  };

  const handleCampaignChange = (event: SelectChangeEvent) => {
    setSelectedCampaign(event.target.value);
  };

  const [openDialog, setOpenDialog] = useState(false);
  const [openNewDialog, setOpenNewDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const handleNewDialogOpen = () => {
    setOpenNewDialog(true);
  };

  const handleNewDialogClose = () => {
    setOpenNewDialog(false);
  };

  const {
    data: creatives,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["creatives"],
    queryFn: () => getAllCreatives(),
  });

  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <DashboardTitle title="Creatives" buttonText="" />

        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNewDialogOpen}
          >
            New Creative Set
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={handleDialogOpen}
          >
            New Creative
          </Button>
        </Box>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Select
            value={selectedType}
            onChange={handleTypeChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="Types1">Types1</MenuItem>
            <MenuItem value="Types2">Types2</MenuItem>
            <MenuItem value="Types3">Types3</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={12} md={4}>
          <Select
            value={selectedSize}
            onChange={handleSizeChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="sizes1">Sizes1</MenuItem>
            <MenuItem value="sizes2">Sizes2</MenuItem>
            <MenuItem value="sizes3">Sizes3</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={12} md={4}>
          <Select
            value={selectedCampaign}
            onChange={handleCampaignChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="campaigns1">Campaigns1</MenuItem>
            <MenuItem value="campaigns2">Campaigns2</MenuItem>
            <MenuItem value="campaigns3">Campaigns3</MenuItem>
          </Select>
        </Grid>
      </Grid>

      <div className="my-10">
        <CustomTable
          searchPlaceholder="Search Creatives"
          tableData={creatives?.list || []}
          tableColumns={CreativeTableColumns}
          downloadOptions
          toggleView
          cardsComponent={
            <CreativeCards creativeData={creatives?.list || []} />
          }
        />
      </div>

      <CreativeuploadMain
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
      />
      <CreativeuploadNewSetMain
        openNewDialog={openNewDialog}
        handleNewDialogClose={handleNewDialogClose}
      />
    </div>
  );
};

export default CreativeMain;
