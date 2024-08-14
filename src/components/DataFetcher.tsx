import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return <div>{data ? `Title: ${data.title}` : "Loading..."}</div>;
};

export default DataFetcher;
