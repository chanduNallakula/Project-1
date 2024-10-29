import axiosClient from "./axiosClient";

export const getAllOrganizations = async () => {
  const response = await axiosClient.get("/organizations/");
  return response.data;
};
