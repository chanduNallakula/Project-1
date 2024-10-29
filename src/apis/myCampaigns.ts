import axios from "axios";

interface CampaignDataProps {
  cName: string;
  cDescription: string;
  oName: string;
}

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TRACKING_API_URL,
});

export const getAllMyCampaigns = async () => {
  const response = await axiosClient.get("/campaigns/");
  return response.data;
};

export const getMyCampaign = async (cId: number) => {
  const formData = new FormData();
  formData.append("cId", cId.toString());
  const response = await axiosClient.post("/campaigns/retrieve/", formData);
  return response.data;
};

export const addCampaign = async (campaign: CampaignDataProps) => {
  const response = await axiosClient.post("/campaigns/add/", campaign);
  return response.data;
};

export const deleteCampaign = async (cId: number) => {
  const fromData = new FormData();
  fromData.append("cId", cId.toString());
  const response = await axiosClient.post(`/campaigns/delete/`, fromData);
  return response.data;
};

export const updateCampaign = async (campaign: CampaignDataProps) => {
  const fromData = new FormData();
  fromData.append("cName", campaign.cName);
  fromData.append("cDescription", campaign.cDescription);
  const response = await axiosClient.post(`/campaigns/update/`, fromData);
  return response.data;
};
