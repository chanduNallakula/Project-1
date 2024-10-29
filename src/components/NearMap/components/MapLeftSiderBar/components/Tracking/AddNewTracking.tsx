import React, { ChangeEvent, useEffect, useState } from "react";

// material ui components
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CopyToClipboard } from "react-copy-to-clipboard";

import DrawerHeader from "@/components/Drawer/DrawerHeader";
import {
  CampaignContentBox2,
  CampaignSubHeading2,
  CampaignTitle2,
  CampaignTitleWrapper2,
  CreateCampaignViewWrapper,
} from "@/components/CreateCampaign2/CreateCampaign2.styles";
import { CampaignWrapper } from "@/components/Campaign/Campaign.styles";
import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";
import { MultiSelectSearch } from "@/components/CreateCampaign2/TargetingOptionsCreateCampaign";
import useMyCampaignsStore from "@/store/myCampaignsStore";
import { Button, FormHelperText, IconButton, Stack, Tooltip } from "@mui/material";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import useTempCampaignStore from "@/store/tempCampaignStore";
import MultiSelect from "@/components/MultiSelect/MultiSelect";
import axios from "axios";
import { getAllMyCampaigns } from "@/apis/myCampaigns";
import { useQuery } from "@tanstack/react-query";
import usePostCall from "@/hooks/usePostCall";
import toast from "react-hot-toast";
import EditIcon from "@mui/icons-material/Edit";

interface TrackingTableProps {
  setOpenMainDrawer: React.Dispatch<React.SetStateAction<boolean>> | ((value: boolean) => void);
}

