export enum PokedexTypes {
  LOAD_REQUEST = "@pokedex/LOAD_REQUEST",
  LAOD_SUCCESS = "@pokedex/LOAD_SUCCESS",
  LAOD_FAILURE = "@pokedex/LOAD_FAILURE",

  ADD_TO_COLLECTION = "@pokedex/ADD_TO_COLLECTION",
  ADD_TO_COLLECTION_SUCCESS = "@pokedex/ADD_TO_COLLECTION_SUCCESS",
}

export interface Pokedex {
  id: number;
  name: string;
  amount: number;
}

export interface PokedexState {
  readonly pokedexes: Pokedex[];
  readonly loading: boolean;
  readonly error: boolean;
}
