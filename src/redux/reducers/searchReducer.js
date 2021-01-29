import { SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIE_BY_ID } from "../action/types";

const initialState = {
  data: [],
  text: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.data,
      };

    case FETCH_MOVIE:
      return {
        ...state,
        data: action.data,
      };

    case FETCH_MOVIE_BY_ID:
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
}
