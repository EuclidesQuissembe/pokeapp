import { action } from "typesafe-actions";
import { SearchResult, SearchTypes } from "./types";

export const loadRequest = (q: string | null) =>
  action(SearchTypes.LOAD_REQUEST, q);

export const loadSuccess = (result: SearchResult) =>
  action(SearchTypes.LAOD_SUCCESS, result);

export const loadFailure = () => action(SearchTypes.LOAD_FAILURE);
