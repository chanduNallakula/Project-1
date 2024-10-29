import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosRounded";
import Paper from "@mui/material/Paper";
import { useDeckglPolygonModal, useMapUserData } from "@/store/googleMapStore";
import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";

const AddAudienceDrawer: React.FC = () => {
  const [newAudience, setNewAudience] = useState({
    name: "",
    description: "",
  });

  // drawer store
  const setAudienceDrawer = useLeftSideDrawerStore.use.setAudienceDrawer();
  const setAddNewAudienceDrawer = useLeftSideDrawerStore.use.setAddNewAudienceDrawer();

  const myAudiencesStore = useMapUserData.use.myAudiencesStore();
  const setMyAudiencesStore = useMapUserData.use.setMyAudiencesStore();

  const setOpenAddAudienceModalStore = useDeckglPolygonModal.use.setOpenGeofenceForModal();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setNewAudience((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleAddNewAudience() {
    setMyAudiencesStore([
      ...myAudiencesStore,
      {
        id: myAudiencesStore.length + 1,
        name: newAudience.name,
        description: newAudience.description,
        count: 0,
      },
    ]);
    setAddNewAudienceDrawer(false);
    setAudienceDrawer(true);
  }

  return (
    <Box>
      <Box
        onClick={() => {
          setAddNewAudienceDrawer(false);
          setAudienceDrawer(true);
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <ArrowBackIosIcon sx={{ fontSize: "30px", color: "#fff" }} />
        <Typography sx={{ color: "#fff", fontSize: "24px" }}>Create Audience</Typography>
      </Box>
      <Paper
        sx={{
          "&.MuiPaper-root": {
            backgroundColor: "#fff",
            width: "300px",
            display: "flex",
            margin: "20px auto",
            flexDirection: "column",
            gap: "20px",
            padding: "20px 20px",
          },
        }}
      >
        <FormControl>
          <TextField
            name="name"
            value={newAudience.name}
            onChange={handleChange}
            placeholder="Audience Name"
            id="AudienceName"
          />
        </FormControl>
        <FormControl>
          <TextField
            name="description"
            value={newAudience.description}
            onChange={handleChange}
            placeholder="Audience Description"
            id="AudienceDescription"
            multiline
            rows={4}
          />
        </FormControl>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#f24726",
              padding: "8px 0",
              flex: 1,
            }}
            variant="contained"
            onClick={() => {
              setAddNewAudienceDrawer(false);
              setAudienceDrawer(true);
            }}
          >
            Cancel
          </Button>
          <Button
            sx={{
              backgroundColor: "#2d9bf0",
              padding: "8px 0",
              flex: 1,
            }}
            variant="contained"
            disabled={!(newAudience.name !== "" && newAudience.description !== "")}
            onClick={handleAddNewAudience}
          >
            Create
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddAudienceDrawer;
