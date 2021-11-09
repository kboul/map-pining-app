import { useEffect, useState } from "react";
import axios from "axios";

// https://dev.to/ms_yogii/useaxios-a-simple-custom-hook-for-calling-apis-using-axios-2dkj
export default function useAxios(axiosParams: any) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async (params: any) => {
    try {
      const result = await axios.request(params);
      setData(result.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { data, error, loading };
}
