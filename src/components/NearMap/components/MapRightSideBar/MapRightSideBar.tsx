"use client";
import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import Link from "next/link";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SatelliteIcon from "@mui/icons-material/SatelliteRounded";
import RadioIcon from "@mui/icons-material/Radio";
import AddBoxIcon from "@mui/icons-material/AddBox";
import VisibilityIcon from "@mui/icons-material/Visibility";

import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";

import Accordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

type CustomAccordionProps = AccordionProps & {
  children: React.ReactNode;
};

import { MapMenuLayerCloseIconButton } from "../MapMenuLayer/MapMenuLayer.style";

import { IABOptionsLatest } from "@/lib/constants/CampaignData";
import { Alert, AlertTitle, Button, Collapse, Tooltip, darken } from "@mui/material";
import {
  useDeckglLayers,
  useDeckglPolygonModal,
  useGoogleMapDrawingOverlays,
  useGoogleMapProps,
  useGoogleMapStore,
  useMapRightSideDrawerStore,
  useMapUserData,
} from "@/store/googleMapStore";
import { useMap } from "@vis.gl/react-google-maps";
import theme from "@/lib/utils/theme";
import toast from "react-hot-toast";

const IABAccordionIDs = [
  "IAB1",
  "IAB2",
  "IAB3",
  "IAB4",
  "IAB5",
  "IAB6",
  "IAB7",
  "IAB8",
  "IAB9",
  "IAB10",
  "IAB11",
  "IAB12",
  "IAB13",
  "IAB14",
  "IAB15",
  "IAB16",
  "IAB17",
  "IAB18",
  "IAB19",
  "IAB20",
  "IAB21",
  "IAB22",
  "IAB23",
  "IAB24",
  "IAB25",
  "IAB26",
];

