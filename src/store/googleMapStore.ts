import { create } from "zustand";
import { createSelectors } from "./createSelectors";
import { produce } from "immer";
import {
  torontoCityHallCoordinates,
  torontoGeofences,
  torontoMetroPolianUniversityCoordinates,
  torontoMossParkCoordinates,
} from "@/lib/constants/googleMapDataV2";
import { createPolygonLayer } from "@/lib/helpers/googleMapHelpers";

interface DeckglPolygonModalBaseProps {
  openGeofenceForModal: boolean;
  setOpenGeofenceForModal: (show: boolean) => void;
  selectedPolygon: any;
  setSelectedPolygon: (polygon: any) => void;
}

const useDeckglPolygonModalBase = create<DeckglPolygonModalBaseProps>((set) => ({
  openGeofenceForModal: false,
  setOpenGeofenceForModal: (show: boolean) => set({ openGeofenceForModal: show }),
  selectedPolygon: null,
  setSelectedPolygon: (polygon: any) => set({ selectedPolygon: polygon }),
}));

export const useDeckglPolygonModal = createSelectors(useDeckglPolygonModalBase);

export interface GeoFenceDataProps {
  id: string;
  coordinates: { lng: number; lat: number }[];
  color: number[];
  zoom: number;
  bounds: {
    south: number;
    west: number;
    north: number;
    east: number;
  };
  center?: any;
  properties: {
    group: string;
    name: string;
    category: string;
    subCategory: string;
    city: string;
    isPublic: boolean;
    color: string;
  };
}

interface GeofenceProps {
  id: number;
  name: string;
  category: string;
  subCategory: string;
  city: string;
  isPublic: boolean;
  color: string;
  overlay: any;
  properties?: {
    [key: string]: any;
  };
}

interface addGeofencePolygonDataProps {
  polygon: any;
  overlay: any;
  properties: {
    mapZoom: number;
    mapBounds: {
      east: number;
      north: number;
      south: number;
      west: number;
    };
    [key: string]: any;
  };
}

// const initialGeofences: GeofenceProps[] = [
//   {
//     id: 1,
//     name: "Toronto City Hall",
//     category: "Law, Gov’t & Politics",
//     subCategory: "U.S. Government Resources",
//     city: "Toronto",
//     isPublic: true,
//     color: "#FF0000",
//     overlay: {
//       paths: torontoCityHallCoordinates,
//       strokeColor: "#1e1e1e",
//       strokeOpacity: 0.8,
//       strokeWeight: 2,
//       fillColor: "#FF0000",
//       fillOpacity: 0.15,
//     },
//     properties: {
//       mapZoom: 17.736499999999996,
//       mapBounds: {
//         east: -79.37729222792217,
//         north: 43.655420282592445,
//         south: 43.65117585643956,
//         west: -79.389655836669,
//       },
//     },
//   },
//   {
//     id: 2,
//     name: "Toronto MetroPolianUniversity",
//     category: "Education",
//     subCategory: "College Life",
//     city: "Toronto",
//     isPublic: true,
//     color: "#0000FF",
//     overlay: {
//       paths: torontoMetroPolianUniversityCoordinates,
//       strokeColor: "#1e1e1e",
//       strokeOpacity: 0.8,
//       strokeWeight: 2,
//       fillColor: "#0000FF",
//       fillOpacity: 0.15,
//     },
//     properties: {
//       mapZoom: 17.525999999999996,
//       mapBounds: {
//         east: -79.37193075031473,
//         north: 43.66098475026322,
//         south: 43.65607399872524,
//         west: -79.3862365476151,
//       },
//     },
//   },
//   {
//     id: 3,
//     name: "Toronto Moss Park",
//     category: "Home & Garden",
//     subCategory: "Environmental Safety",
//     city: "Toronto",
//     isPublic: true,
//     color: "#00FF00",
//     overlay: {
//       paths: torontoMossParkCoordinates,
//       strokeColor: "#1e1e1e",
//       strokeOpacity: 0.8,
//       strokeWeight: 2,
//       fillColor: "#00FF00",
//       fillOpacity: 0.15,
//     },
//     properties: {
//       mapZoom: 17.513499999999997,
//       mapBounds: {
//         east: -79.3645889317804,
//         north: 43.65709492247288,
//         south: 43.65214111498646,
//         west: -79.379019217897,
//       },
//     },
//   },
// ];

