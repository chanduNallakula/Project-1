import { produce } from "immer";
import { create } from "zustand";
import { createSelectors } from "./createSelectors";

export interface trackingProps {
  campaignName: string;
  count: number;
  deviceInfo: string;
  pixelTrackingUrl: string;
  callbackUrl: string;
}

export interface tarckingStoreProps {
  trackings: trackingProps[];
  addTracking: (tracking: trackingProps) => void;
}

const intialState: trackingProps[] = [
  {
    campaignName: "Hyundai Offer",
    count: 10,
    deviceInfo: "Hyundai car offer",
    pixelTrackingUrl: "http://tracking-geosaga.citimedia.com/pixel-tracking-generate?cId=1",
    callbackUrl:
      "http://tracking-geosaga.citimedia.com/callback-tracking-generate?cId=2&tUrl=http://tracking-geosaga.citimedia.com/users/",
  },
  {
    campaignName: "Golf Tournament",
    count: 20,
    deviceInfo: "Golf Tournament campaign",
    pixelTrackingUrl: "http://tracking-geosaga.citimedia.com/pixel-tracking-generate?cId=2",
    callbackUrl:
      "http://tracking-geosaga.citimedia.com/callback-tracking-generate?cId=2&tUrl=http://tracking-geosaga.citimedia.com/users/",
  },
  {
    campaignName: "Winter Sale",
    count: 30,
    deviceInfo: "Winter Sale campaign",
    pixelTrackingUrl: "http://tracking-geosaga.citimedia.com/pixel-tracking-generate?cId=3",
    callbackUrl:
      "http://tracking-geosaga.citimedia.com/callback-tracking-generate?cId=2&tUrl=http://tracking-geosaga.citimedia.com/users/",
  },
];

const useTrackingStoreBase = create<tarckingStoreProps>((set) => ({
  trackings: intialState,
  addTracking: (tracking: trackingProps) => {
    set(
      produce((state) => {
        state.trackings.push(tracking);
      })
    );
  },
}));

const useTrackingStore = createSelectors(useTrackingStoreBase);

export default useTrackingStore;
