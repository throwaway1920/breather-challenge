import { SEARCH_SUCCESS, SEARCH_FAILURE } from "../actions/types";

const initialState = {
  results: []
};

export const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return { ...state, results: action.payload.results };
    case SEARCH_FAILURE:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};
