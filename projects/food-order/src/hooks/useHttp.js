import { useCallback, useEffect, useState } from "react";
import AJAX from "../utils/AJAX";

export default function useHttp(url, config, initialData) {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(initialData);
  const [error, setError] = useState("");

  const sendRequest = useCallback(
    async function sendRequest(requestData) {
      setIsFetching(true);
      try {
        const data = await AJAX(url, { ...config, body: requestData });
        setData(data);
      } catch (err) {
        setError(err.message);
      }
      setIsFetching(false);
    },
    [url, config]
  );

  useEffect(() => {
    if (config && config.method === "GET") sendRequest();
  }, [sendRequest, config]);

  return { data, error, isFetching, sendRequest };
}
