"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosRounded";
import Paper from "@mui/material/Paper";
import { useMapUserData } from "@/store/googleMapStore";
import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";
import usePostCall from "@/hooks/usePostCall";
import axiosClient from "@/apis/axiosClient";
import toast from "react-hot-toast";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const AddMyGroupDrawer = () => {
  const [newGroup, setNewGroup] = useState({
    name: "",
    description: "",
  });

  const setGroupDrawerStore = useLeftSideDrawerStore.use.setGroupDrawer();
  const setAddNewGroupDrawerStore = useLeftSideDrawerStore.use.setAddNewGroupDrawer();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setNewGroup((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const queryClient = useQueryClient();

  const handleAddNewGroup = async () => {
    const formData = new FormData();
    formData.append("gfgName", newGroup.name);
    formData.append("gfgDescription", newGroup.description);
    formData.append("coverageReport", "test");
    formData.append("createdBy", "1");

    try {
      const response = await axiosClient.post("/geofencegroups/add", formData);
      if (response?.data.status === "success") {
        toast.success(response?.data.message);
        setAddNewGroupDrawerStore(false);
        setGroupDrawerStore(true);
        queryClient.invalidateQueries({ queryKey: ["myGeofenceGroups"] });
        console.log(response?.data.message);
      } else {
        console.log(response?.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Box
        onClick={() => {
          setAddNewGroupDrawerStore(false);
          setGroupDrawerStore(true);
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <ArrowBackIosIcon sx={{ fontSize: "30px", color: "#fff" }} />
        <Typography sx={{ color: "#fff", fontSize: "24px" }}>Create Group</Typography>
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
            label="Name"
            name="name"
            value={newGroup.name}
            onChange={handleChange}
            placeholder="Group Name"
            id="GroupName"
          />
        </FormControl>
        <FormControl>
          <TextField
            label="Description"
            name="description"
            value={newGroup.description}
            onChange={handleChange}
            placeholder="Group Description"
            id="GroupDescription"
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
              setAddNewGroupDrawerStore(false);
              setGroupDrawerStore(true);
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
            disabled={!(newGroup.name !== "" && newGroup.description !== "")}
            onClick={handleAddNewGroup}
          >
            Create
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddMyGroupDrawer;
