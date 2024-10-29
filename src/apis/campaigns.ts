import axios from "axios";

interface CampaignDataProps {
  list: {
    cId: number;
    cName: string;
    cDescription: string;
    oId: number;
    asId: number;
    startDate: string;
    endDate: string;
    csId: number;
    budget: number;
    pixelId: number;
    callbackId: number;
    opens: number;
    clicks: number;
    oName: string;
    startTime: string;
    endTime: string;
    pixelResponse: string;
    callbackResponse: string;
  }[];
  message: string;
  status: string;
  [key: string]: any;
}

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TRACKING_API_URL,
});

export const getAllMyCampaigns = async (): Promise<CampaignDataProps> => {
  const response = await axiosClient.get<CampaignDataProps>("/campaigns/");
  return response.data;
};

// export const getMyCampaign = async (cId: number) => {
//   const formData = new FormData();
//   formData.append("cId", cId.toString());
//   const response = await axiosClient.post("/campaigns/retrieve/", formData);
//   return response.data;
// };

export const addCampaign = async (campaign: CampaignDataProps) => {
  const response = await axiosClient.post("campaigns/add", campaign);
  return response.data;
};

// export const deleteCampaign = async (cId: number) => {
//   const fromData = new FormData();
//   fromData.append("cId", cId.toString());
//   const response = await axiosClient.post(`/campaigns/delete/`, fromData);
//   return response.data;
// };

export const updateCampaign = async (campaign: CampaignDataProps) => {
  const response = await axiosClient.post(`campaigns/updatestatus`, campaign);
  return response.data;
};
