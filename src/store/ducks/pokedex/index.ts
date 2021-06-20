import { Reducer } from "redux";
import produce, { Draft } from "immer";

import { Pokedex, PokedexState, PokedexTypes } from "./types";
import { Constants } from "../../../utils/constants";

const INITIAL_STATE: PokedexState = {
  pokedexes: [],
  loading: false,
  error: false,
};

const reducer: Reducer<PokedexState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokedexTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case PokedexTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        pokedexes: action.payload.pokedexes,
      };
    case PokedexTypes.LOAD_FROM_DB: {
      const get = localStorage.getItem(Constants.POKEDEXES);

      if (!get) return { ...state };

      const data: Pokedex[] = JSON.parse(get);

      return {
        ...state,
        pokedexes: data,
      };
    }
    case PokedexTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        pokedexes: [],
      };
    case PokedexTypes.ADD_TO_COLLECTION_SUCCESS:
      return produce(state, (draft: Draft<PokedexState>) => {
        const index = draft.pokedexes.findIndex(
          (p) => p.id === action.payload.pokemon.id
        );

        if (index >= 0) {
          draft.pokedexes[index].amount += 1;
        } else {
          const obj = {
            ...action.payload.pokemon,
            amount: 1,
          };

          draft.pokedexes.push(obj);
        }

        localStorage.setItem(
          Constants.POKEDEXES,
          JSON.stringify(draft.pokedexes)
        );
      });
    case PokedexTypes.REMOVE_FROM_COLLECION:
      return produce(state, (draft: Draft<PokedexState>) => {
        const pokedexId = draft.pokedexes.findIndex(
          (p) => p.id === action.payload.id
        );

        if (pokedexId >= 0) {
          draft.pokedexes.splice(pokedexId, 1);
        }

        localStorage.setItem(
          Constants.POKEDEXES,
          JSON.stringify(draft.pokedexes)
        );
      });
    default:
      return state;
  }
};

export default reducer;
