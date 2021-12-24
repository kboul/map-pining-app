import { useEffect, useState } from "react";
import axios from "axios";

interface AxiosParams {
  method: string;
  url: string;
  data?: any;
}

// https://dev.to/ms_yogii/useaxios-a-simple-custom-hook-for-calling-apis-using-axios-2dkj
export default function useAxios(axiosParams: AxiosParams, callApi?: boolean) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async (params: any) => {
    try {
      const result = await axios.request(params);
      setData(result.data);
      setError("");
    } catch (err: any) {
      setError(err);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (axiosParams.method === "get" || callApi) fetchData(axiosParams);
  }, [callApi]);

  return { data, error, loading };
}
