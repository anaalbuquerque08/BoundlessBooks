import React from "react";

const useFetch = (url) => {
  const [booksData, setBooksData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erro: ${response.statusText}`);
        }
        const result = await response.json();
        setBooksData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { booksData, loading, error };
};

export default useFetch;