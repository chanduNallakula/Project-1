import { create } from "zustand";
import { createSelectors } from "./createSelectors";

interface geofencesDrawerBaseProps {
  geofencesDrawer: boolean;
  setGeofencesDrawer: (geofencesDrawer: boolean) => void;
  addNewGeofencesDrawer: boolean;
  setAddNewGeofencesDrawer: (addNewGeofencesDrawer: boolean) => void;
}

interface campaignDrawerBaseProps {
  myCampaignsDrawer: boolean;
  setMyCampaignsDrawer: (myCampaignsDrawer: boolean) => void;
  addNewCampaignDrawer: boolean;
  setAddNewCampaignDrawer: (addNewCampaignDrawer: boolean) => void;
  editCampaignDrawer: boolean;
  setEditCampaignDrawer: (editCampaignDrawer: boolean) => void;
  selectedCampaign: number | null;
  setSelectedCampaign: (selectedCampaign: number | null) => void;
}

interface trackingDrawerBaseProps {
  trackingDrawer: boolean;
  setTrackingDrawer: (trackingDrawer: boolean) => void;
  addNewTrackingDrawer: boolean;
  setAddNewTrackingDrawer: (addNewTrackingDrawer: boolean) => void;
}

interface groupDrawerBaseProps {
  groupDrawer: boolean;
  setGroupDrawer: (groupDrawer: boolean) => void;
  addNewGroupDrawer: boolean;
  setAddNewGroupDrawer: (addNewGroupDrawer: boolean) => void;
  editGroupDrawer: boolean;
  setEditGroupDrawer: (editGroupDrawer: boolean) => void;
  selectedGroup: number | null;
  setSelectedGroup: (selectedGroup: number | null) => void;
}

interface audienceDrawerBaseProps {
  audienceDrawer: boolean;
  setAudienceDrawer: (audienceDrawer: boolean) => void;
  addNewAudienceDrawer: boolean;
  setAddNewAudienceDrawer: (addNewAudienceDrawer: boolean) => void;
}

interface LeftSideDrawerBaseProps
  extends geofencesDrawerBaseProps,
    campaignDrawerBaseProps,
    trackingDrawerBaseProps,
    groupDrawerBaseProps,
    audienceDrawerBaseProps {
  drawer: boolean;
  setDrawer: (drawer: boolean) => void;

  createCampagins2View: string;
  setCreatetMyCampagins2View: (createCampagins2View: string) => void;
}

const leftSideDrawerBase = create<LeftSideDrawerBaseProps>((set) => ({
  drawer: false,
  setDrawer: (drawer: boolean) => {
    set({ drawer });
  },
  geofencesDrawer: false,
  setGeofencesDrawer: (geofencesDrawer: boolean) => {
    set({ geofencesDrawer });
  },
  addNewGeofencesDrawer: false,
  setAddNewGeofencesDrawer: (addNewGeofencesDrawer: boolean) => {
    set({ addNewGeofencesDrawer });
  },
  myCampaignsDrawer: false,
  setMyCampaignsDrawer: (myCampaignsDrawer: boolean) => {
    set({
      myCampaignsDrawer,
    });
  },
  addNewCampaignDrawer: false,
  setAddNewCampaignDrawer: (addNewCampaignDrawer: boolean) => {
    set({ addNewCampaignDrawer });
  },
  editCampaignDrawer: false,
  setEditCampaignDrawer: (editCampaignDrawer: boolean) => {
    set({ editCampaignDrawer });
  },
  selectedCampaign: null,
  setSelectedCampaign: (selectedCampaign: number | null) => {
    set({ selectedCampaign });
  },

  groupDrawer: false,
  setGroupDrawer: (groupDrawer: boolean) => {
    set({ groupDrawer });
  },
  addNewGroupDrawer: false,
  setAddNewGroupDrawer: (addNewGroupDrawer: boolean) => {
    set({ addNewGroupDrawer });
  },
  editGroupDrawer: false,
  setEditGroupDrawer: (editGroupDrawer: boolean) => {
    set({ editGroupDrawer });
  },
  selectedGroup: null,
  setSelectedGroup: (selectedGroup: number | null) => {
    set({ selectedGroup });
  },

  audienceDrawer: false,
  setAudienceDrawer: (audienceDrawer: boolean) => {
    set({ audienceDrawer });
  },
  addNewAudienceDrawer: false,
  setAddNewAudienceDrawer: (addNewAudienceDrawer: boolean) => {
    set({ addNewAudienceDrawer });
  },

  trackingDrawer: false,
  setTrackingDrawer: (trackingDrawer: boolean) => {
    set({ trackingDrawer });
  },
  addNewTrackingDrawer: false,
  setAddNewTrackingDrawer: (addNewTrackingDrawer: boolean) => {
    set({ addNewTrackingDrawer });
  },
  createCampagins2View: "Basic Settings",
  setCreatetMyCampagins2View: (createCampagins2View: string) => {
    set({ createCampagins2View });
  },
}));

export const useLeftSideDrawerStore = createSelectors(leftSideDrawerBase);
