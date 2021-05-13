import { GET_MOVIE_DETAIL, GET_MOVIE_LIST } from "../constants/movie.const";

const initialState = {
  movieList: [],
  movieDetail: {},
};
export const movieRducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case GET_MOVIE_LIST: {
      state.movieList = payload;

      const newState = { ...state };
      return newState;
    }
    case GET_MOVIE_DETAIL: {
      state.movieDetail = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
