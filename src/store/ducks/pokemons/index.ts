import { Reducer } from "redux";
import { PokemonsState, PokemonsTypes } from "./types";

const INITIAL_STATE: PokemonsState = {
  data: {
    pokemons: {
      count: 0,
      next: null,
      previous: null,
      message: "",
      nextOffset: 0,
      prevOffset: 0,
      results: [],
      status: false,
    },
  },
  loading: false,
  error: false,
};

const reducer: Reducer<PokemonsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonsTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case PokemonsTypes.LAOD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case PokemonsTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
