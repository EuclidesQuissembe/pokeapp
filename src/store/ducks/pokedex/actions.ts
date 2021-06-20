import { action } from "typesafe-actions";
import { Pokedex, PokedexTypes } from "./types";

export const loadRequest = () => action(PokedexTypes.LOAD_REQUEST);

export const loadFromDB = () => action(PokedexTypes.LOAD_FROM_DB);

export const loadSuccess = (pokedexes: Pokedex[]) =>
  action(PokedexTypes.LOAD_SUCCESS, { pokedexes });

export const loadFailure = () => action(PokedexTypes.LOAD_FAILURE);

export const addToCollection = (name: string) =>
  action(PokedexTypes.ADD_TO_COLLECTION, name);

export const addToCollectionSuccess = (pokemon: Pokedex) =>
  action(PokedexTypes.ADD_TO_COLLECTION_SUCCESS, pokemon);

export const removeFromCollection = (pokedexId: number) =>
  action(PokedexTypes.REMOVE_FROM_COLLECION, { id: pokedexId });
