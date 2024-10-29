import React from "react";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_TRACKING_API_URL;

const axiosPost = axios.create({
  method: "POST",
});

const usePostCall = () => {
  const [error, setError] = React.useState<Error | null>(null);
  const [loading, setLoading] = React.useState(false);

  const postCall = async (path: string, data: FormData, createdBy = true) => {
    setLoading(true);
    data.append("createdBy", "1");
    try {
      const response = await axiosPost(url + path, { data });
      setLoading(false);
      return response;
    } catch (error) {
      setError(error as Error);
      setLoading(false);
    }
  };

  return { postCall, error, loading };
};

export default usePostCall;
