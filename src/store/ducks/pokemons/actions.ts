import { action } from "typesafe-actions";
import { PokemonsTypes, PokemonsState, Pagination } from "./types";

export const loadRequest = (pagination: Pagination) =>
  action(PokemonsTypes.LOAD_REQUEST, pagination);

export const loadSuccess = (response: PokemonsState | undefined) =>
  action(PokemonsTypes.LAOD_SUCCESS, response);

export const loadFailure = () => action(PokemonsTypes.LOAD_FAILURE);