const initialGeofences: GeoFenceDataProps[] = [...torontoGeofences];

type geofenceMode = "view" | "edit" | "create" | "none";

interface GoogleMapGeofenceStore {
  geofences: GeoFenceDataProps[];
  geofenceMode: geofenceMode;
  geofenceUpdateId: string;
  setGeofenceUpdateId: (id: string) => void;
  setGeoFences: (geofence: GeoFenceDataProps) => void;
  updateGeoFence: (geofence: GeofenceProps) => void;
  setGeofenceMode: (geofenceMode: geofenceMode) => void;
  drawingManager: google.maps.drawing.DrawingManager | null;
  setDrawingManager: (drawingManager: google.maps.drawing.DrawingManager) => void;
}

interface GoogleMapDrawingOverlaysStore {
  overlays: any[];
  setOverlays: (overlays: any[]) => void;
  clearAllOverlays: () => void;
  allPolygons: any[];
  setAllPolygons: (polygon: { overlay: google.maps.Polygon; [key: string]: any }) => void;
  clearAllPolygons: () => void;
  addGeofencePolygonData: addGeofencePolygonDataProps;
  setAddGeofencePolygonData: (polygonData: addGeofencePolygonDataProps) => void;
}

interface GoogleMapPropsStore {
  mapZoomStore: number;
  setMapZoomStore: (zoom: number) => void;
}

const useGoogleMapBase = create<GoogleMapGeofenceStore>((set) => ({
  geofences: initialGeofences,
  setGeoFences: (geofence: GeoFenceDataProps) => {
    set(
      produce((state) => {
        state.geofences.push({
          ...geofence,
        });
      })
    );
  },
  updateGeoFence: (updatedGeofence: GeofenceProps) => {
    set(
      produce((state) => {
        const index = state.geofences.findIndex((g: { id: number }) => g.id === updatedGeofence.id);
        state.geofences[index] = updatedGeofence;
      })
    );
  },
  geofenceUpdateId: "",
  setGeofenceUpdateId: (id: string) => {
    set({ geofenceUpdateId: id });
  },
  geofenceMode: "none",
  setGeofenceMode: (geofenceMode: geofenceMode) => {
    set({ geofenceMode });
  },
  drawingManager: null,
  setDrawingManager: (drawingManager: google.maps.drawing.DrawingManager) => {
    set({ drawingManager });
  },
}));

export const useGoogleMapStore = createSelectors(useGoogleMapBase);

const useGoogleMapDrawingOverlaysBase = create<GoogleMapDrawingOverlaysStore>((set) => ({
  overlays: [],
  setOverlays: (overlay: any) =>
    set(
      produce((state) => {
        state.overlays.push(overlay);
      })
    ),
  clearAllOverlays: () => set({ overlays: [] }),
  allPolygons: [],
  setAllPolygons: (polygon: { overlay: google.maps.Polygon; [key: string]: any }) =>
    set(
      produce((state) => {
        state.allPolygons.push(polygon);
      })
    ),
  clearAllPolygons: () => set({ allPolygons: [] }),
  addGeofencePolygonData: {
    polygon: null,
    overlay: null,
    properties: {
      mapBounds: { east: 0, north: 0, south: 0, west: 0 },
      mapZoom: 14,
    },
  },
  setAddGeofencePolygonData: (polygonData: addGeofencePolygonDataProps) =>
    set(
      produce((state) => {
        state.addGeofencePolygonData = polygonData;
      })
    ),
}));

export const useGoogleMapDrawingOverlays = createSelectors(useGoogleMapDrawingOverlaysBase);

interface MyGroupsProps {
  id: number;
  name: string;
  description: string;
}

interface MyAudiencesProps {
  id: number;
  name: string;
  description: string;
  count: number;
}

