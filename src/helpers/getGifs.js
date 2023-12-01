export const fetchGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=CHvRBQM42w8B76W22LNryqDEp9cSaOnP&q=${category}&limit=5`;
  const response = await fetch(url);
  const { data = [] } = await response.json();

  const gifs = data.map((gif) => ({
    id: gif?.id,
    title: gif?.title,
    url: gif?.images?.original?.url,
  }));

  return gifs;
};
