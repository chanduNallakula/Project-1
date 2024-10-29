import { produce } from "immer";
import { create } from "zustand";
import { createSelectors } from "./createSelectors";
export interface TempCampaign {
  oId?: number | string;
  cId?: number;
  opens?: number;
  cName: string;
  cDescription: string;
  oName: string;
}

interface TempCampaignStore {
  tempCampaigns: TempCampaign[];
  addTempCampaign: (campaign: TempCampaign) => void;
}

const useTempCampaignStoreBase = create<TempCampaignStore>((set) => ({
  tempCampaigns: [],
  addTempCampaign: (campaign: TempCampaign) => {
    set(
      produce((state) => {
        state.tempCampaigns.push(campaign);
      })
    );
  },
}));

const useTempCampaignStore = createSelectors(useTempCampaignStoreBase);

export default useTempCampaignStore;
