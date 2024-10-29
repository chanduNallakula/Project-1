import { produce } from "immer";
import { create } from "zustand";
import { createSelectors } from "./createSelectors";

export interface Coordintes {
  latitude: number;
  longitude: number;
  viewPort?: any;
}

interface CoordintesStore {
  myCoordinates: Coordintes;
  addCoordinates: (coordinates: Coordintes) => void;
}

const initialLocation: Coordintes = {
  latitude: 0,
  longitude: 0,
};

const useMySearchLocationPointer = create<CoordintesStore>((set) => ({
  myCoordinates: initialLocation,
  addCoordinates: (coordinates: Coordintes) => {
    set({ myCoordinates: coordinates });
  },
}));

export const useMySearchLocationPointerStore = createSelectors(useMySearchLocationPointer);
