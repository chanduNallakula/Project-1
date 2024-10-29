"use client";
import React, { createContext } from "react";
import CampaignStepper from "./CampaignStepper";
import CampaignView from "./CampaignView";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import {
  CampaignStepperWrapper,
  CampaignTitle,
  CampaignViewWrapper,
  Flex,
} from "./Campaign.styles";
import { campaignViewsMap } from "./CampaignView";
import { IconButton } from "@mui/material";
import Clear from "@mui/icons-material/Clear";

interface CreateCampaignProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenCampaignsDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CampaignProps {
  goalOptions: {
    campaignName: string;
    goal: string;
  };
  settings: {
    networkType: string;
    audienceSegment: string[];
    locations: string[] | { [key: string]: string } | string;
    languages: string[];
  };
  type: string;
  bidStrategy: string;
  budget: number;
}
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosRounded";

const CreateCampaign = ({ setOpen, setOpenCampaignsDrawer }: CreateCampaignProps) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [campaign, setCampaign] = React.useState<CampaignProps>({
    goalOptions: {
      campaignName: "",
      goal: "",
    },
    settings: {
      networkType: "",
      audienceSegment: [""],
      locations: "",
      languages: [""],
    },
    type: "",
    bidStrategy: "",
    budget: 0,
  });

  const activeView = Object.keys(campaignViewsMap)[activeStep] as keyof typeof campaignViewsMap;

  return (
    <CreateCampgainContext.Provider value={{ campaign, setCampaign }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: theme.custom.bg.transparentLight,
        }}
      >
        <Box
          onClick={() => {
            setOpen(false);
            setOpenCampaignsDrawer(true);
          }}
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <ArrowBackIosIcon sx={{ fontSize: "30px", color: "#fff" }} />
          <CampaignTitle>Create Campaign</CampaignTitle>
        </Box>

        <IconButton
          onClick={() => {
            setOpen(false);
            setOpenCampaignsDrawer(true);
          }}
        >
          <Clear sx={{ color: theme.palette.primary.contrastText }} />
        </IconButton>
      </Box>
      <Flex>
        <CampaignStepperWrapper>
          <CampaignStepper activeStep={activeStep} setActiveStep={setActiveStep} />
        </CampaignStepperWrapper>
        <CampaignViewWrapper>
          <CampaignView
            activeStep={activeStep}
            activeView={activeView}
            setActiveStep={setActiveStep}
          />
        </CampaignViewWrapper>
      </Flex>
    </CreateCampgainContext.Provider>
  );
};

export default CreateCampaign;

export const CreateCampgainContext = createContext<CreateCampaignContextType>(
  {} as CreateCampaignContextType
);
interface CreateCampaignContextType {
  campaign: CampaignProps;
  setCampaign: React.Dispatch<React.SetStateAction<CampaignProps>>;
}
