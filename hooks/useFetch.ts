import { useEffect, useState } from "react"

export const useFetch = (funk: () => void) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const fetchData = async () => {
    setLoading(true);

    try {  
      const res = await funk();
      setData(res);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

    useEffect(() => {
        fetchData();
    }, [])

    return {loading, data, error};
}