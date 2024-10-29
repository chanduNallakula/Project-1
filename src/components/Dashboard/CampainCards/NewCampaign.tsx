import React, { useState } from "react";
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
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-hot-toast";
import { DashboardTitle } from "../DashboardContainer";
import usePostCall from "@/hooks/usePostCall";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getAllCreatives } from "@/apis/creatives";
import { getAudinceset } from "@/apis/audienceset";

interface NewCampaignProps {
  openDialog: boolean;
  handleDialogClose?: () => void;
}

const NewCampaign: React.FC<NewCampaignProps> = ({
  openDialog,
  handleDialogClose,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [pixelResponse, setPixelResponse] = useState<string>("");
  const [callbackRedirectionURL, setCallbackRedirectionURL] =
    useState<string>("");
  const [callbackResponse, setCallbackResponse] = useState<string | null>(null);
  const [campaignName, setCampaignName] = useState<string>("");
  const [selectedAudience, setSelectedAudience] = useState<string>("");
  const [selectedCreative, setSelectedCreative] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const handleGeneratePixel = () => {
    const generatedPixel = "https://your-pixel-url.com/track?campaign=12345";
    setPixelResponse(generatedPixel);
    toast.success("Tracking pixel generated!");
  };
  const handleGenerateCallbackURL = () => {
    const generatedCallback = "https://your-callback-url.com/redirect";
    setCallbackResponse(generatedCallback);
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

  const queryClient = useQueryClient();

  const handleCreateCampaign = async () => {
    if (
      !campaignName ||
      !selectedAudience ||
      !selectedCreative ||
      !budget ||
      !startDate ||
      !endDate ||
      !startTime ||
      !endTime
    ) {
      toast.error("Please fill in all fields before creating a campaign.");
      return;
    }

    const formattedStartDate = startDate.toISOString().split("T")[0];
    const formattedEndDate = endDate.toISOString().split("T")[0];
    const formattedStartTime = startTime
      ?.toISOString()
      .split("T")[1]
      .substring(0, 5);
    const formattedEndTime = endTime
      ?.toISOString()
      .split("T")[1]
      .substring(0, 5);

    const formData = new FormData();
    formData.append("cName", campaignName);
    formData.append("asId", selectedAudience);
    formData.append("csId", selectedCreative);
    formData.append("cDescription", "Description of the campaign");
    formData.append("startDate", formattedStartDate);
    formData.append("endDate", formattedEndDate);
    formData.append("startTime", formattedStartTime);
    formData.append("endTime", formattedEndTime);
    formData.append("budget", budget);
    formData.append("pixelId", pixelResponse);
    formData.append("callbackId", callbackRedirectionURL);
    formData.append("opens", "0");
    formData.append("clicks", "0");
    formData.append("oId", "1");

    try {
      const response = await addCampaignCall("/campaigns/add", formData);
      if (response?.data.status === "success") {
        toast.success(response?.data.message);
        handleDialogClose && handleDialogClose();
        queryClient.invalidateQueries({
          queryKey: ["campaigns"],
        });
      } else {
        toast.error(response?.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to create campaign. Please try again.");
    }
  };

  return (
    <Dialog open={openDialog} maxWidth="lg" fullWidth>
      <div className="p-5">
        <DashboardTitle title="campaigns" />
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6} mb={3}>
            <Typography variant="body1" gutterBottom>
              Campaign Name
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
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
                value={selectedAudience}
                onChange={(e) => setSelectedAudience(e.target.value)}
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
                label="select Creatives"
                value={selectedCreative}
                onChange={(e) => setSelectedCreative(e.target.value)}
              >
                {creativesLoading ? (
                  <MenuItem disabled>
                    <CircularProgress size={24} />
                  </MenuItem>
                ) : creativesError ? (
                  <MenuItem disabled>Error loading creatives</MenuItem>
                ) : (
                  creatives?.list.map((creative) => (
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
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" gutterBottom>
              Start Date
            </Typography>
            <TextField
              type="date"
              value={startDate ? startDate.toISOString().split("T")[0] : ""}
              fullWidth
              onChange={(e) => setStartDate(new Date(e.target.value))}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" gutterBottom>
              End Date
            </Typography>
            <TextField
              type="date"
              value={endDate ? endDate.toISOString().split("T")[0] : ""}
              fullWidth
              onChange={(e) => setEndDate(new Date(e.target.value))}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" gutterBottom>
              Start Time
            </Typography>
            <TextField
              type="time"
              value={
                startTime
                  ? startTime.toISOString().split("T")[1].substring(0, 5)
                  : ""
              }
              fullWidth
              onChange={(e) =>
                setStartTime(
                  new Date(
                    `${startDate?.toISOString().split("T")[0]}T${
                      e.target.value
                    }`
                  )
                )
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" gutterBottom>
              End Time
            </Typography>
            <TextField
              type="time"
              value={
                endTime
                  ? endTime.toISOString().split("T")[1].substring(0, 5)
                  : ""
              }
              fullWidth
              onChange={(e) =>
                setEndTime(
                  new Date(
                    `${endDate?.toISOString().split("T")[0]}T${e.target.value}`
                  )
                )
              }
            />
          </Grid>
        </Grid>

        <Box sx={{ marginTop: "24px", borderRadius: "8px" }}>
          <Typography gutterBottom sx={{ fontSize: "1.3rem" }}>
            Generate Pixel Tracking
          </Typography>

          <Grid container spacing={2} alignItems="flex-end">
            <Grid item xs={9}>
              <TextField
                fullWidth
                variant="outlined"
                label="Generated tracking code will appear here"
                size="small"
                value={pixelResponse}
                InputProps={{
                  endAdornment: (
                    <CopyToClipboard
                      onCopy={() => toast.success("Copied to clipboard")}
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
                        setCallbackRedirectionURL("");
                      }}
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
                disabled={callbackResponse !== null}
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
            onClick={handleCreateCampaign}
            disabled={addCampaignLoading}
          >
            Create
          </Button>
        </Box>
      </div>
    </Dialog>
  );
};

export default NewCampaign;
