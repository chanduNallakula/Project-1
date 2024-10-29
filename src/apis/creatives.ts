import axios from "axios";
// import axiosClient from "./axiosClient";

interface CreativeDataProps {
  list: {
    cbName: string;
    ctId: number;
    csId: number;
    cszId: number;
    cbPath: string;
    cbId: number;
    [key: string]: any;
  }[];
  message: string;
  status: string;
  [key: string]: any;
}

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TRACKING_API_URL,
});

export const getAllCreatives = async (): Promise<CreativeDataProps> => {
  const response = await axiosClient.get<CreativeDataProps>("/creatives/");
  return response.data;
};

// export const getMyCampaign = async (cId: number) => {
//   const formData = new FormData();
//   formData.append("cId", cId.toString());
//   const response = await axiosClient.post("/campaigns/retrieve/", formData);
//   return response.data;
// };

export const addCreatives = async (creative: CreativeDataProps) => {
  const response = await axiosClient.post("/creatives/add/", creative);
  return response.data;
};

// export const deleteCampaign = async (cId: number) => {
//   const fromData = new FormData();
//   fromData.append("cId", cId.toString());
//   const response = await axiosClient.post(`/campaigns/delete/`, fromData);
//   return response.data;
// };

// export const updateCreative = async (creative: CreativeDataProps) => {
//   const fromData = new FormData();
//   fromData.append("cbName", creative.cbName);
//   fromData.append("cDescription", campaign.cDescription);
//   const response = await axiosClient.post(`/creatives/update/`, fromData);
//   return response.data;
// };
export const updateCreatives = async (creative: CreativeDataProps) => {
  const response = await axiosClient.post("/creatives/update/", creative);
  return response.data;
};
