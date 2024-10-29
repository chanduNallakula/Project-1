import axios from "axios";

interface CountryDataProps {
  cId: number;
  cName: string;
  cStatus: number;
  createdBy: number;
  createdOn: string;
}

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TRACKING_API_URL,
});

export const getCountry = async (): Promise<CountryDataProps[]> => {
  const response = await axiosClient.get<{ list: CountryDataProps[] }>(
    "/countries/"
  );
  return response.data.list;
};
