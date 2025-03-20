import { AnyAction } from "redux";
import { Movie } from "../../../types";
import { ADD_TO_WACTHLIST, REMOVE_FROM_WACTHLIST } from "./actionsType";

type InitState = {
  movies: Record<string, Movie>;
};

const initState: InitState = {
  movies: {},
};

export default (state = initState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TO_WACTHLIST:
      return {
        ...state,
        movies: {
          ...state.movies,
          [action.payload.movie.id]: action.payload.movie,
        },
      };
    case REMOVE_FROM_WACTHLIST:
      const newMovies = { ...state.movies };
      delete newMovies[action.payload.movie.id];
      return {
        ...state,
        movies: newMovies,
      };
    default:
      return state;
  }
};