interface MapUserDataBaseProps {
  myGroupsStore: MyGroupsProps[];
  setMyGroupsStore: (group: MyGroupsProps) => void;
  selectedGroup: string;
  setSelectedGroup: (group: string) => void;
  myAudiencesStore: MyAudiencesProps[];
  setMyAudiencesStore: (audiences: MyAudiencesProps[]) => void;
  selectedGeofenceForModal: string;
  setSelectedGeofenceForModal: (geofence: string) => void;
}

const initialMyGroups: MyGroupsProps[] = [
  {
    id: 1,
    name: "Golfers",
    description: "A group for golfing enthusiasts.",
  },
  {
    id: 2,
    name: "Movie Halls",
    description: "Group of people who love watching movies in theaters.",
  },
  {
    id: 3,
    name: "Stadiums",
    description: "Fans of various sports and stadium events.",
  },
  {
    id: 4,
    name: "Gyms",
    description: "People who frequently visit gyms and fitness centers.",
  },
];

const initialMyAudiences: MyAudiencesProps[] = [
  {
    id: 1,
    name: "Movie Goers-Toronto",
    description: "Toronto-based movie enthusiasts.",
    count: 342,
  },
  {
    id: 2,
    name: "IKEA-Toronto",
    description: "Fans of IKEA products in Toronto.",
    count: 223,
  },
  {
    id: 3,
    name: "Athletes-Toronto",
    description: "Athletes and sports enthusiasts in Toronto.",
    count: 566,
  },
  {
    id: 4,
    name: "Fitness Enthusiasts",
    description: "Group of people passionate about fitness.",
    count: 193,
  },
];

const useMapUserDataBase = create<MapUserDataBaseProps>((set) => ({
  myGroupsStore: initialMyGroups,
  setMyGroupsStore: (group: MyGroupsProps) => {
    set(
      produce((state) => {
        state.myGroupsStore.push(group);
      })
    );
  },
  selectedGroup: "",
  setSelectedGroup: (group: string) => set({ selectedGroup: group }),
  myAudiencesStore: initialMyAudiences,
  setMyAudiencesStore: (audiences: MyAudiencesProps[]) => {
    set(
      produce((state) => {
        state.myAudiencesStore = audiences;
      })
    );
  },
  selectedGeofenceForModal: "",
  setSelectedGeofenceForModal: (geofence: string) => set({ selectedGeofenceForModal: geofence }),
}));

export const useMapUserData = createSelectors(useMapUserDataBase);

const useGoogleMapPropsBase = create<GoogleMapPropsStore>((set) => ({
  mapZoomStore: 16.2505,
  setMapZoomStore: (zoom: number) => set({ mapZoomStore: zoom }),
}));

export const useGoogleMapProps = createSelectors(useGoogleMapPropsBase);

interface DeckglLayersBaseProps {
  polygonLayersStore: any[];
  setPolygonLayersStore: (
    geofences: GeoFenceDataProps[],
    visibility?: string,
    toggleModal?: () => void
  ) => void;
}
const initialPolygonLayers = initialGeofences.map((geofence) => {
  return createPolygonLayer(geofence);
});

const useDeckglLayersBase = create<DeckglLayersBaseProps>((set) => ({
  polygonLayersStore: initialPolygonLayers,
  setPolygonLayersStore: (
    geofences: GeoFenceDataProps[],
    visibility?: string,
    openModal?: (id: string) => void
  ) =>
    set(
      produce((state) => {
        state.polygonLayersStore = geofences.map((geofence) =>
          createPolygonLayer(geofence, visibility, openModal)
        );
      })
    ),
}));

export const useDeckglLayers = createSelectors(useDeckglLayersBase);

interface MapRightSideDrawerProps {
  selectedIABCategory: string;
  setSelectedIABCategory: (category: string) => void;
}

const useMapRightSideDrawerBase = create<MapRightSideDrawerProps>((set) => ({
  selectedIABCategory: "",
  setSelectedIABCategory: (category: string) => set({ selectedIABCategory: category }),
}));

export const useMapRightSideDrawerStore = createSelectors(useMapRightSideDrawerBase);
