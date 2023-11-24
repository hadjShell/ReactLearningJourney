import { useEffect, useState } from "react";
import AJAX from "../utils/AJAX";

export default function useFetchData(url) {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    (async function () {
      setIsFetching(true);
      try {
        const data = await AJAX(url);
        setData(data);
      } catch (err) {
        setError(err.message);
      }
      setIsFetching(false);
    })();
  }, [url]);

  return { data, error, isFetching };
}
