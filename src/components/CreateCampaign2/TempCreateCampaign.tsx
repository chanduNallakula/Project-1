"use client";

import Box from "@mui/material/Box";
import React from "react";

import { CampaignTitle, CampaignWrapper, TextFieldWhite } from "../Campaign/Campaign.styles";
import {
  Button,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  OutlinedTextFieldProps,
  Stack,
} from "@mui/material";

import emotionStyled from "@emotion/styled";
import {
  CampaignContentBox2,
  CampaignSubHeading2,
  CampaignText2,
  CampaignTitle2,
  CampaignTitleWrapper2,
  CreateCampaignViewWrapper,
} from "./CreateCampaign2.styles";
import { MultiSelectSearch, adCampaignOptions } from "./TargetingOptionsCreateCampaign";
import useMyCampaignsStore from "@/store/myCampaignsStore";
import useTempCampaignStore from "@/store/tempCampaignStore";
import MultiSelect from "../MultiSelect/MultiSelect";
import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";
import { addCampaign, getAllMyCampaigns } from "@/apis/myCampaigns";
import { useQuery } from "@tanstack/react-query";
import usePostCall from "@/hooks/usePostCall";
import toast from "react-hot-toast";
import { getAllOrganizations } from "@/apis/organizations";

const demoOrganizationOptions = [
  {
    label: "Organization 1",
    value: "1",
  },
  {
    label: "Organization 2",
    value: "2",
  },
  {
    label: "Organization 3",
    value: "3",
  },
];

const TempCreateCampaign = () => {
  const addTempCampaignStore = useTempCampaignStore.use.addTempCampaign();
  const [campaignData, setCampaignData] = React.useState({
    cName: "",
    oName: "",
    cDescription: "",
  });

  const {
    refetch: refetchCampaigns,
    data: campaigns,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["myCampaigns"],
    queryFn: () => getAllMyCampaigns(),
  });

  const {
    data: organizations,
    isLoading: organizationsLoading,
    isError: organizationsError,
  } = useQuery<{
    list: { oId: string; oName: string }[];
  }>({
    queryKey: ["organizations"],
    queryFn: () => getAllOrganizations(),
  });

  const orginizationOptions = organizations?.list?.map((org) => ({
    label: org.oName,
    value: org.oId,
  }));

  const setCampaignDrawerStore = useLeftSideDrawerStore.use.setMyCampaignsDrawer();

  const {
    postCall: addCampaignCall,
    loading: addCampaignLoading,
    error: addCampaignError,
  } = usePostCall();

  const setAddNewCampaignDrawerStore = useLeftSideDrawerStore.use.setAddNewCampaignDrawer();

  const handleAddTempCampaign = async () => {
    addTempCampaignStore({
      cName: campaignData.cName,
      oName: campaignData.oName,
      cDescription: campaignData.cDescription,
    });
    const formData = new FormData();
    formData.append("cName", campaignData.cName);
    formData.append("oId", campaignData.oName);
    formData.append("cDescription", campaignData.cDescription);

    try {
      const response = await addCampaignCall("/campaigns/add", formData);
      if (response?.data.status === "success") {
        toast.success(response?.data.message);
        setAddNewCampaignDrawerStore(false);
        setCampaignDrawerStore(true);
        refetchCampaigns();
        console.log(response?.data.message);
      } else {
        console.log(response?.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateCampaignViewWrapper>
      <CampaignWrapper>
        <CampaignTitleWrapper2>
          {/* <CampaignTitle2>New Campaign</CampaignTitle2> */}
        </CampaignTitleWrapper2>
        <CampaignContentBox2 elevation={0}>
          <Stack gap={3}>
            <Stack direction="row" spacing={2}>
              <div className="w-full">
                <CampaignSubHeading2>Enter a campaign name *</CampaignSubHeading2>

                <TextField
                  size="small"
                  fullWidth
                  id="test"
                  required
                  placeholder="Campaign name"
                  value={campaignData.cName}
                  onChange={(e) => setCampaignData({ ...campaignData, cName: e.target.value })}
                />
              </div>

              <div className="w-full">
                <CampaignSubHeading2>Organization *</CampaignSubHeading2>

                <MultiSelect
                  isMulti={false}
                  onChange={(selectedOption) =>
                    setCampaignData({
                      ...campaignData,
                      oName: selectedOption?.value || "none",
                    })
                  }
                  options={orginizationOptions}
                  placeholder="Select an organization"
                />
              </div>
            </Stack>

            <div>
              <CampaignSubHeading2>Description *</CampaignSubHeading2>

              <TextField
                placeholder="Campaign description"
                value={campaignData.cDescription}
                onChange={(e) => setCampaignData({ ...campaignData, cDescription: e.target.value })}
                size="small"
                multiline
                minRows={4}
                fullWidth
                variant="outlined"
              />
            </div>
          </Stack>
        </CampaignContentBox2>
        <Stack direction="row" spacing={2} justifyContent="flex-end" mt={2}>
          <Button variant="contained" color="error">
            Cancel
          </Button>
          <Button onClick={handleAddTempCampaign} variant="contained" color="primary">
            Create
          </Button>
        </Stack>
      </CampaignWrapper>
    </CreateCampaignViewWrapper>
  );
};

export default TempCreateCampaign;
