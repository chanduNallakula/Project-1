import {
  Typography,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Button,
  SelectChangeEvent,
  FormControl,
  Dialog,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { DashboardTitle } from "../DashboardContainer";
import axiosClient from "@/apis/axiosClient";
import toast from "react-hot-toast";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllCreativesets } from "@/apis/creativesets";

interface CreativeUploadMainProps {
  openDialog: boolean;
  handleDialogClose?: () => void;
}

const CreativeuploadMain: React.FC<CreativeUploadMainProps> = ({
  openDialog,
  handleDialogClose,
}) => {
  const [selectedCreative, setSelectedCreative] = useState<string>("");
  const [creativeName, setCreativeName] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [size, setSize] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [selectedCreativeSet, setSelectedCreativeSet] = useState<string>("");

  const creativeTypes = [
    { id: "1", name: "Display Ads" },
    { id: "2", name: "Video Ads" },
    { id: "3", name: "Native Ads" },
    { id: "4", name: "Audio Ads" },
  ];

  const creativeSizes = [
    { id: "1", name: "300 x 250 px" },
    { id: "2", name: "300 x 600 px" },
    { id: "3", name: "728 x 90 px" },
    { id: "4", name: "970 x 250 px" },
    { id: "5", name: "160 x 600 px" },
    { id: "6", name: "320 x 50 px" },
    { id: "7", name: "320 x 100 px" },
    { id: "8", name: "468 x 60 px" },
    { id: "9", name: "300 x 50 px" },
    { id: "10", name: "970 x 90 px" },
    { id: "11", name: "250 x 250 px" },
    { id: "12", name: "200 x 200 px" },
    { id: "13", name: "125 x 125 px" },
    { id: "14", name: "300 x 120 px" },
    { id: "15", name: "240 x 400 px" },
    { id: "16", name: "970 x 300 px" },
    { id: "17", name: "300 x 250 px" },
    { id: "18", name: "320 x 50 px" },
    { id: "19", name: "320 x 100 px" },
  ];

  const handleCreativeChange = (event: SelectChangeEvent<string>) => {
    setSelectedCreative(event.target.value);
    if (error) setError(false);
  };

  const handleCreativeSetChange = (event: SelectChangeEvent<string>) => {
    setSelectedCreativeSet(event.target.value);
    if (error) setError(false);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreativeName(event.target.value);
    if (error) setError(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setUploadedFile(event.target.files[0]);
      if (error) setError(false);
    }
  };

  const handleSizeChange = (event: SelectChangeEvent<string>) => {
    setSize(event.target.value);
    if (error) setError(false);
  };

  const handleUpload = async () => {
    setError(false);

    if (!selectedCreative || !creativeName || !uploadedFile || !size) {
      setError(true);
      return;
    }

    const formData = new FormData();
    formData.append("cbName", creativeName);
    formData.append("ctId", selectedCreative);
    formData.append("csId", selectedCreativeSet);
    formData.append("cbPath", uploadedFile);
    formData.append("cszId", size);
    formData.append("createdBy", "1");

    try {
      const response = await axiosClient.post("/creatives/add", formData);
      if (response.data.status === "success") {
        toast.success(response.data.message);
        if (handleDialogClose) handleDialogClose();
        queryClient.invalidateQueries({
          queryKey: ["creatives"],
        });
        setSelectedCreative("");
        setCreativeName("");
        setUploadedFile(null);
        setSize("");
        setSelectedCreativeSet("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during upload.");
    }
  };

  const queryClient = useQueryClient();
  const {
    data: creativesets,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["creativesets"],
    queryFn: () => getAllCreativesets(),
  });

  return (
    <Dialog open={openDialog} maxWidth="lg" fullWidth>
      <div className="p-5">
        <DashboardTitle title="New Creative" />

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={error && !selectedCreative}>
                  <InputLabel size="small" id="creative-type-label">
                    Creative Type
                  </InputLabel>
                  <Select
                    fullWidth
                    size="small"
                    value={selectedCreative}
                    onChange={handleCreativeChange}
                    label="Creative Type"
                    labelId="creative-type-label"
                  >
                    {creativeTypes.map((creativeType) => (
                      <MenuItem key={creativeType.id} value={creativeType.id}>
                        {creativeType.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={error && !selectedCreativeSet}>
                  <InputLabel size="small" id="creative-set-label">
                    Creative Set
                  </InputLabel>
                  <Select
                    fullWidth
                    size="small"
                    value={selectedCreativeSet}
                    onChange={handleCreativeSetChange}
                    label="Creative Set"
                    labelId="creative-set-label"
                  >
                    {creativesets?.map((creativeSet) => (
                      <MenuItem key={creativeSet.csId} value={creativeSet.csId}>
                        {creativeSet.csName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item xs={12} spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Creative Name"
                variant="outlined"
                fullWidth
                value={creativeName}
                onChange={handleNameChange}
                error={error && !creativeName}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={error && !size}>
                <InputLabel size="small" id="creative-size-label">
                  Creative Size
                </InputLabel>
                <Select
                  fullWidth
                  size="small"
                  value={size}
                  onChange={handleSizeChange}
                  label="Creative Size"
                  labelId="creative-size-label"
                >
                  {creativeSizes.map((creativeSize) => (
                    <MenuItem key={creativeSize.id} value={creativeSize.id}>
                      {creativeSize.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Upload File"
              variant="outlined"
              type="file"
              fullWidth
              onChange={handleFileChange}
              error={error && !uploadedFile}
            />
          </Grid>

          <Grid container item xs={12} justifyContent={"flex-end"} gap={2}>
            <Button
              variant="contained"
              color="error"
              onClick={handleDialogClose}
            >
              Cancel
            </Button>
            <Button variant="contained" onClick={handleUpload}>
              Create
            </Button>
          </Grid>
        </Grid>
      </div>
    </Dialog>
  );
};

export default CreativeuploadMain;
