import React, { useState, useEffect } from "react";
import {
  TextField,
  MenuItem,
  Grid,
  Typography,
  Box,
  Button,
  Tooltip,
  IconButton,
  Dialog,
  FormControl,
  InputLabel,
  Select,
  CircularProgress,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { toast } from "react-hot-toast";
import { DashboardTitle } from "../DashboardContainer";
import usePostCall from "@/hooks/usePostCall";
import { getAllCreatives } from "@/apis/creatives";
import { getAllMyCampaigns } from "@/apis/campaigns";
import { getAudinceset } from "@/apis/audienceset";
import { useQuery } from "@tanstack/react-query";

import EditIcon from "@mui/icons-material/Edit";
interface EditNewCampaignsProps {
  openDialog: boolean;
  handleDialogClose: () => void;
  cId: number;
}

const EditNewCampaigns: React.FC<EditNewCampaignsProps> = ({
  openDialog,
  handleDialogClose,
  cId,
}) => {
  //   const [callbackResponse, setCallbackResponse] = useState<string | null>(null);
  //   const [callbackRedirectionURL, setCallbackRedirectionURL] =
  //     useState<string>("");
  const [formData, setFormData] = useState({
    campaignName: "",
    selectedAudience: "",
    selectedCreative: "",
    budget: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    pixelResponse: "",
    callbackResponse: "",
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleGeneratePixel = () => {
    const generatedPixel = "https://your-pixel-url.com/track?campaign=12345";
    handleInputChange("pixelResponse", generatedPixel);
    toast.success("Tracking pixel generated!");
  };

  const handleGenerateCallbackURL = () => {
    const generatedCallback = "https://your-callback-url.com/redirect";
    handleInputChange("callbackResponse", generatedCallback);
    toast.success("Callback URL generated!");
  };

  const {
    data: audiencesets,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["audiencesets"],
    queryFn: () => getAudinceset(),
  });

  const {
    data: creatives,
    isLoading: creativesLoading,
    isError: creativesError,
  } = useQuery({
    queryKey: ["creatives"],
    queryFn: () => getAllCreatives(),
  });

  const {
    postCall: addCampaignCall,
    loading: addCampaignLoading,
    error: addCampaignError,
  } = usePostCall();

  const { data: campaigns } = useQuery({
    queryKey: ["campaigns"],
    queryFn: () => getAllMyCampaigns(),
  });

  const campaignsToEdit = campaigns?.list?.find(
    (campaign) => campaign?.cId === cId
  );

  useEffect(() => {
    if (campaignsToEdit) {
      setFormData({
        campaignName: campaignsToEdit?.cName || "",
        selectedAudience: campaignsToEdit?.asId.toString() || "",
        selectedCreative: campaignsToEdit?.csId.toString() || "",
        budget: campaignsToEdit?.budget.toString() || "",
        startDate: campaignsToEdit.startDate || "",
        endDate: campaignsToEdit.endDate || "",
        startTime: campaignsToEdit?.startTime.toString() || "",
        endTime: campaignsToEdit?.endTime.toString() || "",
        pixelResponse: campaignsToEdit?.pixelResponse || "",
        callbackResponse: campaignsToEdit?.callbackResponse || "",
      });
    }
  }, [campaignsToEdit]);

  const handleUpdateCampaign = async () => {
    const {
      campaignName,
      selectedAudience,
      selectedCreative,
      budget,
      startDate,
      endDate,
      startTime,
      endTime,
      pixelResponse,
      callbackResponse,
    } = formData;

    if (
      !campaignName ||
      !selectedAudience ||
      !selectedCreative ||
      !budget ||
      !startDate ||
      !endDate ||
      !startTime ||
      !endTime ||
      !pixelResponse ||
      !callbackResponse
    ) {
      toast.error("Please fill in all fields before updating the campaign.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("cStatus", "1");
    formDataToSend.append("cId", cId.toString());
    formDataToSend.append("cName", campaignName);
    formDataToSend.append("asId", selectedAudience);
    formDataToSend.append("cbId", selectedCreative);
    formDataToSend.append("cDescription", "Description of the campaign");
    formDataToSend.append("startDate", startDate);
    formDataToSend.append("endDate", endDate);
    formDataToSend.append("startTime", startTime);
    formDataToSend.append("endTime", endTime);
    formDataToSend.append("budget", budget);
    formDataToSend.append("pixelId", pixelResponse);
    formDataToSend.append("callbackId", callbackResponse);
    formDataToSend.append("opens", "0");
    formDataToSend.append("clicks", "0");
    formDataToSend.append("oId", "1");

    try {
      const response = await addCampaignCall(
        "/campaigns/updatestatus",
        formDataToSend
      );
      if (response?.data.status === "success") {
        toast.success(response?.data.message);
        handleDialogClose && handleDialogClose();
      } else {
        toast.error(response?.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update campaign. Please try again.");
    }
  };

  return (
    <Dialog open={openDialog} maxWidth="lg" fullWidth>
      <div className="p-5">
        <DashboardTitle title="Edit Campaign" />
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6} mb={3}>
            <Typography variant="body1" gutterBottom>
              Campaign Name
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              value={formData.campaignName}
              onChange={(e) =>
                handleInputChange("campaignName", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12} md={6} mb={3}>
            <Typography variant="body1" gutterBottom>
              Audience Sets
            </Typography>
            <FormControl fullWidth>
              <InputLabel size="small">Select Audience</InputLabel>
              <Select
                fullWidth
                size="small"
                label="Select Audience"
                value={formData.selectedAudience}
                onChange={(e) =>
                  handleInputChange("selectedAudience", e.target.value)
                }
              >
                {isLoading ? (
                  <MenuItem disabled>
                    <CircularProgress size={24} />
                  </MenuItem>
                ) : isError ? (
                  <MenuItem disabled>Error loading audiences</MenuItem>
                ) : (
                  audiencesets?.list?.map((audience) => (
                    <MenuItem key={audience.asId} value={audience.asId}>
                      {audience.asName}
                    </MenuItem>
                  ))
                )}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              Creative Name
            </Typography>
            <FormControl fullWidth>
              <InputLabel size="small">Select Creatives</InputLabel>
              <Select
                fullWidth
                size="small"
                label="Select Creatives"
                value={formData.selectedCreative}
                onChange={(e) =>
                  handleInputChange("selectedCreative", e.target.value)
                }
              >
                {creativesLoading ? (
                  <MenuItem disabled>
                    <CircularProgress size={24} />
                  </MenuItem>
                ) : creativesError ? (
                  <MenuItem disabled>Error loading creatives</MenuItem>
                ) : (
                  creatives?.list?.map((creative) => (
                    <MenuItem key={creative.cbId} value={creative.cbId}>
                      {creative.cbName}
                    </MenuItem>
                  ))
                )}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              Budget
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              value={formData.budget}
              onChange={(e) => handleInputChange("budget", e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" gutterBottom>
              Start Date
            </Typography>
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              size="small"
              value={formData.startDate.split("T")[0] || ""}
              onChange={(e) => handleInputChange("startDate", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" gutterBottom>
              End Date
            </Typography>
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              size="small"
              value={formData.endDate.split("T")[0] || ""}
              onChange={(e) => handleInputChange("endDate", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" gutterBottom>
              Start Time
            </Typography>
            <TextField
              fullWidth
              type="time"
              variant="outlined"
              size="small"
              value={formData.startTime || ""}
              onChange={(e) => handleInputChange("startTime", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" gutterBottom>
              End Time
            </Typography>
            <TextField
              fullWidth
              type="time"
              variant="outlined"
              size="small"
              value={formData.endTime || ""}
              onChange={(e) => handleInputChange("endTime", e.target.value)}
            />
          </Grid>
        </Grid>

        <Box sx={{ marginTop: "24px", borderRadius: "8px" }}>
          <Typography gutterBottom sx={{ fontSize: "1.3rem" }}>
            Generate Pixel Tracking
          </Typography>

          <Grid container spacing={2} alignItems="flex-end">
            {" "}
            <Grid item xs={9}>
              <TextField
                fullWidth
                variant="outlined"
                label="Generated tracking code will appear here"
                size="small"
                value={formData.pixelResponse || ""}
                InputProps={{
                  endAdornment: (
                    <CopyToClipboard
                      onCopy={() => toast.success("Copied to clipboard")}
                      text={formData.pixelResponse || ""}
                    >
                      <Tooltip arrow title="Click to copy Pixel Tracking URL">
                        <IconButton color="primary">
                          <ContentCopyIcon />
                        </IconButton>
                      </Tooltip>
                    </CopyToClipboard>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ marginBottom: "4px" }}
                onClick={handleGeneratePixel}
              >
                Generate Pixel Tracking URL
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ marginTop: "24px", borderRadius: "8px" }}>
          <Typography gutterBottom sx={{ fontSize: "1.3rem" }}>
            Callback
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Redirectional URL <span style={{ color: "black" }}>*</span>
          </Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={9}>
              <TextField
                fullWidth
                value={formData.callbackResponse || ""}
                onChange={(e) =>
                  handleInputChange("callbackResponse", e.target.value)
                }
                InputProps={{
                  endAdornment: (
                    <IconButton
                      color="primary"
                      //   onClick={() => {
                      //     setCallbackResponse("");
                      //     setCallbackRedirectionURL("");
                      //   }}
                    >
                      <EditIcon />
                    </IconButton>
                  ),
                }}
                size="small"
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleGenerateCallbackURL}
                // disabled={callbackResponse !== null}
              >
                Generate Callback URL
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            marginTop: "24px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            onClick={handleDialogClose}
            color="error"
            style={{ marginRight: "10px" }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleUpdateCampaign}
            disabled={addCampaignLoading}
          >
            {addCampaignLoading ? <CircularProgress size={24} /> : "Save"}
          </Button>
        </Box>
      </div>
    </Dialog>
  );
};

export default EditNewCampaigns;
