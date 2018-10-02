import { FETCH_MOVIES } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES:
      console.log(action.payload.data.results);
      return [action.payload.data.results[0], ...state];
    default:
      return state;
  }
}

/* 
    Might be useful later on:
    case SAVE_MOVIE:
      return [...state, action.payload];
*/
