import { Button, Dialog, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { DashboardTitle } from "../DashboardContainer";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axiosClient from "@/apis/axiosClient";
import toast from "react-hot-toast";
import { getAllCreativesets } from "@/apis/creativesets";

interface CreativeUploadNewSetMainProps {
  openNewDialog: boolean;
  handleNewDialogClose?: () => void;
}

const CreativeuploadNewSetMain: React.FC<CreativeUploadNewSetMainProps> = ({
  openNewDialog,
  handleNewDialogClose,
}) => {
  const [error, setError] = useState<boolean>(false);
  const [creativeName, setCreativeName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const queryClient = useQueryClient();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreativeName(event.target.value);
    if (error && event.target.value) {
      setError(false);
    }
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
    if (error && event.target.value) {
      setError(false);
    }
  };

  const handleUpload = async () => {
    setError(false);

    if (!creativeName || !description) {
      setError(true);
      return;
    }

    const formData = new FormData();
    formData.append("csName", creativeName);
    formData.append("createdBy", "1");

    try {
      const response = await axiosClient.post("/creativesets/add", formData);
      if (response.data.status === "success") {
        toast.success(response.data.message);
        handleNewDialogClose && handleNewDialogClose();
        queryClient.invalidateQueries("creativesets");
        setCreativeName("");
        setDescription("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during upload.");
    }
  };

  const handleCreate = () => {
    handleUpload();
  };

  return (
    <Dialog open={openNewDialog} maxWidth="md" fullWidth>
      <div className="p-5">
        <DashboardTitle title=" New Creative Set" />

        <Grid container item xs={12} spacing={2} direction="column">
          <Grid item xs={12}>
            <TextField
              label="Creative Set Name"
              variant="outlined"
              fullWidth
              value={creativeName}
              onChange={handleNameChange}
              error={error && !creativeName}
              helperText={
                error && !creativeName ? "This field is required." : ""
              }
            />
          </Grid>
          <Grid item xs={12} mb={4}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={description}
              onChange={handleDescriptionChange}
              error={error && !description}
              helperText={
                error && !description ? "This field is required." : ""
              }
            />
          </Grid>
        </Grid>

        <Grid container item xs={12} justifyContent={"flex-end"} gap={2}>
          <Button
            variant="contained"
            color="error"
            onClick={handleNewDialogClose}
          >
            Cancel
          </Button>
          <Button variant="contained" onClick={handleCreate}>
            Create
          </Button>
        </Grid>
      </div>
    </Dialog>
  );
};

export default CreativeuploadNewSetMain;
