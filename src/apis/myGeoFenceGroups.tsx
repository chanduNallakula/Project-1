import axios from "axios";
import axiosClient from "./axiosClient";

interface GeoFencesGroupDataProps {
  cName: string;
  cDescription: string;
  oName: string;
}

export const getAllMyGeoFencesGroup = async () => {
  const response = await axiosClient.get("/geofencegroups/");
  return response.data;
};

// export const getMyCampaign = async (cId: number) => {
//   const formData = new FormData();
//   formData.append("cId", cId.toString());
//   const response = await axiosClient.post("/campaigns/retrieve/", formData);
//   return response.data;
// };

export const addMyGeoFencesGroup = async (campaign: GeoFencesGroupDataProps) => {
  const response = await axiosClient.post("/geofencegroups/add/", campaign);
  return response.data;
};

export const deleteMyGeoFencesGroup = async (gfgId: number) => {
  const fromData = new FormData();
  fromData.append("gfgId", gfgId.toString());
  const response = await axiosClient.post(`/geofencegroups/delete/`, fromData);
  return response.data;
};

export const updateMyGeoFencesGroup = async (GeofencesGroup: GeoFencesGroupDataProps) => {
  const fromData = new FormData();
  fromData.append("gfgName", GeofencesGroup.cName);
  fromData.append("gfgDescription", GeofencesGroup.cDescription);
  const response = await axiosClient.post(`/geofencegroups/update`, fromData);
  return response.data;
};
