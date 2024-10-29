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

import useMyCampaignsStore from "@/store/myCampaignsStore";
import useTempCampaignStore, { TempCampaign } from "@/store/tempCampaignStore";
import MultiSelect from "../MultiSelect/MultiSelect";
import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";
import { useQuery } from "@tanstack/react-query";
import { getAllMyCampaigns } from "@/apis/myCampaigns";
import usePostCall from "@/hooks/usePostCall";
import { getAllOrganizations } from "@/apis/organizations";
import toast from "react-hot-toast";

type TempCampaignProps = {
  list: TempCampaign[];
};

const TempEditCampaign = () => {
  const myCampaigns = useMyCampaignsStore.use.myCampaigns();

  const tempCampaignsStore = useTempCampaignStore.use.tempCampaigns();
  const addTempCampaignStore = useTempCampaignStore.use.addTempCampaign();

  const selectedCampaign = useLeftSideDrawerStore.use.selectedCampaign();

  const {
    refetch: refetchCampaigns,
    data: campaigns,
    isLoading,
    isError,
  } = useQuery<TempCampaignProps>({
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

  const demoOrganizationOptions = organizations?.list?.map((organization) => ({
    label: organization.oName,
    value: organization.oId,
  }));

  const { postCall: editCampaignCall, loading: editLoading, error: editError } = usePostCall();

  const campaignToEdit = campaigns?.list?.find((campaign) => {
    return campaign.cId === selectedCampaign;
  });

  const [campaignData, setCampaignData] = React.useState({
    name: campaignToEdit?.cName,
    organization: campaignToEdit?.oId,
    description: campaignToEdit?.cDescription,
  });
  console.log(selectedCampaign);
  console.log(campaignToEdit);

  const setCampaignDrawerStore = useLeftSideDrawerStore.use.setMyCampaignsDrawer();

  const setEditCampaignDrawerStore = useLeftSideDrawerStore.use.setEditCampaignDrawer();

  const handleEditCampaign = async () => {
    const formData = new FormData();
    formData.append("cName", campaignData.name || "");
    formData.append("oId", campaignData.organization?.toString() || "");
    formData.append("cDescription", campaignData.description || "");
    formData.append("cId", campaignToEdit?.cId?.toString() || "");

    try {
      const response = await editCampaignCall("/campaigns/update", formData);
      if (response?.data.status === "success") {
        toast.success(response?.data.message);
        setEditCampaignDrawerStore(false);
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

  const handleClose = () => {
    setEditCampaignDrawerStore(false);
    setCampaignDrawerStore(true);
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
                <CampaignSubHeading2>Campaign name *</CampaignSubHeading2>

                <TextField
                  size="small"
                  fullWidth
                  id="test"
                  required
                  placeholder="Campaign name"
                  value={campaignData.name}
                  onChange={(e) => setCampaignData({ ...campaignData, name: e.target.value })}
                />
              </div>

              <div className="w-full">
                <CampaignSubHeading2>Organization *</CampaignSubHeading2>

                <MultiSelect
                  value={{
                    label:
                      demoOrganizationOptions?.find(
                        (option) => option.value === campaignData.organization
                      )?.label || "",
                    value: campaignData.organization?.toString() || "",
                  }}
                  isMulti={false}
                  onChange={(selectedOption) =>
                    setCampaignData({
                      ...campaignData,
                      organization: selectedOption?.value || "none",
                    })
                  }
                  options={demoOrganizationOptions}
                  placeholder="Select an organization"
                />
              </div>
            </Stack>

            <div>
              <CampaignSubHeading2>Description *</CampaignSubHeading2>

              <TextField
                placeholder="Campaign description"
                value={campaignData.description}
                onChange={(e) => setCampaignData({ ...campaignData, description: e.target.value })}
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
          <Button onClick={handleClose} variant="contained" color="error">
            Cancel
          </Button>
          <Button onClick={handleEditCampaign} variant="contained" color="primary">
            Edit
          </Button>
        </Stack>
      </CampaignWrapper>
    </CreateCampaignViewWrapper>
  );
};

export default TempEditCampaign;
