"use client";

import React, { use, useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosRounded";
import { RgbaStringColorPicker } from "react-colorful";

import {
  useDeckglLayers,
  useDeckglPolygonModal,
  useGoogleMapDrawingOverlays,
  useGoogleMapStore,
  useMapUserData,
} from "@/store/googleMapStore";
import { IABOptionsLatest } from "@/lib/constants/CampaignData";
import { useMap } from "@vis.gl/react-google-maps";
import { FormHelperText, darken } from "@mui/material";
import { polygonOptions } from "@/lib/constants/googleMapDataV2";
import { hexToRgbaArray, rgbaStringToColorSet } from "@/lib/utils/helper";
import { group } from "console";
import { Draw } from "@mui/icons-material";
import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";

const AddGeoFenceDrawer = () => {
  const map = useMap();

  const setGeofencesDrawerStore = useLeftSideDrawerStore.use.setGeofencesDrawer();
  const setAddNewGeofencesDrawerStore = useLeftSideDrawerStore.use.setAddNewGeofencesDrawer();

  const geofences = useGoogleMapStore.use.geofences();
  const geofenceMode = useGoogleMapStore.use.geofenceMode();
  const drawingManager = useGoogleMapStore.use.drawingManager();
  const setDrawingManager = useGoogleMapStore.use.setDrawingManager();
  const setGeoFences = useGoogleMapStore.use.setGeoFences();
  const overlays = useGoogleMapDrawingOverlays.use.overlays();
  const updateGeoFence = useGoogleMapStore.use.updateGeoFence();
  const geofenceUpdateId = useGoogleMapStore.use.geofenceUpdateId();
  const setGeofenceMode = useGoogleMapStore.use.setGeofenceMode();
  const clearAllOverlays = useGoogleMapDrawingOverlays.use.clearAllOverlays();

  const addGeofencePolygonData = useGoogleMapDrawingOverlays.use.addGeofencePolygonData();
  const setAddGeofencePolygonData = useGoogleMapDrawingOverlays.use.setAddGeofencePolygonData();

  const setPolygonLayersStore = useDeckglLayers.use.setPolygonLayersStore();

  const setSelectedGeofenceForModalStore = useMapUserData.use.setSelectedGeofenceForModal();
  const setOpenAddAudienceModalStore = useDeckglPolygonModal.use.setOpenGeofenceForModal();

  const allPolygons = useGoogleMapDrawingOverlays.use.allPolygons();
  const setAllPolygons = useGoogleMapDrawingOverlays.use.setAllPolygons();

  const myGroupsStore = useMapUserData.use.myGroupsStore();

  const IABMainCategories = IABOptionsLatest.map((option) => option.name);

  const IABSubCategories = IABOptionsLatest.map((option) => {
    return option.innerOptions.map((subCategory) => subCategory.name);
  });

  const [newGeoFence, setNewGeoFence] = useState({
    name: "",
    category: "",
    subCategory: "",
    city: "",
    isPublic: false,
    color: "",
    group: "",
  });

  const disbaledFields = geofenceMode === "view" ? true : false;

  const index = IABMainCategories.indexOf(newGeoFence.category.toString());
  const selectIABSubCategories = IABSubCategories[index === -1 ? 0 : index];

  const [selectedColor, setSelectedColor] = useState(newGeoFence.color || "#000000");
  const [colorPickerOpen, setColorPickerOpen] = useState(false);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setNewGeoFence((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    if (name !== undefined) {
      setNewGeoFence((prevData) => {
        return {
          ...prevData,
          [name]: value,
        };
      });
    }
  };

  useEffect(() => {
    if (!map && !addGeofencePolygonData) return;
    const alpha =
      rgbaStringToColorSet(selectedColor)[rgbaStringToColorSet(selectedColor).length - 1];
    addGeofencePolygonData?.polygon?.overlay?.setOptions({
      fillColor: selectedColor,
      fillOpacity: Math.max(0, Math.min(255, alpha)) / 255, //converts alpha 0-255 value to 0-1 opacity value
    });
  }, [map, addGeofencePolygonData, selectedColor]);

  const handleViewGeofence = useCallback(() => {
    const geofenceToView = geofences.find((geofence) => geofence.id === geofenceUpdateId);

    if (!geofenceToView) return;
    setNewGeoFence({
      name: geofenceToView?.properties.name,
      category: geofenceToView?.properties.category,
      subCategory: geofenceToView?.properties.subCategory,
      city: geofenceToView?.properties.city,
      isPublic: geofenceToView?.properties.isPublic,
      color: geofenceToView?.properties.color,
      group: geofenceToView?.properties.group,
    });
    setSelectedColor(geofenceToView.properties.color);
    if (!map) return;
    map.fitBounds(geofenceToView.bounds);
    map.setZoom(geofenceToView.zoom);
  }, [map, geofences, geofenceUpdateId]);

  const handleEditGeofence = useCallback(() => {
    // if (drawingManager) {
    //   drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
    // }
    const geofenceToEdit = geofences.find((geofence) => geofence.id === geofenceUpdateId);

    if (!geofenceToEdit) return;
    setNewGeoFence({
      name: geofenceToEdit?.properties.name,
      category: geofenceToEdit?.properties.category,
      subCategory: geofenceToEdit?.properties.subCategory,
      city: geofenceToEdit?.properties.city,
      isPublic: geofenceToEdit?.properties.isPublic,
      color: geofenceToEdit?.properties.color,
      group: geofenceToEdit?.properties.group,
    });
    setSelectedColor(geofenceToEdit.properties.color);

    if (!map) return;
    map.fitBounds(geofenceToEdit.bounds);
    map.setZoom(geofenceToEdit.zoom);
  }, [map, geofences, geofenceUpdateId]);

  const handleCreateGeofenceView = useCallback(() => {
    drawingManager?.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
    setNewGeoFence({
      name: "",
      category: "",
      subCategory: "",
      city: "",
      isPublic: false,
      color: "",
      group: "",
    });
    setSelectedColor("#000000");
  }, [drawingManager]);

  useEffect(() => {
    if (geofenceMode === "view" && geofenceUpdateId) {
      handleViewGeofence();
    }

    if (geofenceMode === "edit" && geofenceUpdateId) {
      handleEditGeofence();
    }
    if (geofenceMode === "create") {
      handleCreateGeofenceView();
    }
  }, [
    drawingManager,
    geofenceMode,
    geofenceUpdateId,
    handleCreateGeofenceView,
    handleViewGeofence,
    handleEditGeofence,
  ]);

  const handleOpenAddAudienceModal = (id?: string) => {
    const geoFenceName = geofences.find((geofence) => geofence.id === id)?.properties.name;
    setOpenAddAudienceModalStore(true);
    setSelectedGeofenceForModalStore(geoFenceName || "");
  };

  const handleCreateGeofence = () => {
    if (addGeofencePolygonData.polygon === null || addGeofencePolygonData.overlay === null) {
      setErrorText("Please draw geofence on the map");
      return;
    }

    setErrorText("");

    if (geofences.find((geofence) => geofence.properties.name === newGeoFence.name)) {
      alert("Geofence with this name already exists");
      return;
    }
    if (addGeofencePolygonData.overlay && addGeofencePolygonData.polygon) {
      const newGeofence = {
        id: `${geofences.length + 1}_${newGeoFence.name}`,
        properties: {
          name: newGeoFence.name,
          category: newGeoFence.category,
          subCategory: newGeoFence.subCategory,
          city: newGeoFence.city,
          group: newGeoFence.group,
          isPublic: newGeoFence.isPublic,
          color: selectedColor,
        },
        color: rgbaStringToColorSet(selectedColor),

        bounds: {
          south: addGeofencePolygonData.properties.mapBounds.south,
          west: addGeofencePolygonData.properties.mapBounds.west,
          north: addGeofencePolygonData.properties.mapBounds.north,
          east: addGeofencePolygonData.properties.mapBounds.east,
        },
        zoom: addGeofencePolygonData.properties.mapZoom,
        coordinates: addGeofencePolygonData.overlay ? addGeofencePolygonData.overlay : [],
      };
      setGeoFences(newGeofence);
      setPolygonLayersStore([...geofences, newGeofence], "true", handleOpenAddAudienceModal);
      addGeofencePolygonData?.polygon?.overlay?.setMap(null);
      drawingManager?.setMap(null);
    }
    setAddGeofencePolygonData({
      overlay: null,
      polygon: null,
      properties: {
        mapZoom: 0,
        mapBounds: { east: 0, north: 0, south: 0, west: 0 },
      },
    });
    handleExit();
  };

  const handleExit = () => {
    setAddNewGeofencesDrawerStore(false);
    setGeofencesDrawerStore(true);
    setGeofenceMode("none");

    if (drawingManager) {
      drawingManager.setDrawingMode(null);
      if (geofenceMode === "create" || (geofenceMode === "edit" && addGeofencePolygonData)) {
        addGeofencePolygonData?.polygon?.overlay?.setMap(null);
      }
    }
  };

  const [errorText, setErrorText] = useState("");
  useEffect(() => {
    if (geofenceMode === "create") {
      setAddGeofencePolygonData({
        polygon: null,
        overlay: null,
        properties: {
          mapBounds: {
            east: 0,
            north: 0,
            south: 0,
            west: 0,
          },
          mapZoom: 15,
        },
      });
      setErrorText("");
    }
  }, [geofenceMode, setAddGeofencePolygonData]);

  useEffect(() => {
    if (
      (geofenceMode === "create" && addGeofencePolygonData.polygon !== null) ||
      addGeofencePolygonData.overlay !== null
    ) {
      setErrorText("");
    }
  }, [geofenceMode, addGeofencePolygonData]);

  return (
    <Box>
      <Box
        onClick={handleExit}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <ArrowBackIosIcon sx={{ fontSize: "30px", color: "#fff" }} />
        <Typography sx={{ color: "#fff", fontSize: "24px" }}>
          {geofenceMode === "create"
            ? "Create Geofence"
            : geofenceMode === "edit"
            ? "Edit Geofence"
            : geofenceMode === "view"
            ? "Geofence"
            : "Geofence"}
        </Typography>
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
            disabled={disbaledFields}
            label="Name"
            name="name"
            value={newGeoFence.name}
            onChange={handleInputChange}
            placeholder="Geofence Name"
            id="GeofenceName"
            sx={{
              "& .MuiInputBase-root": {
                borderColor: "#d1d1d1 !important",
              },
              "& .MuiInputBase-input": {
                color: "#000 !important",
              },
            }}
            inputProps={{
              sx: {
                "&::placeholder": {
                  color: "gray !important",
                  opacity: "1 !important",
                  fontSize: `13px !important`,
                },
              },
            }}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel style={{ color: "#808080" }} id="geofence-category-label">
            Category
          </InputLabel>
          <Select
            sx={{
              "& .MuiInput-input": {
                color: "#000 !important",
              },
              "&.MuiInputBase-root": {
                borderColor: "#d1d1d1 !important",
              },
              "& .MuiSelect-icon": {
                color: "#000 !important",
              },
            }}
            disabled={disbaledFields}
            labelId="geofence-category-label"
            id="geofence-category"
            value={newGeoFence.category}
            label="Category"
            onChange={handleSelectChange}
            name="category"
          >
            {IABMainCategories.map((category) => {
              return (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel style={{ color: "#808080" }} id="geofence-sub-category-label">
            Sub Category
          </InputLabel>
          <Select
            sx={{
              "& .MuiInput-input": {
                color: "#000 !important",
              },
              "& .MuiSelect-icon": {
                color: "#000 !important",
              },

              "&.MuiInputBase-root": {
                borderColor: "#d1d1d1 !important",
              },
            }}
            disabled={disbaledFields}
            labelId="geofence-sub-category-label"
            id="geofence-sub-category"
            value={newGeoFence.subCategory}
            label="Sub Category"
            onChange={handleSelectChange}
            name="subCategory"
          >
            {selectIABSubCategories?.map((subCategory, index) => {
              return (
                <MenuItem key={index} value={subCategory}>
                  {subCategory}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel style={{ color: "#808080" }} id="geofence-group-label">
            Group
          </InputLabel>
          <Select
            sx={{
              "& .MuiInput-input": {
                color: "#000 !important",
              },
              "& .MuiSelect-icon": {
                color: "#000 !important",
              },

              "&.MuiInputBase-root": {
                borderColor: "#d1d1d1 !important",
              },
            }}
            disabled={disbaledFields}
            labelId="geofence-group-label"
            id="geofence-group"
            value={newGeoFence.group}
            label="Group"
            onChange={handleSelectChange}
            name="group"
          >
            {myGroupsStore?.map((group) => {
              return (
                <MenuItem key={group.id} value={group.name}>
                  {group.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl>
          <TextField
            disabled={disbaledFields}
            name="city"
            label="City"
            value={newGeoFence.city}
            onChange={handleInputChange}
            placeholder="City name"
            id="city"
            sx={{
              "& .MuiInputBase-root": {
                borderColor: "#d1d1d1 !important",
              },
              "& .MuiInputBase-input": {
                color: "#000 !important",
              },
            }}
            inputProps={{
              sx: {
                "&::placeholder": {
                  color: "gray !important",
                  opacity: "1 !important",
                  fontSize: `13px !important`,
                },
              },
            }}
          />
        </FormControl>

        <FormControl>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FormLabel style={{ color: "#808080" }}>Color</FormLabel>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                if (!disbaledFields) {
                  setColorPickerOpen(!colorPickerOpen);
                }
              }}
              sx={{
                cursor: disbaledFields ? "not-allowed" : "pointer",
                width: "35px",
                height: "35px",
                minWidth: "35px",
                padding: "0 !important",
                backgroundColor: selectedColor,

                color: "white",
                "&:hover": {
                  backgroundColor: selectedColor,
                },
              }}
            ></Button>
          </Box>
        </FormControl>

        {/* Display color picker when colorPickerOpen is true */}
        {colorPickerOpen && (
          <>
            <RgbaStringColorPicker
              style={{ width: "100%" }}
              color={selectedColor}
              onChange={(color) => setSelectedColor(color)}
            />
          </>
        )}

        <FormControl>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FormLabel style={{ color: "#808080" }}>Public</FormLabel>
            <Switch
              sx={{
                cursor: disbaledFields ? "not-allowed" : "pointer",
              }}
              disabled={disbaledFields}
              name="isPublic"
              checked={newGeoFence.isPublic}
              onChange={(_, checked) => {
                setNewGeoFence((prevData) => {
                  return {
                    ...prevData,
                    isPublic: checked,
                  };
                });
              }}
            />
          </Box>
          <FormHelperText
            sx={{
              margin: "0",
              marginTop: "3px",
              color: "#f44336",
            }}
          >
            {errorText.length > 0 && errorText}
          </FormHelperText>
        </FormControl>

        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
          {geofenceMode === "create" ? (
            <>
              <Button
                sx={{
                  backgroundColor: "#f24726",
                  padding: "8px 0",
                  flex: 1,
                  "&:hover": {
                    backgroundColor: darken("#f24726", 0.3),
                  },
                }}
                variant="contained"
                onClick={handleExit}
              >
                Cancel
              </Button>

              <Button
                sx={{
                  backgroundColor: "#2d9bf0",
                  padding: "8px 0",
                  flex: 1,
                }}
                disabled={
                  !(
                    newGeoFence.name !== "" &&
                    newGeoFence.city !== "" &&
                    newGeoFence.category !== "" &&
                    newGeoFence.subCategory !== "" &&
                    newGeoFence.group !== ""
                  )
                }
                variant="contained"
                onClick={handleCreateGeofence}
              >
                Create
              </Button>
            </>
          ) : geofenceMode === "edit" ? (
            <>
              <Button
                sx={{
                  backgroundColor: "#f24726",
                  padding: "8px 0",
                  flex: 1,
                  "&:hover": {
                    backgroundColor: darken("#f24726", 0.3),
                  },
                }}
                variant="contained"
                onClick={() => {
                  setAddNewGeofencesDrawerStore(false);
                  setGeofencesDrawerStore(true);
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
                disabled={!(newGeoFence.name !== "" && newGeoFence.city !== "")}
                variant="contained"
                onClick={() => {
                  setAddNewGeofencesDrawerStore(false);
                  setGeofencesDrawerStore(true);

                  if (addGeofencePolygonData) {
                    const _polygon = new google.maps.Polygon({
                      paths: addGeofencePolygonData as unknown as google.maps.LatLngLiteral[],
                      strokeColor: selectedColor,
                      strokeOpacity: 0.8,
                      strokeWeight: 2,
                      fillColor: selectedColor,
                      fillOpacity: 0.15,
                      editable: false,
                      draggable: false,
                    });
                    _polygon.setMap(map);

                    // if (!allPolygons.some((polygon) => polygon.id === newGeoFence.id)) {
                    //   const _polygon = new google.maps.Polygon();
                    //   _polygon.setMap(map);
                    //   setAllPolygons({ overlay: _polygon, id: geofence.id });
                    // }

                    // setAllPolygons({ overlay: _polygon, id: geofences.length + 1 });
                  }

                  // if (geofenceMode === "edit") {
                  //   updateGeoFence({
                  //     id: geofenceUpdateId,
                  //     name: newGeoFence.name,
                  //     category: newGeoFence.category,
                  //     subCategory: newGeoFence.subCategory,
                  //     city: newGeoFence.city,
                  //     isPublic: newGeoFence.isPublic,
                  //     color: selectedColor,
                  //     overlay: overlays[overlays.length - 1],
                  //   });
                  // }
                }}
              >
                Update
              </Button>
            </>
          ) : geofenceMode === "view" ? null : null}
        </Box>
      </Paper>
    </Box>
  );
};

export default AddGeoFenceDrawer;
