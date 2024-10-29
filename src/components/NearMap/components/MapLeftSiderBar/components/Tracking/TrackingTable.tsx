import DrawerHeader from "@/components/Drawer/DrawerHeader";
import CustomTable from "@/components/Table/CustomTable";
import { useLeftSideDrawerStore } from "@/store/leftSideDrawerStore";
import { Stack } from "@mui/material";
import { Box } from "lucide-react";
import React from "react";
import { trackingColums } from "./tracking-table-columns";
import useTrackingStore, { trackingProps } from "@/store/trackingStore";

interface TrackingTableProps {
  setOpenMainDrawer: (open: boolean) => void;
}

export const TrackingTable = ({ setOpenMainDrawer }: TrackingTableProps) => {
  const trackingStore = useTrackingStore.use.trackings();

  const setOpenTrackingDrawerStore = useLeftSideDrawerStore.use.setTrackingDrawer();

  const setOpenAddNewTrackingDrawer = useLeftSideDrawerStore.use.setAddNewTrackingDrawer();

  return (
    <>
      <Stack gap={6}>
        <DrawerHeader
          addNewText="Add New Tracking"
          goBackText="Tracking"
          setOpenCurrentDrawer={setOpenTrackingDrawerStore}
          setOpenMainDrawer={setOpenMainDrawer}
          setOpenAddNewDrawer={setOpenAddNewTrackingDrawer}
        />
        <CustomTable tableColumns={trackingColums} tableData={trackingStore} />
      </Stack>
    </>
  );
};

export const trackingDemoData: trackingProps[] = [
  {
    campaignName: "Campaign 1",
    count: 10,
    deviceInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, culpa.",
    pixelTrackingUrl: "https://www.google.com",
    callbackUrl: "https://www.google.com",
  },
  {
    campaignName: "Campaign 2",
    count: 20,
    deviceInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, culpa.",
    pixelTrackingUrl: "https://www.google.com",
    callbackUrl: "https://www.google.com",
  },
  {
    campaignName: "Campaign 3",
    count: 30,
    deviceInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, culpa.",
    pixelTrackingUrl: "https://www.google.com",
    callbackUrl: "https://www.google.com",
  },
  {
    campaignName: "Campaign 4",
    count: 40,
    deviceInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, culpa.",
    pixelTrackingUrl: "https://www.google.com",
    callbackUrl: "https://www.google.com",
  },
  {
    campaignName: "Campaign 5",
    count: 50,
    deviceInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, culpa.",
    pixelTrackingUrl: "https://www.google.com",
    callbackUrl: "https://www.google.com",
  },
  {
    campaignName: "Campaign 6",
    count: 60,
    deviceInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, culpa.",
    pixelTrackingUrl: "https://www.google.com",
    callbackUrl: "https://www.google.com",
  },
  {
    campaignName: "Campaign 7",
    count: 70,
    deviceInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, culpa.",
    pixelTrackingUrl: "https://www.google.com",
    callbackUrl: "https://www.google.com",
  },
  {
    campaignName: "Campaign 8",
    count: 80,
    deviceInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, culpa.",
    pixelTrackingUrl: "https://www.google.com",
    callbackUrl: "https://www.google.com",
  },
  {
    campaignName: "Campaign 9",
    count: 90,
    deviceInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, culpa.",
    pixelTrackingUrl: "https://www.google.com",
    callbackUrl: "https://www.google.com",
  },
];
