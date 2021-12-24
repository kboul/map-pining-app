import { useEffect, useState } from "react";
import axios from "axios";

interface AxiosParams {
  method: string;
  url: string;
  data?: any;
}

// https://dev.to/ms_yogii/useaxios-a-simple-custom-hook-for-calling-apis-using-axios-2dkj
export default function useAxios(axiosParams: AxiosParams, callApi?: boolean) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [requestSuccessful, setRequestSuccessful] = useState(false);

  const fetchData = async (params: any) => {
    try {
      const result = await axios.request(params);
      setData(result.data);
    } catch (err: any) {
      setError(err);
      setRequestSuccessful(false);
    } finally {
      setLoading(false);
      setRequestSuccessful(true);
    }
  };

  useEffect(() => {
    if (axiosParams.method === "get" || callApi) fetchData(axiosParams);
  }, [callApi]);

  return { data, error, loading, requestSuccessful };
}
