import { useEffect, useState } from "react";
import { fetchGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifs = async () => {
    const newGifs = await fetchGifs(category);
    setGifs(newGifs);
    setIsLoading(false);
  };

  useEffect(() => {
    getGifs();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