export const AddNewTracking = ({ setOpenMainDrawer }: TrackingTableProps) => {
  const openNewTrackingDrawerStore = useLeftSideDrawerStore.use.addNewTrackingDrawer();
  const setOpenNewTrackingDrawerStore = useLeftSideDrawerStore.use.setAddNewTrackingDrawer();
  const setOpenTrackingDrawer = useLeftSideDrawerStore.use.setTrackingDrawer();

  const myCampaigns = useMyCampaignsStore.use.myCampaigns();

  const myCampaignOptions = myCampaigns.map((campaign) => ({
    label: campaign.campaignName,
    value: campaign.campaignName,
  }));

  const {
    data: campaigns,
    isLoading,
    isError,
  } = useQuery<{
    list: {
      cName: string;
      cId: number;
    }[];
  }>({
    queryKey: ["myCampaigns"],
    queryFn: () => getAllMyCampaigns(),
  });

  const tempCampaignOptions = campaigns?.list?.map((campaign) => ({
    label: campaign.cName,
    value: campaign.cId.toString(),
  }));

  const [pixelFile, setPixelFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const [callbackRedirectionURL, setCallbackRedirectionURL] = useState<string>("");
  const [pixelResponse, setPixelResponse] = useState<string>("");
  const [callbackResponse, setCallbackResponse] = useState<string>("");

  const [campaignID, setCampaignID] = useState<string>("");

  const validateImage = (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = function (this: HTMLImageElement | any) {
        if (this.width <= 1 && this.height <= 1) {
          setPixelFile(file);
          resolve();
        } else {
          setPixelFile(null);
          setPixelResponse("");
          reject(new Error("Image must be (1px / 1px) or smaller"));
        }
      };
      img.onerror = function () {
        reject(new Error("Invalid image file"));
      };
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setError("");

    if (file) {
      // if (file.size > 1024) {
      //   setError("File size must be less than 1 KB");
      //   event.target.value = "";
      //   return;
      // }

      try {
        await validateImage(file);
        console.log("File accepted");
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
        setError(errorMessage);
        event.target.value = "";
      }
    }
  };

  const { postCall: trackingCall, loading: editLoading, error: editError } = usePostCall();

  const handleGetPixelTracking = async () => {
    const formData = new FormData();
    formData.append("cId", campaignID);

    try {
      const response = await trackingCall(`/pixel-tracking-generate`, formData);
      if (response?.data.status === "success") {
        setPixelResponse(response.data.open_tracking_url);
        // console.log(response?.data.message);
      } else {
        // console.log(response?.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetCallback = async () => {
    const formData = new FormData();
    formData.append("cId", campaignID);
    formData.append("tUrl", callbackRedirectionURL);

    try {
      const response = await trackingCall(`/callback-tracking-generate`, formData);
      if (response?.data.status === "success") {
        setCallbackResponse(response.data.click_tracking_url);
        // console.log(response?.data.message);
      } else {
        // console.log(response?.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <DrawerHeader
        hideAddNewButton
        goBackText="Add New Tracking"
        setOpenCurrentDrawer={setOpenNewTrackingDrawerStore}
        setOpenMainDrawer={setOpenTrackingDrawer}
      />
      <CreateCampaignViewWrapper>
        <CampaignWrapper>
          <CampaignTitleWrapper2>
            <CampaignTitle2>Tracking Details</CampaignTitle2>
          </CampaignTitleWrapper2>
          <CampaignContentBox2 elevation={0}>
            <div>
              <CampaignSubHeading2>Campaign *</CampaignSubHeading2>

              <MultiSelect
                isMulti={false}
                options={tempCampaignOptions}
                placeholder="Select a campaign"
                onChange={(selectedOption) => {
                  setCampaignID(selectedOption?.value || "");
                }}
              />
            </div>
          </CampaignContentBox2>
          <br />

          <CampaignTitleWrapper2>
            <CampaignTitle2>Pixel Tracking</CampaignTitle2>
          </CampaignTitleWrapper2>
          <CampaignContentBox2 elevation={0}>
            <Stack gap={3}>
              <div>
                {!pixelResponse ? (
                  <Button
                    disabled={campaignID === ""}
                    variant="contained"
                    onClick={handleGetPixelTracking}
                  >
                    Generate Pixel Tracking URL
                  </Button>
                ) : (
                  <div>
                    <CampaignSubHeading2>Pixel tracking URL</CampaignSubHeading2>
                    <TextField
                      fullWidth
                      value={pixelResponse}
                      disabled
                      InputProps={{
                        endAdornment: (
                          <CopyToClipboard
                            onCopy={() => {
                              toast.success("Copied to clipboard");
                            }}
                            text={pixelResponse}
                          >
                            <Tooltip arrow title="Click to copy Pixel Tracking URL">
                              <IconButton color="primary">
                                <ContentCopyIcon />
                              </IconButton>
                            </Tooltip>
                          </CopyToClipboard>
                        ),
                      }}
                      size="small"
                      placeholder="Callback URL"
                    />
                  </div>
                )}
                {/* <CampaignSubHeading2>Upload pixel tracking asset *</CampaignSubHeading2> */}
                {/* <TextField
                  type="file"
                  size="medium"
                  fullWidth
                  variant="outlined"
                  error={!!error}
                  inputProps={{
                    accept: "image/*",
                  }}
                  onChange={handleFileChange}
                  InputProps={{
                    endAdornment: (
                      <Button
                        disabled={!pixelFile || campaignName === "" || pixelResponse === "done"}
                        variant="contained"
                        className="!text-nowrap !px-5"
                        onClick={() => {
                          setPixelResponse("done");
                        }}
                      >
                        Get Pixel Tracking URL
                      </Button>
                    ),
                  }}
                />
                <FormHelperText error={!!error}>
                  <Stack direction={"row"} alignItems={"center"} gap={0.1}>
                    <InfoCircledIcon /> Image must be 1px / 1px or smaller
                  </Stack>
                </FormHelperText> */}
              </div>
              {/* {pixelResponse && (
                <div>
                  <CampaignSubHeading2>Pixel tracking url *</CampaignSubHeading2>
                  <TextField
                    fullWidth
                    value={"http://tracking-geosaga.citimedia.com/pixel-tracking-generate?cId=5"}
                    disabled
                    InputProps={{
                      endAdornment: (
                        <Tooltip arrow title="Click to copy Pixel Tracking URL">
                          <IconButton color="primary">
                            <ContentCopyIcon />
                          </IconButton>
                        </Tooltip>
                      ),
                    }}
                    size="small"
                    placeholder="Callback URL"
                  />
                </div>
              )} */}
            </Stack>
          </CampaignContentBox2>

          <br />

          <CampaignTitleWrapper2>
            <CampaignTitle2>Callback</CampaignTitle2>
          </CampaignTitleWrapper2>
          <CampaignContentBox2 elevation={0}>
            <Stack gap={3} direction={"row"}>
              <div className="w-full">
                <CampaignSubHeading2>Redirection URL *</CampaignSubHeading2>
                <TextField
                  disabled={!!callbackResponse}
                  fullWidth
                  value={callbackRedirectionURL}
                  onChange={(e) => setCallbackRedirectionURL(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        color="primary"
                        onClick={() => {
                          setCallbackResponse("");
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                    ),
                  }}
                  size="small"
                  placeholder="Redirection URL"
                />
              </div>
              <div className="self-end">
                <Button
                  disabled={
                    campaignID === "" || callbackRedirectionURL === "" || !!callbackResponse
                  }
                  variant="contained"
                  onClick={handleGetCallback}
                  className="!text-nowrap !px-5"
                >
                  Generate Callback URL
                </Button>
              </div>
            </Stack>
            <br />
            {callbackResponse && (
              <div>
                <CampaignSubHeading2>Callback URL</CampaignSubHeading2>
                <TextField
                  fullWidth
                  value={callbackResponse}
                  disabled
                  InputProps={{
                    endAdornment: (
                      <CopyToClipboard
                        onCopy={() => {
                          toast.success("Copied to clipboard");
                        }}
                        text={callbackResponse}
                      >
                        <Tooltip arrow title="Click to copy Callback URL">
                          <IconButton color="primary">
                            <ContentCopyIcon />
                          </IconButton>
                        </Tooltip>
                      </CopyToClipboard>
                    ),
                  }}
                  size="small"
                  placeholder="Callback URL"
                />
              </div>
            )}
          </CampaignContentBox2>
          <br />
          {/* <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button
              onClick={() => {
                setOpenNewTrackingDrawerStore?.(false);
                setOpenTrackingDrawer?.(true);
              }}
              variant="contained"
              color="error"
            >
              Cancel
            </Button>
            <Button variant="contained" color="primary">
              Create
            </Button>
          </Stack> */}
        </CampaignWrapper>
      </CreateCampaignViewWrapper>
    </>
  );
};
