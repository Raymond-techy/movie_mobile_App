const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

const TMDB_API_KEY = "93c4c40d96067b30d74cb604968b767b";

const ENDPOINTS = {
  NOW_PLAYING: "/movie/now_playing",
  UPCOMING_MOVIES: "/movie/upcoming",
  TOPRATED_MOVIES: "/movie/popular",
  MOVIE_DETAILS: "/movie",
  TV_DETAILS: "/tv",
  TOP_TV: "/tv/popular",
};

export { TMDB_BASE_URL, TMDB_API_KEY, TMDB_IMAGE_BASE_URL, ENDPOINTS };
