import { action } from "typesafe-actions";
import { PokemonsTypes, PokemonsState } from "./types";

export const loadRequest = () => action(PokemonsTypes.LOAD_REQUEST);

export const loadSuccess = (response: PokemonsState) =>
  action(PokemonsTypes.LAOD_SUCCESS, response);

export const loadFailure = () => action(PokemonsTypes.LOAD_FAILURE);
