import axios from "axios";

interface StateData {
  sId: number;
  sName: string;
  cId: number;
}

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TRACKING_API_URL,
});

export const getMyState = async (cId: number): Promise<StateData[]> => {
  const formData = new FormData();
  formData.append("cId", cId.toString());

  const response = await axiosClient.post<{ detail: StateData[] }>(
    "/states/retrievebycId",
    formData
  );

  return response.data.detail;
};
