import axios from "axios";

interface CreativesetsDataProps {
  csId: number;
  csName: string;
}

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TRACKING_API_URL,
});

export const getAllCreativesets = async (): Promise<
  CreativesetsDataProps[]
> => {
  const response = await axiosClient.get<{ list: CreativesetsDataProps[] }>(
    "/creativesets/"
  );
  return response.data.list;
};

// export const getMyCampaign = async (cId: number) => {
//   const formData = new FormData();
//   formData.append("cId", cId.toString());
//   const response = await axiosClient.post("/campaigns/retrieve/", formData);
//   return response.data;
// };

export const addCreativesets = async (creativesets: CreativesetsDataProps) => {
  const response = await axiosClient.post("/creativesets/add/", creativesets);
  return response.data;
};

// export const deleteCampaign = async (cId: number) => {
//   const fromData = new FormData();
//   fromData.append("cId", cId.toString());
//   const response = await axiosClient.post(/campaigns/delete/, fromData);
//   return response.data;
// };

// export const updateCreative = async (creative: CreativeDataProps) => {
//   const fromData = new FormData();
//   fromData.append("cbName", creative.cbName);
//   fromData.append("cDescription", campaign.cDescription);
//   const response = await axiosClient.post(/creatives/update/, fromData);
//   return response.data;
// };
// export const updateCreatives = async (creative: CreativeDataProps) => {
//   const response = await axiosClient.post("/creatives/update/", creative);
//   return response.data;
// };