export const MapMenuLayerDrawerRight = ({
  openRightMainDrawer,
  setOpenRightMainDrawer,
}: {
  openRightMainDrawer: boolean;
  setOpenRightMainDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [searchIABs, setSearchIABs] = useState<string>("");

  const selectedIABCategoryStore = useMapRightSideDrawerStore.use.selectedIABCategory();
  const setSelectedIABCategoryStore = useMapRightSideDrawerStore.use.setSelectedIABCategory();

  useEffect(() => () => setSelectedIABCategoryStore(""), [setSelectedIABCategoryStore]);

  // const memoizedIABOptions = React.useMemo(() => {
  //   return IABOptionsLatest.filter((IAB) => {
  //     return IAB.name.toLowerCase().includes(searchIABs.toLowerCase());
  //   });
  // }, [searchIABs]);

  const memoizedIABOptions = React.useMemo(() => {
    return IABOptionsLatest.map((category) => {
      const matchedInnerOptions = category.innerOptions.filter((innerOption) =>
        innerOption.name.toLowerCase().includes(searchIABs.toLowerCase())
      );

      return {
        ...category,
        matched:
          category.name.toLowerCase().includes(searchIABs.toLowerCase()) ||
          matchedInnerOptions.length > 0,
        innerOptions: matchedInnerOptions,
      };
    }).filter((category) => category.matched || category.innerOptions.length > 0);
  }, [searchIABs]);

  React.useEffect(() => {
    if (searchIABs) {
      const sectionsToExpand = memoizedIABOptions
        .filter((category) => category.innerOptions.length > 0)
        .map((_, index) => IABAccordionIDs[index]);

      setExpandedAccordions(sectionsToExpand);
    } else {
      setExpandedAccordions([]); // Collapse all when search is cleared
    }
  }, [searchIABs, memoizedIABOptions]);

  const [expandedAccordions, setExpandedAccordions] = useState<string[]>([]);

  const handleExpandAllAccordions = () => {
    setExpandedAccordions(IABAccordionIDs);
  };

  const handleCollapseAllAccordions = () => {
    setExpandedAccordions([]);
  };

  const handleAccordionChange =
    (accordionId: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      const newExpandedAccordions = isExpanded
        ? [...expandedAccordions, accordionId]
        : expandedAccordions.filter((id) => id !== accordionId);

      setExpandedAccordions(newExpandedAccordions);
    };

  const noGeofencesFoundForCategory = () =>
    toast(
      <Alert severity="info">
        <AlertTitle>No Geofence</AlertTitle>
        No geofences found for this category.
      </Alert>
    );

  const setPolygonLayersStore = useDeckglLayers.use.setPolygonLayersStore();

  const geofences = useGoogleMapStore.use.geofences();
  const drawingManager = useGoogleMapStore.use.drawingManager();
  const allPolygons = useGoogleMapDrawingOverlays.use.allPolygons();
  const setAllPolygons = useGoogleMapDrawingOverlays.use.setAllPolygons();
  const map = useMap();

  const setSelectedGeofenceForModalStore = useMapUserData.use.setSelectedGeofenceForModal();
  const setOpenAddAudienceModalStore = useDeckglPolygonModal.use.setOpenGeofenceForModal();

  const handleOpenAddAudienceModal = useCallback(
    (id?: string) => {
      const geoFenceName = geofences.find((geofence) => geofence.id === id)?.properties.name;
      setOpenAddAudienceModalStore(true);
      setSelectedGeofenceForModalStore(geoFenceName || "");
    },
    [geofences, setOpenAddAudienceModalStore, setSelectedGeofenceForModalStore]
  );

  const selectedGroupStore = useMapUserData.use.selectedGroup();
  const setSelectedGroupStore = useMapUserData.use.setSelectedGroup();

  useEffect(() => {
    if (selectedIABCategoryStore.length === 0) {
      setPolygonLayersStore(geofences, "true", handleOpenAddAudienceModal);
      return;
    }
    const filteredGeofences = geofences.filter(
      (geofence) => geofence.properties.subCategory === selectedIABCategoryStore
    );
    if (filteredGeofences.length === 0) {
      noGeofencesFoundForCategory();
      return;
    }

    if (
      map &&
      filteredGeofences.length > 0 &&
      filteredGeofences[0].bounds &&
      filteredGeofences[0].zoom
    ) {
      map.fitBounds(filteredGeofences[0].bounds);
      map.setZoom(15);
    }

    setSelectedGroupStore("");
    setPolygonLayersStore(filteredGeofences, "true", handleOpenAddAudienceModal);
  }, [
    map,
    setSelectedGroupStore,
    selectedIABCategoryStore,
    geofences,
    setSelectedIABCategoryStore,
    setPolygonLayersStore,
    handleOpenAddAudienceModal,
  ]);

  useEffect(() => {
    setSelectedGroupStore("");
  }, [setSelectedGroupStore]);

  // const handleAddGeofence = (selectedIAB: string, add: boolean) => {
  //   console.log("if allPolygons", allPolygons);
  //   console.log("if geofences", geofences);
  //   geofences.forEach((geofence) => {
  //     if (geofence.properties.subCategory === selectedIAB && add === true) {
  //       console.log("if");
  //       if (allPolygons.length > 0) {
  //         console.log("if if");
  //         allPolygons.forEach((polygon) => {
  //           if (polygon.id === geofence.id) {
  //             console.log("if if if");
  //             polygon.overlay.setMap(map);
  //           }
  //         });
  //       }
  //       if (!allPolygons.some((polygon) => polygon.id === geofence.id)) {
  //         const _polygon = new google.maps.Polygon({ ...geofence.overlay });
  //         _polygon.setMap(map);
  //         setAllPolygons({ overlay: _polygon, id: geofence.id });
  //       }
  //     } else if (geofence.properties.subCategory === selectedIAB && add === false) {
  //       console.log("else");
  //       allPolygons.forEach((polygon) => {
  //         if (polygon.id === geofence.id) {
  //           polygon.overlay.setMap(null);
  //         }
  //       });
  //     }
  //   });
  // };

  const zoomStore = useGoogleMapProps.use.mapZoomStore();
  const setMapZoomStore = useGoogleMapProps.use.setMapZoomStore();

  function handleMapZoomOut() {
    setMapZoomStore(zoomStore - 0.4);
  }

  function handleMapZoomIn() {
    setMapZoomStore(zoomStore + 0.4);
  }

  function handleLoadAllGeofences() {
    setSelectedGroupStore("");
    setSelectedIABCategoryStore("");
    setPolygonLayersStore(geofences, "true", handleOpenAddAudienceModal);
  }

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        pointerEvents: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            gap: "5px",
            pointerEvents: "auto",
            margin: "10px 0",
          }}
        >
          <Tooltip arrow title="View all geofences">
            <Button variant="contained" onClick={handleLoadAllGeofences}>
              <VisibilityIcon sx={{ fontSize: "24px", color: "white" }} /> &nbsp;
              <Typography>View all</Typography>
            </Button>
          </Tooltip>
          <Link href="/login">
            <Tooltip arrow title="Logout">
              <IconButton
                sx={{
                  padding: "2px",
                  marginTop: "5px",
                  marginRight: "2px",
                  backgroundColor: "#f44336",
                  "&:hover": {
                    backgroundColor: darken("#f44336", 0.3),
                  },
                }}
                color="error"
              >
                <PowerSettingsNewRoundedIcon
                  sx={{
                    fontSize: "24px",
                    color: "#ffffff",
                  }}
                />
              </IconButton>
            </Tooltip>
          </Link> */}
        {/* <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                  visibility: {
                    xs: "hidden",
                    md: "visible",
                  },

                  flexDirection: "column",
                }}
              >
                <IconButton onClick={handleMapZoomIn} sx={{ padding: "5px" }}>
                  <AddCircleRoundedIcon sx={{ fontSize: "25px", color: "green" }} />
                </IconButton>
                <IconButton onClick={handleMapZoomOut} sx={{ padding: "5px" }}>
                  <RemoveCircleRoundedIcon sx={{ fontSize: "25px", color: "red" }} />
                </IconButton>
              </Box> */}
        {/* </Box> */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: 1,
            pointerEvents: "auto",
            marginTop: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "flex-end",
              backgroundColor: "#0984e3",
              marginRight: "0px",

              marginTop: {
                xs: "40px",
                md: "0",
              },
            }}
          >
            <Box
              className="horizontal-scrollbar-style-white"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-end",
                backgroundColor: "#0984e3",
                marginRight: "2px",
                maxHeight: "370px",
                overflowY: "scroll",

                marginTop: {
                  xs: "40px",
                  md: "0",
                },
              }}
            >
              {IABOptionsLatest.map((IAB, index) => {
                return (
                  <Tooltip arrow={true} placement="left" title={IAB.name} key={IAB.name + index}>
                    <IconButton
                      disableRipple
                      sx={{
                        padding: "5px",
                        "& .fa-solid": {
                          fontSize: "16px",
                          padding: "2px 0",
                          color: "#fff",
                        },
                        "&.MuiButtonBase-root": {
                          borderRadius: "0 !important",
                        },
                        "&.MuiButtonBase-root:hover": {
                          backgroundColor: "#fff",
                        },

                        "&.MuiButtonBase-root:hover .fa-solid": {
                          color: "#0984e3",
                        },
                      }}
                    >
                      {IAB.icon}
                    </IconButton>
                  </Tooltip>
                );
              })}
            </Box>
            <Tooltip
              disableFocusListener={true}
              arrow={true}
              placement="left"
              title={!openRightMainDrawer ? "Expand IAB options" : "Collapse IAB options"}
            >
              <IconButton
                onClick={() => {
                  setOpenRightMainDrawer(!openRightMainDrawer);
                }}
                sx={{
                  padding: "5px",
                  "& .MuiSvgIcon-root": {
                    fontSize: "20px",
                    color: "#fff",
                  },
                  "&.MuiButtonBase-root": {
                    borderRadius: "0 !important",
                  },
                  "&.MuiButtonBase-root:hover": {
                    backgroundColor: "#fff",
                  },

                  "&.MuiButtonBase-root:hover .MuiSvgIcon-root": {
                    color: "#0984e3",
                  },
                }}
              >
                {openRightMainDrawer ? <KeyboardArrowRightIcon /> : <KeyboardArrowLeftIcon />}
              </IconButton>
            </Tooltip>
          </Box>
          {/* <Box
              sx={{
                backgroundColor: "red",
                marginTop: "auto",
                marginRight: {
                  xs: "0",
                  md: "10px",
                },
                marginBottom: {
                  xs: "0",
                  md: "10px",
                },
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              {bottomIcons.map((icon, index) => {
                return (
                  <IconButton
                    key={icon.name + index}
                    disableRipple
                    sx={{
                      flex: 1,
                      "&.MuiButtonBase-root": {
                        borderRadius: "0 !important",
                      },
                      "&.MuiButtonBase-root:hover": {
                        backgroundColor: "#fff",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "#fff",
                        fontSize: "20px",
                      },
                      "&.MuiButtonBase-root:hover .MuiSvgIcon-root": {
                        color: "red",
                      },
                    }}
                  >
                    {icon.component}
                  </IconButton>
                );
              })}
            </Box> */}
        </Box>
      </Box>

      <Box>
        <Slide direction="left" in={openRightMainDrawer} mountOnEnter unmountOnExit>
          <Box
            className="horizontal-scrollbar-style"
            sx={{
              minWidth: {
                xs: "220px",
                md: "335px",
              },
              pointerEvents: "auto",

              maxHeight: "100vh",
              overflowY: "scroll",
              overflowX: "hidden",
              backgroundColor: "#0984e3",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              padding: "10px 0",
              transition: "all .4s",
              height: "100%",
            }}
          >
            <Box
              sx={{
                position: "relative",
                zIndex: 100,
                padding: "0 10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextField
                value={searchIABs}
                onChange={(e) => setSearchIABs(e.target.value)}
                fullWidth
                placeholder="Search"
                variant="outlined"
                sx={{
                  "& .MuiInputBase-input": {
                    background: "#fff",
                    borderRadius: "4px",
                    color: "#000",
                    fontSize: "14px",
                    padding: "8px 14px",
                  },
                }}
                inputProps={{
                  sx: {
                    "&::placeholder": {
                      color: "#000 !important",
                      opacity: "1 !important",
                      fontSize: `14px !important`,
                    },
                  },
                }}
              />
              <Tooltip title={"Collapse all"}>
                <div>
                  <IconButton
                    disabled={expandedAccordions.length === 0}
                    onClick={handleCollapseAllAccordions}
                  >
                    <IndeterminateCheckBoxIcon
                      sx={{
                        color: expandedAccordions.length === 0 ? "#95a5a6" : "white",
                      }}
                    />
                  </IconButton>
                </div>
              </Tooltip>
              <Tooltip title={"Expand all"}>
                <div>
                  <IconButton
                    disabled={expandedAccordions.length === IABAccordionIDs.length}
                    onClick={handleExpandAllAccordions}
                  >
                    <AddBoxIcon
                      sx={{
                        color:
                          expandedAccordions.length === IABAccordionIDs.length
                            ? "#95a5a6"
                            : "white",
                      }}
                    />
                  </IconButton>
                </div>
              </Tooltip>
              <MapMenuLayerCloseIconButton
                color="error"
                onClick={() => setOpenRightMainDrawer(!openRightMainDrawer)}
                sx={{
                  margin: "0 10px",
                  padding: "5px",
                  backgroundColor: "red",
                }}
              >
                <CloseIcon sx={{ fontSize: "20px" }} />
              </MapMenuLayerCloseIconButton>
            </Box>
            <ul>
              {memoizedIABOptions.map((category, index) => {
                return (
                  <CustomAccordion
                    key={IABAccordionIDs[index]}
                    expanded={expandedAccordions.includes(IABAccordionIDs[index])}
                    onChange={handleAccordionChange(IABAccordionIDs[index])}
                    sx={{
                      "& :hover": {
                        backgroundColor: expandedAccordions.includes(IABAccordionIDs[index])
                          ? ""
                          : "#055796",
                      },
                      border: "none",
                      boxShadow: "none",
                      "&.Mui-expanded": {
                        margin: "0 !important",
                      },
                      "&:not(:last-child)": {
                        borderBottom: 0,
                      },
                      "&:before": {
                        display: "none",
                      },
                      backgroundColor: "#0984e3",
                      "& .MuiAccordionSummary-root.Mui-expanded": {
                        minHeight: "0 !important",
                        background: "#055796",
                      },
                    }}
                  >
                    <AccordionSummary
                      sx={{
                        padding: "8px",
                        minHeight: "0 !important",
                        "& .MuiAccordionSummary-content": {
                          margin: "0 !important",
                          display: "flex",
                          justifyContent: "space-between",
                        },
                        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                          transformOrigin: "right",
                        },
                      }}
                      expandIcon={
                        <ExpandMoreIcon
                          sx={{
                            color: "#fff",
                            transformOrigin: "right",
                            fontSize: "1.2rem",
                            marginRight: "-10px", // Align to the right
                          }}
                        />
                      }
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "14px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        {category.icon} {category.name}
                      </Typography>
                      <Typography sx={{ color: "#fff", fontSize: "12px", marginRight: "8px" }}>
                        {category.IAB}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        padding: 0,
                        backgroundColor: "#1565c0",
                      }}
                    >
                      {category.innerOptions.map((innerOption, index) => {
                        return (
                          <MenuItem
                            onClick={() => {
                              if (selectedIABCategoryStore !== innerOption.name) {
                                setSelectedIABCategoryStore(innerOption.name);
                                // handleAddGeofence(innerOption.name, true);
                              } else {
                                setSelectedIABCategoryStore("");
                                // handleAddGeofence(innerOption.name, false);
                              }
                            }}
                            disableRipple
                            key={innerOption.name + index}
                            sx={{
                              "&.MuiMenuItem-root": {
                                paddingTop: "8px",
                                paddingBottom: "8px",
                              },
                              backgroundColor:
                                selectedIABCategoryStore === innerOption.name ? "#ffffff" : "",

                              "&:hover": {
                                backgroundColor:
                                  selectedIABCategoryStore === innerOption.name
                                    ? "whitesmoke"
                                    : "#055796",
                              },
                            }}
                          >
                            <Box
                              sx={{
                                "& .MuiSvgIcon-root": {
                                  fontSize: "20px",
                                  color: "#fff",
                                },
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "100%",
                                gap: "10px",
                                paddingLeft: "12px",
                              }}
                              key={index + innerOption.name}
                            >
                              <Typography
                                sx={{
                                  color:
                                    selectedIABCategoryStore === innerOption.name
                                      ? "#0984e3"
                                      : "#ffffff",
                                  fontSize: "14px",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "8px",
                                }}
                              >
                                {innerOption?.icon}
                                <span>{innerOption.name}</span>
                              </Typography>
                              <Typography
                                sx={{
                                  color:
                                    selectedIABCategoryStore === innerOption.name
                                      ? "#0984e3"
                                      : "#ffffff",
                                  fontSize: "12px",
                                }}
                              >
                                {innerOption.IAB}
                              </Typography>
                            </Box>
                          </MenuItem>
                        );
                      })}
                    </AccordionDetails>
                  </CustomAccordion>
                );
              })}
            </ul>
          </Box>
        </Slide>
      </Box>
    </Box>
  );
};

export default MapMenuLayerDrawerRight;

const CustomAccordion = ({ children, ...rest }: CustomAccordionProps) => {
  return (
    <Accordion {...rest} slotProps={{ transition: { unmountOnExit: true } }}>
      {children}
    </Accordion>
  );
};
