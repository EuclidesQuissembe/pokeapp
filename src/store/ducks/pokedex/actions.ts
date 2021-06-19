import { action } from "typesafe-actions";
import { Pokedex, PokedexTypes } from "./types";

export const loadRequest = () => action(PokedexTypes.LOAD_REQUEST);

export const loadSuccess = (pokedexes: Pokedex[]) =>
  action(PokedexTypes.LAOD_SUCCESS, { pokedexes });

export const loadFailure = () => action(PokedexTypes.LAOD_FAILURE);

export const addToCollection = (name: string) =>
  action(PokedexTypes.ADD_TO_COLLECTION, name);

export const addToCollectionSuccess = (pokemon: Pokedex) =>
  action(PokedexTypes.ADD_TO_COLLECTION_SUCCESS, pokemon);
