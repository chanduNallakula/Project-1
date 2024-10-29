"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import * as turf from "@turf/turf";
import { AdvancedMarker, Map, useMap } from "@vis.gl/react-google-maps";
import { PolygonLayer, ScatterplotLayer, TextLayer } from "@deck.gl/layers";

import Box from "@mui/material/Box";

import DrawingManager from "./GoogleMapDrawing/GoogleDrawingManager";
import GoogleMapOverlayTimeLine from "./GoogleMapOverlayTimeLine";
import MapMenuLayer from "@/components/NearMap/components/MapMenuLayer/MapMenuLayer";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import { useMySearchLocationPointerStore } from "@/store/mapStore";

// import networkSearch from "../../../assets/Search Network.svg";
import SateliiteIcon from "../../../assets/satelite_icon.png";
import MapIcon from "../../../assets/map_icon.png";

import {
  Movies_Cineplex_Cinemas_Yonge,
  Movies_Imagine_Cinemas,
  Movies_Imagine_Cinemas_Carlton_Cinema,
  Movies_Jackman_Hall,
  Movies_ScotiabankTheatre_Toronto,
  Movies_TIFF_Lightbox,
  coffeeDineenCoffeeCo,
  coffeeGoldstruckCoffeeatDowntown,
  coffeeMosMosCoffee,
  coffeePilotCoffeeRoasters,
  coffeeRCCoffeeRoboCafe,
  coffeeSecondCupCafé,
  newyorkCityHallCoordinates,
  newyorkColumbusPark,
  newyorkStarbucks,
  torontoCityHallCoordinates,
  torontoGeofenceCoordinates,
  torontoGeofences,
  torontoMetroPolianUniversityCoordinates,
  torontoMossParkCoordinates,
  torontoScatterplotData,
} from "@/lib/constants/googleMapDataV2";
import {
  createPolygonLayer,
  createScatterplotLayer,
  createTextLayer,
  filteredPolygonCoordinates,
  generateRandomCoordinatesInsidePolygon,
  getCenterOfGeofence,
} from "@/lib/helpers/googleMapHelpers";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Modal,
  Paper,
  Stack,
  Tooltip,
} from "@mui/material";
import DeckGLOverlay from "./Deckgl/DeckglOverlay";

import { RgbaStringColorPicker } from "react-colorful";
import { addDebounce, hexToRgbaArray, rgbaStringToColorSet } from "@/lib/utils/helper";
import {
  useDeckglLayers,
  useDeckglPolygonModal,
  useGoogleMapProps,
  useGoogleMapStore,
  useMapRightSideDrawerStore,
  useMapUserData,
} from "@/store/googleMapStore";
import AddAudienceModalTable from "@/components/Common/AddAudienceModalTable";
import Image from "next/image";

