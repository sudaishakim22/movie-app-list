import { request } from "../util";

export const moviesService = {
  getSearchMovie,
  getMovieId,
};

async function getSearchMovie(params) {
  let body = params;

  const response = await request("GET", "search", body);
  return response;
}

async function getMovieId(id) {
  let body = id;

  const response = await request("GET", "film", body);
  return response;
}
