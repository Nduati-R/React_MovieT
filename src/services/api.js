const API_Key = "e2591f7d5a143c15233a467e8d98f45e";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${ API_Key}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};