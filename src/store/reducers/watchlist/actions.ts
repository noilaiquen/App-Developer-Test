import { Movie } from "../../../types";
import { REMOVE_FROM_WACTHLIST, ADD_TO_WACTHLIST } from "./actionsType";

export const addToWacthlist = (movie: Movie) => {
  return (dispatch: any) => {
    dispatch({
      type: ADD_TO_WACTHLIST,
      payload: {
        movie,
      },
    });
  };
};

export const removeFromWacthlist = (movie: Movie) => {
  return (dispatch: any) => {
    dispatch({
      type: REMOVE_FROM_WACTHLIST,
      payload: {
        movie,
      },
    });
  };
};