const GoogleMap = () => {
  const mapZoomStore = useGoogleMapProps.use.mapZoomStore();
  const setMapZoomStore = useGoogleMapProps.use.setMapZoomStore();

  const visible = "true";

  const [sateliteView, setSateliteView] = useState(false);

  const openAddAudienceModalStore = useDeckglPolygonModal.use.openGeofenceForModal();
  const setOpenAddAudienceModalStore = useDeckglPolygonModal.use.setOpenGeofenceForModal();

  // const [torontoPolygonLayers, setTorontoPolygonLayers] = useState<any[]>(
  //   torontoGeofences.map((geofence) => {
  //     return createPolygonLayer(geofence);
  //   })
  // );

  const geofences = useGoogleMapStore.use.geofences();
  const polygonLayersStore = useDeckglLayers.use.polygonLayersStore();
  const setPolygonLayersStore = useDeckglLayers.use.setPolygonLayersStore();

  const randomPointsInsideToronto = useMemo(() => {
    return generateRandomCoordinatesInsidePolygon(torontoGeofenceCoordinates, 2000);
  }, []);

  const [torontoScatterPointsData, setTorontoScatterPointsData] =
    useState(randomPointsInsideToronto);

  const [torontoScatterplotLayers, setTorontoScatterplotLayers] = useState<any[]>([
    createScatterplotLayer({ ...torontoScatterplotData, coordinates: randomPointsInsideToronto }),
  ]);

  const selectedGroupStore = useMapUserData.use.selectedGroup();
  const setSelectedGroupStore = useMapUserData.use.setSelectedGroup();

  const selectedIABCategoryStore = useMapRightSideDrawerStore.use.selectedIABCategory();

  const memoizedTorontoGeofenceCounts = useMemo(() => {
    // console.log("selectedIABCategoryStore", selectedIABCategoryStore);
    // console.log("selectedGroupStore", selectedGroupStore);
    const geofenceExistsForSubCategory = geofences.some((geofence) => {
      return geofence.properties.subCategory === selectedIABCategoryStore;
    });

    const geofenceExistsForGroup = geofences.some((geofence) => {
      return geofence.properties.group === selectedGroupStore;
    });

    if (selectedIABCategoryStore !== "" && geofenceExistsForSubCategory) {
      const filteredGeofences = geofences.filter(
        (geofence) => selectedIABCategoryStore === geofence.properties.subCategory
      );

      // if (selectedGroupStore !== "") {
      //   const filteredGeofencesByGroup = geofences.filter(
      //     (geofence) => selectedGroupStore === geofence.properties.group
      //   );
      //   return filteredGeofencesByGroup.map((geofence) => {
      //     return {
      //       id: geofence.id,
      //       inCount: inBounds2(randomPointsInsideToronto, geofence.coordinates)?.length,
      //       text: geofence.properties.name,
      //       center: getCenterOfGeofence(filteredPolygonCoordinates(geofence.coordinates)),
      //     };
      //   });
      // }

      return filteredGeofences.map((geofence) => {
        return {
          id: geofence.id,
          inCount: inBounds2(randomPointsInsideToronto, geofence.coordinates)?.length,
          text: geofence.properties.name,
          center: getCenterOfGeofence(filteredPolygonCoordinates(geofence.coordinates)),
        };
      });
    } else if (selectedGroupStore !== "" && geofenceExistsForGroup) {
      const filteredGeofences = geofences.filter(
        (geofence) => selectedGroupStore === geofence.properties.group
      );
      return filteredGeofences.map((geofence) => {
        return {
          id: geofence.id,
          inCount: inBounds2(randomPointsInsideToronto, geofence.coordinates)?.length,
          text: geofence.properties.name,
          center: getCenterOfGeofence(filteredPolygonCoordinates(geofence.coordinates)),
        };
      });
    } else {
      return geofences.map((geofence) => {
        return {
          id: geofence.id,
          inCount: inBounds2(randomPointsInsideToronto, geofence.coordinates)?.length,
          text: geofence.properties.name,
          center: getCenterOfGeofence(filteredPolygonCoordinates(geofence.coordinates)),
        };
      });
    }
  }, [selectedGroupStore, selectedIABCategoryStore, geofences, randomPointsInsideToronto]);

  useEffect(() => {
    // console.log("main cluprit");
    setTorontoGeofenceCounts(memoizedTorontoGeofenceCounts);
    // console.log("memoizedTorontoGeofenceCounts", memoizedTorontoGeofenceCounts);
  }, [selectedGroupStore, memoizedTorontoGeofenceCounts, geofences]);

  const [torontoGeofenceCounts, setTorontoGeofenceCounts] = useState([
    ...memoizedTorontoGeofenceCounts,
  ]);

  // console.log("torontoGeofenceCounts", torontoGeofenceCounts);

  const [torontoTextLayer, setTorontoTextLayer] = useState<any[]>([
    createTextLayer(torontoGeofenceCounts),
  ]);

  useEffect(() => {
    // console.log("shoudl");
    setTorontoTextLayer([createTextLayer(torontoGeofenceCounts)]);
  }, [geofences, torontoGeofenceCounts, polygonLayersStore]);

  const [colorset, setColorset] = useState("#000000");

  // useEffect(() => {
  //   const updateLayerColor = () => {
  //     const updatedGeofences = geofences.map((geofence) => {
  //       if (geofence.id === "torontoMetroPolitanUniversity") {
  //         console.log("color", colorset);
  //         console.log(hexToRgbaArray(colorset));
  //         let updatedGeofence = { ...geofence, color: rgbaStringToColorSet(colorset) };
  //         return updatedGeofence;
  //       }
  //       return geofence;
  //     });
  //     setPolygonLayersStore(updatedGeofences);
  //   };
  //   // addDebounce(updateLayerColor, 0)();
  //   updateLayerColor();
  // }, [colorset, geofences, setPolygonLayersStore]);

  const map = useMap();
  const position = { lat: 43.65535173975895, lng: -79.37616302044849 };
  const searchCoordinates = useMySearchLocationPointerStore.use.myCoordinates();

  // const [newYorkScatterPointsData, setNewYorkScatterPointsData] = useState(
  //   generateRandomCoordinatesInNY(300)
  // );

  // const [newYorkGeofenceCounts, setNewYorkGeofenceCounts] = useState([
  //   {
  //     inCount: inBounds(newYorkScatterPointsData, newyorkCityHallCoordinates).length,
  //     outCount: 0,
  //     text: "City Hall",
  //     center: getCenterOfGeofence(newyorkCityHallCoordinates),
  //   },
  //   {
  //     inCount: inBounds(newYorkScatterPointsData, newyorkColumbusPark).length,
  //     outCount: 0,
  //     text: "Columbus Park",
  //     center: getCenterOfGeofence(newyorkColumbusPark),
  //   },
  //   {
  //     inCount: inBounds(newYorkScatterPointsData, newyorkStarbucks).length,
  //     outCount: 0,
  //     text: "Starbucks",
  //     center: getCenterOfGeofence(newyorkStarbucks),
  //   },
  // ]);

  useEffect(() => {
    if (!map || !searchCoordinates) return;

    if (searchCoordinates?.viewPort) {
      map.fitBounds(searchCoordinates?.viewPort);
    }
  }, [map, searchCoordinates]);

  const setSelectedGeofenceForModalStore = useMapUserData.use.setSelectedGeofenceForModal();

  const handleOpenAddAudienceModal = useCallback(
    (id?: string) => {
      const geoFenceName = geofences.find((geofence) => geofence.id === id)?.properties.name;
      setOpenAddAudienceModalStore(true);
      setSelectedGeofenceForModalStore(geoFenceName || "");
    },
    [geofences, setOpenAddAudienceModalStore, setSelectedGeofenceForModalStore]
  );
  useEffect(() => {
    setPolygonLayersStore(geofences, visible, handleOpenAddAudienceModal);
  }, [geofences, handleOpenAddAudienceModal, setPolygonLayersStore]);

  useEffect(() => {
    setSelectedGroupStore("");
  }, [setSelectedGroupStore]);

  const debouncedTorontoPoints = addDebounce(generateRandomColoredData2, 300);

  function generateRandomColoredData2() {
    const randomData = generateRandomCoordinatesInsidePolygon(torontoGeofenceCoordinates, 2000);

    const inboundsData: any[] = [];
    const inboundsLength: any[] = [];
    const inboundsColor: any[] = [];

    geofences.forEach((geofence) => {
      inboundsData.push(inBounds2(randomData, geofence.coordinates));
      inboundsLength.push(inBounds2(randomData, geofence.coordinates)?.length);
      inboundsColor.push(geofence.color);
    });

    setTorontoGeofenceCounts((prev) => {
      return prev.map((data, index) => {
        return {
          ...data,
          inCount: prev[index].inCount + inboundsLength[index],
        };
      });
    });

    const coloredData = randomData.map((data, index) => {
      let assignedColor = torontoScatterPointsData[index].color; // Default color

      for (let i = 0; i < inboundsData.length; i++) {
        if (
          inboundsData[i].some(
            (x: any[]) => x[0] === data.coordinates[0] && x[1] === data.coordinates[1]
          )
        ) {
          assignedColor = inboundsColor[i];
          break;
        }
      }

      return {
        id: index,
        coordinates: data.coordinates,
        color: assignedColor,
      };
    });

    setTorontoScatterPointsData(coloredData);
    setTorontoScatterplotLayers([
      createScatterplotLayer({ ...torontoScatterplotData, coordinates: coloredData }),
    ]);
  }

  // function generateRandomColoredData() {
  //   const randomData = generateRandomCoordinatesInNY(300);

  //   const inboundsData: any[] = [];

  //   const insideCityHall = inBounds(randomData, newyorkCityHallCoordinates);
  //   const insideColumbusPark = inBounds(randomData, newyorkColumbusPark);
  //   const insideStarbucks = inBounds(randomData, newyorkStarbucks);

  //   inboundsData.push(insideCityHall);
  //   inboundsData.push(insideColumbusPark);
  //   inboundsData.push(insideStarbucks);

  //   setNewYorkGeofenceCounts((prev) => {
  //     return prev.map((data, index) => {
  //       return {
  //         ...data,
  //         inCount: prev[index] + inboundsData[index].length,
  //         outCount: data.inCount + data.outCount,
  //       };
  //     });
  //   });

  //   const coloredData = randomData.map((data, index) => {
  //     const cityHalllColor = [230, 126, 34];
  //     const columbusParkColor = [9, 132, 227];
  //     const starBucksColor = [142, 68, 173];

  //     // if the point is in city hall geofence
  //     if (inboundsData[0].some((x: any[]) => x[0] === data.coordinates[0])) {
  //       return {
  //         id: index,
  //         coordinates: data.coordinates,
  //         color: cityHalllColor,
  //       };
  //     }
  //     // if the point is in columbus park geofence
  //     else if (inboundsData[1].some((x: any[]) => x[0] === data.coordinates[0])) {
  //       return {
  //         id: index,
  //         coordinates: data.coordinates,
  //         color: columbusParkColor,
  //       };
  //     }
  //     // if the point is in starbucks geofence
  //     else if (inboundsData[2].some((x: any[]) => x[0] === data.coordinates[0])) {
  //       return {
  //         id: index,
  //         coordinates: data.coordinates,
  //         color: starBucksColor,
  //       };
  //     }
  //     // if the point is not in any of the geofences
  //     else {
  //       return {
  //         id: index,
  //         coordinates: data.coordinates,
  //         color: newYorkScatterPointsData[index].color,
  //       };
  //     }
  //   });

  //   setNewYorkScatterPointsData(coloredData);
  // }

  function generateRandomCoordinatesInNY(n: number) {
    const minLongitude = -73.99402089296234;
    const maxLongitude = -74.01263038658126;
    const minLatitude = 40.708477091917494;
    const maxLatitude = 40.71915945146123;

    const coordinates = [];

    for (let i = 0; i < n; i++) {
      const randomLongitude = Math.random() * (maxLongitude - minLongitude) + minLongitude;
      const randomLatitude = Math.random() * (maxLatitude - minLatitude) + minLatitude;

      coordinates.push({
        id: i,
        coordinates: [randomLongitude, randomLatitude],
        color: [255, 255, 255],
      });
    }

    return coordinates;
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 61px)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translate(0, -50%)",
          zIndex: 1000,
        }}
      >
        {/* {openAddAudienceModalStore && (
          <RgbaStringColorPicker color={colorset} onChange={(color) => setColorset(color)} />
        )} */}
        {/* <Button
          variant="contained"
          onClick={() => {
            setOpenAddAudienceModalStore(!open);
            console.log("zoom", map?.getZoom());
            console.log("bounds", map?.getBounds()?.toJSON());
            console.log("center", "lat:", map?.getCenter()?.lat(), "lng:", map?.getCenter()?.lng());
            const hidden = geofences.map((geofence) => {
              return {
                ...geofence,
                overlay: null,
              };
            });
            // console.log("viewport", map?.getBounds()?.toJSON());
            // map?.setCenter({ lat: 43.65351041955164, lng: -79.38379203985 });
            // console.log(
            //   getCenterOfGeofence(filteredPolygonCoordinates(torontoCityHallCoordinates))
            // );
          }}
        >
          Click
        </Button> */}
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          left: 10,
          zIndex: 1000,
          cursor: "pointer",
        }}
      >
        <Tooltip arrow title={`Switch to ${sateliteView ? "Map" : "Satelite"} view`}>
          <Paper
            onClick={() => {
              if (map) {
                setSateliteView(!sateliteView);
              }
            }}
            sx={{
              height: "60px",
              width: "60px",
              backgroundColor: "transparent",
              userSelect: "none",
            }}
          >
            <Image
              style={{
                borderRadius: "10px",
                border: "2px solid #ffffff",
              }}
              fill
              src={sateliteView ? MapIcon.src : SateliiteIcon.src}
              alt="Map terrain toggle"
            />
          </Paper>
        </Tooltip>
      </Box>
      <MapMenuLayer />
      <GoogleMapOverlayTimeLine changeData={debouncedTorontoPoints} />
      <Map
        zoomControl={false}
        mapTypeControl={false}
        fullscreenControl={false}
        streetViewControl={false}
        defaultCenter={position}
        defaultZoom={mapZoomStore}
        mapTypeId={sateliteView ? "satellite" : "roadmap"}
        // zoom={mapZoomStore}
        // onZoomChanged={(e) => {
        //   setMapZoomStore(map?.getZoom() || 15);
        // }}
        mapId={process.env.NEXT_PUBLIC_GOOLE_MAPS_MAPID}
      >
        <DrawingManager />
        <DeckGLOverlay layers={[polygonLayersStore, torontoScatterplotLayers, torontoTextLayer]} />
        <AdvancedMarker
          position={{
            lat: searchCoordinates.latitude,
            lng: searchCoordinates.longitude,
          }}
        />
      </Map>
      <Modal
        sx={{
          "&:focus": {
            outline: "none !important",
          },
          m: 0,
          p: 0,
        }}
        open={openAddAudienceModalStore}
        onClose={() => {
          setOpenAddAudienceModalStore(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddAudienceModalTable />
        </Box>
      </Modal>
    </Box>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default GoogleMap;

function inBounds(areaCoordinates: any[], polygonCoordinates: any[]) {
  const points = turf.points(areaCoordinates.map((data) => data.coordinates));
  const searchWithinPolygon = turf.polygon([polygonCoordinates]);

  const ptsWithinGeofence = turf.pointsWithinPolygon(points, searchWithinPolygon);
  return ptsWithinGeofence.features.map((feature) => feature?.geometry?.coordinates);
}

function inBounds2(areaCoordinates: any[], polygonCoordinates: { lng: number; lat: number }[]) {
  try {
    const points = turf.points(areaCoordinates.map((data) => data.coordinates));
    const _polygonCoordinates = filteredPolygonCoordinates(polygonCoordinates);
    const searchWithinPolygon = turf.polygon([_polygonCoordinates]);
    const ptsWithinGeofence = turf.pointsWithinPolygon(points, searchWithinPolygon);
    return ptsWithinGeofence.features.map((feature) => feature?.geometry?.coordinates);
  } catch (error) {
    console.log("error in inBounds2", error);
  }
}
