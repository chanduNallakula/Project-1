import axios from "axios";

interface AudienceSetDataProps {
  list: {
    asId: number;
    asName: string;
    asStatus: number;
    ctId: number;
    asDesc: string;
    asPicPath: string;
    cId: number;
    sId: number;
    createdBy: number;
    createdOn: string;
  }[];
  message: string;
  status: string;
  [key: string]: any;
}

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TRACKING_API_URL,
});

export const getAudinceset = async (): Promise<AudienceSetDataProps> => {
  const response = await axiosClient.get("/audiencesets/");
  return response.data;
};

export const addAudienceset = async (asId: number) => {
  const formData = new FormData();
  formData.append("asId", asId.toString());
  const response = await axiosClient.post("/audiencesets/add", formData);
  return response.data;
};
