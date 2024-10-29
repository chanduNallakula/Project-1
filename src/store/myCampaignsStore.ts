import { produce } from "immer";
import { create } from "zustand";
import { createSelectors } from "./createSelectors";

interface CampaignStore {
  myCampaigns: Campaign[];
  addCampaign: (campaign: Campaign) => void;
}

interface Campaign {
  goalOptions?: {
    campaignName: string;
    goal: string;
  };
  sno?: number;
  campaignName?: string;
  audienceGroups: string[];
  numberOfGeofences?: number;
  numberOfDevices?: number;
  status?: string;
}

const initialCampaigns: Campaign[] = [
  {
    sno: 1,
    campaignName: "Hyundai Offer",
    audienceGroups: ["Cab Pool", "Go group"],
    numberOfGeofences: 46,
    numberOfDevices: 45000,
    status: "Completed",
  },
  {
    sno: 2,
    campaignName: "Golf Tournament",
    audienceGroups: ["Golf Clubs"],
    numberOfGeofences: 86,
    numberOfDevices: 25000,
    status: "Running",
  },
  {
    sno: 3,
    campaignName: "Winter Sale",
    audienceGroups: ["Local Shoppers", "Online Customers"],
    numberOfGeofences: 30,
    numberOfDevices: 35000,
    status: "Completed",
  },
  {
    sno: 4,
    campaignName: "Summer Festival",
    audienceGroups: ["Outdoor Enthusiasts"],
    numberOfGeofences: 60,
    numberOfDevices: 40000,
    status: "Running",
  },
  {
    sno: 5,
    campaignName: "Tech Expo",
    audienceGroups: ["Tech Enthusiasts", "Startups"],
    numberOfGeofences: 40,
    numberOfDevices: 28000,
    status: "Running",
  },
  {
    sno: 6,
    campaignName: "Back to School",
    audienceGroups: ["Parents", "Students"],
    numberOfGeofences: 55,
    numberOfDevices: 30000,
    status: "Completed",
  },
  {
    sno: 7,
    campaignName: "Music Concert",
    audienceGroups: ["Music Lovers"],
    numberOfGeofences: 70,
    numberOfDevices: 38000,
    status: "Running",
  },
  {
    sno: 8,
    campaignName: "Food Festival",
    audienceGroups: ["Foodies"],
    numberOfGeofences: 90,
    numberOfDevices: 47000,
    status: "Completed",
  },
  {
    sno: 9,
    campaignName: "Holiday Sale",
    audienceGroups: ["Shoppers"],
    numberOfGeofences: 50,
    numberOfDevices: 31000,
    status: "Running",
  },
  {
    sno: 10,
    campaignName: "Fitness Campaign",
    audienceGroups: ["Fitness Enthusiasts"],
    numberOfGeofences: 65,
    numberOfDevices: 29000,
    status: "Completed",
  },
  {
    sno: 11,
    campaignName: "Car Expo",
    audienceGroups: ["Car Enthusiasts"],
    numberOfGeofences: 80,
    numberOfDevices: 41000,
    status: "Running",
  },
  {
    sno: 12,
    campaignName: "Fashion Week",
    audienceGroups: ["Fashionistas"],
    numberOfGeofences: 45,
    numberOfDevices: 32000,
    status: "Completed",
  },
  {
    sno: 13,
    campaignName: "Startup Summit",
    audienceGroups: ["Entrepreneurs"],
    numberOfGeofences: 75,
    numberOfDevices: 36000,
    status: "Running",
  },
  {
    sno: 14,
    campaignName: "Pet Expo",
    audienceGroups: ["Pet Owners"],
    numberOfGeofences: 50,
    numberOfDevices: 30000,
    status: "Completed",
  },
  {
    sno: 15,
    campaignName: "Book Fair",
    audienceGroups: ["Book Lovers"],
    numberOfGeofences: 60,
    numberOfDevices: 25000,
    status: "Running",
  },
];

const useMyCampaignsStoreBase = create<CampaignStore>((set) => ({
  myCampaigns: initialCampaigns,
  addCampaign: (campaign: Campaign) => {
    set(
      produce((state) => {
        state.myCampaigns.push(campaign);
      })
    );
  },
}));

const useMyCampaignsStore = createSelectors(useMyCampaignsStoreBase);

export default useMyCampaignsStore;
