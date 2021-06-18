import { Reducer } from "redux";
import { PokemonsState, PokemonsTypes } from "./types";

const INITIAL_STATE: PokemonsState = {
  data: {
    pokemons: {
      count: 0,
      next: null,
      previous: null,
      message: "",
      results: [
        {
          id: 1,
          url: "https://pokeapi.co/api/v2/pokemon/1/",
          name: "bulbasaur",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          artwork:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          dreamworld:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        },
        {
          id: 2,
          url: "https://pokeapi.co/api/v2/pokemon/2/",
          name: "ivysaur",
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
          artwork:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
          dreamworld:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
        },
      ],
      status: false,
    },
  },
  loading: false,
  error: false,
};

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonsTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
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
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
