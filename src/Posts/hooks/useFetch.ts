import { useState, useEffect } from "react";

function useFetch<T>(url: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (response.ok === false) {
          throw new Error(`error status ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("some error");
        }
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
}

export default useFetch;
