import { Reducer } from "redux";
import { SearchState, SearchTypes } from "./types";

const INITIAL_STATE: SearchState = {
  data: {
    pokemon: {},
  },
  error: false,
  loading: false,
};

const reducer: Reducer<SearchState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SearchTypes.LAOD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case SearchTypes.LOAD_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        data: {
          pokemon: {},
        },
      };
    default:
      return state;
  }
};

export default reducer;
