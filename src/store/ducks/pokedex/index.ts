import { Reducer } from "redux";
import produce, { Draft } from "immer";

import { PokedexState, PokedexTypes } from "./types";

const INITIAL_STATE: PokedexState = {
  pokedexes: [],
  loading: false,
  error: false,
};

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokedexTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case PokedexTypes.LAOD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        pokedexes: action.payload.pokedexes,
      };
    case PokedexTypes.LAOD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        pokedexes: [],
      };
    case PokedexTypes.ADD_TO_COLLECTION_SUCCESS:
      return produce(state, (draft: Draft<PokedexState>) => {
        const pokemonIndex = draft.pokedexes.findIndex(
          (p) => p.id === action.payload.pokemon.id
        );

        if (pokemonIndex >= 0) {
          draft.pokedexes[pokemonIndex].amount += 1;
        } else {
          draft.pokedexes.push({
            ...action.payload.pokemon,
            amount: 1,
          });
        }
      });
    default:
      return state;
  }
};

export default reducer;
