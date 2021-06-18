import { all } from "redux-saga/effects";

import pokemons from "./pokemons/sagas";

export default function* rootSaga(): any {
  return yield all([pokemons]);
}
