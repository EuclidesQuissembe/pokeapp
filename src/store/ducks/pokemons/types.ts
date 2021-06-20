export enum PokemonsTypes {
  LOAD_REQUEST = "@pokemons/LOAD_REQUEST",
  LAOD_SUCCESS = "@pokemons/LOAD_SUCCESS",
  LOAD_FAILURE = "@pokemons/LOAD_FAILURE",
}

export interface Pagination {
  limit: number;
  offset: number;
}

export interface Pokemon {
  id: number;
  url: string;
  name: string;
  image: string;
  artwork: string;
  dreamworld: string;
}

export interface PokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  message: string;
  nextOffset: number;
  prevOffset: number;
  status: boolean;
  results: Pokemon[];
}

export interface PokemonsData {
  pokemons: PokemonsResponse;
}

export interface PokemonsState {
  readonly data: PokemonsData;
  readonly loading: boolean;
  readonly error: boolean;
}
