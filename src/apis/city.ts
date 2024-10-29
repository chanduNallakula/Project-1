import axios from "axios";

interface CityData {
  ctId: number;
  ctName: string;
  sId: number;
}

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TRACKING_API_URL,
});

export const getMyCity = async (sId: number): Promise<CityData[]> => {
  const formData = new FormData();
  formData.append("sId", sId.toString());

  const response = await axiosClient.post<{ detail: CityData[] }>(
    "cities/retrievebysId",
    formData
  );

  return response.data.detail;
};
