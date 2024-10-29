"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllMyCampaigns } from "@/apis/campaigns";
import { TempCampainColumns } from "@/components/NearMap/components/MapLeftSiderBar/components/MyCampaigns/CampaignColumns";
import CustomTable from "@/components/Table/CustomTable";
import NewCampaign from "./NewCampaign";
import { DashboardTitle } from "../DashboardContainer";
import CampaignCardsGrid from "./CampainCardGrid";

const CampaignCards = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const {
    data: campaigns,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["campaigns"],
    queryFn: getAllMyCampaigns,
  });

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <DashboardTitle
        title="Campaigns"
        buttonText="Create New Campaign"
        onClick={handleDialogOpen}
      />

      <div className="mt-4">
        <CustomTable
          loading={isLoading}
          tableData={campaigns?.list || []}
          tableColumns={TempCampainColumns}
          downloadOptions={true}
          toggleView={true}
          cardsComponent={<CampaignCardsGrid data={campaigns?.list || []} />}
        />
      </div>

      <NewCampaign openDialog={openDialog} handleDialogClose={handleDialogClose} />
    </div>
  );
};

export default CampaignCards;
