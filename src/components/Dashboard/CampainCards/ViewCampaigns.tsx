import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  IconButton,
  Dialog,
  CircularProgress,
} from "@mui/material";
import { Close as CloseIcon, ContentCopy } from "@mui/icons-material"; // Import new icons
import { DashboardTitle } from "../DashboardContainer";
import { useQuery } from "@tanstack/react-query";
import { getAllCreatives } from "@/apis/creatives";
import { getAllMyCampaigns } from "@/apis/campaigns";
import { getAudinceset } from "@/apis/audienceset";

interface ViewCampaignsProps {
  openDialog: boolean;
  handleDialogClose: () => void;
  cId: number;
}

const ViewCampaigns: React.FC<ViewCampaignsProps> = ({
  openDialog,
  handleDialogClose,
  cId,
}) => {
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

  const handleCopyPixelResponse = () => {
    navigator.clipboard.writeText(formData.pixelResponse);
  };

  const handleEditCallbackResponse = () => {
    // Implement edit logic here
    console.log("Edit callback response logic");
  };

  return (
    <Dialog open={openDialog} maxWidth="lg" fullWidth>
      <div className="p-5">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <DashboardTitle title="View Campaign" />
          <IconButton
            aria-label="close"
            onClick={handleDialogClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "red",
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={3}>
            <Typography variant="body1" gutterBottom>
              Campaign Name
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {formData.campaignName}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="body1" gutterBottom>
              Audience Sets
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {isLoading ? (
                <CircularProgress size={24} />
              ) : isError ? (
                "Error loading audiences"
              ) : (
                audiencesets?.list?.find(
                  (audience) =>
                    audience.asId.toString() === formData.selectedAudience
                )?.asName || "N/A"
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="body1" gutterBottom>
              Creative Name
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {creativesLoading ? (
                <CircularProgress size={24} />
              ) : creativesError ? (
                "Error loading creatives"
              ) : (
                creatives?.list?.find(
                  (creative) =>
                    creative.cbId.toString() === formData.selectedCreative
                )?.cbName || "N/A"
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="body1" gutterBottom>
              Budget
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {formData.budget}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          sx={{ marginTop: "10px" }}
          alignItems="center"
        >
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" gutterBottom>
              Start Date
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {formData.startDate.split("T")[0] || "N/A"}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" gutterBottom>
              End Date
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {formData.endDate.split("T")[0] || "N/A"}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" gutterBottom>
              Start Time
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {formData.startTime || "N/A"}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" gutterBottom>
              End Time
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {formData.endTime || "N/A"}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" gutterBottom>
              Pixel Response
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {formData.pixelResponse || "N/A"}
              </Typography>
              <IconButton
                onClick={handleCopyPixelResponse}
                size="small"
                color="primary"
                aria-label="copy pixel response"
                sx={{ marginLeft: "50px" }}
              >
                <ContentCopy fontSize="small" />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" gutterBottom>
              Callback Response
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {formData.callbackResponse || "N/A"}
              </Typography>
              <IconButton
                onClick={handleEditCallbackResponse}
                size="small"
                color="primary"
                aria-label="edit callback response"
                sx={{ marginLeft: "50px" }}
              >
                <ContentCopy fontSize="small" />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </div>
    </Dialog>
  );
};

export default ViewCampaigns;
