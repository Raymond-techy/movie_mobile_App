const axios = require("axios").default;
import {
  TMDB_API_KEY,
  TMDB_IMAGE_BASE_URL,
  TMDB_BASE_URL,
  ENDPOINTS,
} from "../Constants/URLS";
import Languages from "../Constants/Languages";
const TMDB_HTTP_REQUEST = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

const getNowPlayingMovies = async () =>
  await TMDB_HTTP_REQUEST.get(ENDPOINTS.NOW_PLAYING);
const getUpcomingMovies = async () =>
  await TMDB_HTTP_REQUEST.get(ENDPOINTS.UPCOMING_MOVIES);
const getTopRatedMovies = async () =>
  await TMDB_HTTP_REQUEST.get(ENDPOINTS.TOPRATED_MOVIES);
const getRelatedMovies = async (movie_id) =>
  await TMDB_HTTP_REQUEST.get(
    `${ENDPOINTS.MOVIE_DETAILS}/${movie_id}/recommendations`
  );
const getTopTvShows = async () => await TMDB_HTTP_REQUEST.get(ENDPOINTS.TOP_TV);

const getPoster = (path) => `${TMDB_IMAGE_BASE_URL}/original${path}`;

const getMovie = (movie_id) =>
  TMDB_HTTP_REQUEST.get(`${ENDPOINTS.MOVIE_DETAILS}/${movie_id}`);
const getTvShow = (tv_id) =>
  TMDB_HTTP_REQUEST.get(`${ENDPOINTS.TV_DETAILS}/${tv_id}`);
const getMovieCasts = (movie_id) =>
  TMDB_HTTP_REQUEST.get(`${ENDPOINTS.MOVIE_DETAILS}/${movie_id}/credits`);
const getMovieVideos = (movie_id) =>
  TMDB_HTTP_REQUEST.get(`${ENDPOINTS.MOVIE_DETAILS}/${movie_id}/videos`);

const getLanguage = (language) =>
  Languages.find((lang) => lang.iso_639_1 === language);

export {
  getMovieVideos,
  getTvShow,
  getNowPlayingMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getPoster,
  getLanguage,
  getMovie,
  getMovieCasts,
  getRelatedMovies,
  getTopTvShows,
};
