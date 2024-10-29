"use client";
import SearchBox from "@/components/SearchBox/SearchBox";
import {
  Button,
  Card,
  Typography,
  Select,
  MenuItem,
  Container,
  TextField,
  FormControl,
  InputLabel,
  Stack,
  Box,
  Breadcrumbs,
} from "@mui/material";
import React, { useState } from "react";
import AddNewAudiences from "./AddNewAudience";
import { DashboardNoScrollContainer, DashboardTitle } from "../DashboardContainer";
import AudienceCardsGrid from "./AudienceCardsGrid";
import CustomTable from "@/components/Table/CustomTable";
import AudienceTableColumns from "./AudienceTableColumns.tsx";
import { useQuery } from "@tanstack/react-query";
import { getAudinceset } from "@/apis/audienceset";

const AudienceSets: React.FC = () => {
  const [city, setCity] = React.useState("hyderabad");
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const {
    data: audiencesets,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["audiencesets"],
    queryFn: () => getAudinceset(),
  });

  return (
    <Container maxWidth="xl" className="!p-5 lg:!p-10">
      <div>
        <DashboardTitle
          title="Audience Sets"
          buttonText="Add New Audience"
          onClick={handleDialogOpen}
        />
        <>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "20px", minWidth: "300px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select a city</InputLabel>
                <Select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select a city"
                >
                  <MenuItem value="hyderabad">Hyderabad</MenuItem>
                  <MenuItem value="chennai">Chennai</MenuItem>
                  <MenuItem value="mumbai">Mumbai</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="my-10">
            <CustomTable
              searchPlaceholder="Search Audience"
              tableData={audiencesets?.list || []}
              tableColumns={AudienceTableColumns}
              downloadOptions
              toggleView
              cardsComponent={<AudienceCardsGrid data={audiencesets?.list || []} />}
            />
          </div>
        </>
      </div>
      <AddNewAudiences openDialog={openDialog} handleDialogClose={handleDialogClose} />
    </Container>
  );
};

export default AudienceSets;
