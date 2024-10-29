"use client";

import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ReplyRounded from "@mui/icons-material/ReplyRounded";
import AsyncSelect from "react-select/async";

import citiMedialogoBlack from "../../../../assets/citimedia-dark-logo.png";
import MapLeftSideBar from "../MapLeftSiderBar/MapLeftSideBar";
import MapRightSideBar from "../MapRightSideBar/MapRightSideBar";
import { MapMenuLayerAbsoluteContainer } from "./MapMenuLayer.style";
import Image from "next/image";
import { Coordintes, useMySearchLocationPointerStore } from "@/store/mapStore";
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";

interface MapMenuLayerProps {
  children?: JSX.Element | React.ReactNode;
}

export const MapMenuLayer = ({ children }: MapMenuLayerProps) => {
  const [openRightDrawer, setOpenRightDrawer] = useState(false);
  const [searchValue, setSearchValue] = useState("test");
  const addCoordinates = useMySearchLocationPointerStore((state) => state.addCoordinates);

  const dashboardDrawerStore = useLeftSideDrawerStore.use.drawer();
  const setDashboardDrawerStore = useLeftSideDrawerStore.use.setDrawer();

  const handleAddCordinates = useCallback(
    (coordinates: Coordintes) => {
      addCoordinates({
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        viewPort: coordinates.viewPort,
      });
    },
    [addCoordinates]
  );
  const theme = useTheme();

  const debounce = (func: any, delay: number) => {
    let debounceTimer: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const map = useMap();
  const places = useMapsLibrary("places");

  const handleGetPlaces = useCallback(
    (place_id: string) => {
      if (!map || !places) return;

      const PlacesService = new places.PlacesService(map);

      PlacesService.getDetails({ placeId: place_id, fields: ["geometry"] }, (place, status) => {
        if (status === places.PlacesServiceStatus.OK) {
          handleAddCordinates({
            latitude: place?.geometry?.location?.lat() || 0,
            longitude: place?.geometry?.location?.lng() || 0,
            viewPort: place?.geometry?.viewport,
          });
        }
      });
    },
    [map, places, handleAddCordinates]
  );

  const loadOptions = useCallback(
    async (inputValue: string, callback: (options: any) => void): Promise<any> => {
      try {
        if (!map || !places) return;
        const AutocompleteService = new places.AutocompleteService();
        AutocompleteService.getQueryPredictions;

        const request = {
          input: inputValue,
          fields: ["place_id"],
        };

        return new Promise((resolve) => {
          AutocompleteService.getPlacePredictions(request, (results, status) => {
            if (status === places.PlacesServiceStatus.OK) {
              const options = results?.map((result) => ({
                value: result.place_id,
                label: result.description,
              }));
              resolve(options);
              callback(options);
            } else {
              resolve([]);
              callback([]);
            }
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    [map, places]
  );

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 30,
      }}
    >
      <MapMenuLayerAbsoluteContainer
        sx={{
          left: 0,
          marginTop: "10px",
        }}
      >
        <MapLeftSideBar />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            marginLeft: {
              xs: 0,
              md: "5px",
            },
          }}
        >
          <IconButton
            onClick={() => {
              setDashboardDrawerStore(true);
              setOpenRightDrawer(false);
            }}
            sx={{
              padding: "5px",
              "&.MuiButtonBase-root": {
                backgroundColor: "#0984e3",
              },
              "&.MuiButtonBase-root .MuiSvgIcon-root": {
                color: "#fff",
              },

              "&.MuiButtonBase-root:hover": {
                backgroundColor: "#075896",
              },
            }}
          >
            <MenuRoundedIcon sx={{ fontSize: "35px", color: "#fff" }} />
          </IconButton>

          <AsyncSelect
            instanceId="search"
            cacheOptions
            loadOptions={loadOptions}
            defaultOptions
            placeholder="Toronto, ON"
            onChange={(selectedOption: any, actionMeta) => {
              if (actionMeta.action === "select-option") {
                debounce(handleGetPlaces(selectedOption.value), 5000);
              }
            }}
            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
            noOptionsMessage={(obj) => {
              if (obj.inputValue.length !== 0) {
                return "No results found";
              } else {
                return "Search for a location...";
              }
            }}
            styles={{
              control: (styles) => ({
                ...styles,
                fontFamily: "Roboto, sans-serif",
                fontSize: "14px",
                fontWeight: "400",
                backgroundColor: "#fff",
                width: "200px",
                borderRadius: "5px",
                border: "none",
                boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)",
              }),
              option: (styles, { data, isDisabled, isFocused, isSelected }) => {
                return {
                  ...styles,
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  backgroundColor: isFocused ? theme.palette.primary.main : "#fff",
                  color: isFocused ? "#fff" : "#000",
                  cursor: "pointer",
                  hover: {
                    backgroundColor: "red",
                  },
                };
              },
              noOptionsMessage(base, props) {
                return {
                  ...base,
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#000",
                };
              },
            }}
          />
          <IconButton
            sx={{
              padding: "5px",
              "&.MuiButtonBase-root:hover": {
                backgroundColor: "#fff",
              },
              "&.MuiButtonBase-root:hover .MuiSvgIcon-root": {
                color: "#0984e3",
              },
              color: "#fff",
              display: {
                xs: "none",
                md: "flex",
              },
              visibility: {
                xs: "hidden",
                md: "visible",
              },
            }}
          >
            <ReplyRounded
              sx={{
                fontSize: "35px",
                WebkitTransform: "scaleX(-1)",
                transform: "scaleX(-1)",
              }}
            />
          </IconButton>
        </Box>
      </MapMenuLayerAbsoluteContainer>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <MapRightSideBar
          openRightMainDrawer={openRightDrawer}
          setOpenRightMainDrawer={setOpenRightDrawer}
        />
      </Box>
    </Box>
  );
};

export default MapMenuLayer;
