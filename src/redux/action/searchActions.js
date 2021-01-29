import { SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIE_BY_ID } from "./types";
import { moviesService } from "../services/index";

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    text: text,
  });
};

export const fetchMovies = (params) => {
  return async (dispatch) => {
    const response = await moviesService.getSearchMovie(params);
    dispatch({ type: FETCH_MOVIE, data: response });
  };
};

export const fetchMoviesId = (params) => {
  return async (dispatch) => {
    const response = await moviesService.getMovieId(params);
    dispatch({ type: FETCH_MOVIE_BY_ID, data: response });
  };
};
