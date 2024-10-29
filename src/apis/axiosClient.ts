import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GEOSAGA_ADMIN_API_URL,
});

export default axiosClient;
