export enum PokedexTypes {
  LOAD_REQUEST = "@pokedex/LOAD_REQUEST",
  LOAD_FROM_DB = "@pokedex/LOAD_FROM_DB",
  LOAD_SUCCESS = "@pokedex/LOAD_SUCCESS",
  LOAD_FAILURE = "@pokedex/LOAD_FAILURE",

  ADD_TO_COLLECTION = "@pokedex/ADD_TO_COLLECTION",
  ADD_TO_COLLECTION_SUCCESS = "@pokedex/ADD_TO_COLLECTION_SUCCESS",

  REMOVE_FROM_COLLECION = "@pokedex/REMOVE_FROM_CART",
}

export interface Pokedex {
  id: number;
  name: string;
  amount: number;
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  sprites: {
    front_default: string;
  };
}

export interface PokedexState {
  readonly pokedexes: Pokedex[];
  readonly loading: boolean;
  readonly error: boolean;
}
