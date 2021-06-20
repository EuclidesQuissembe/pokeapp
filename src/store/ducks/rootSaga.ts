import { all } from "redux-saga/effects";

import pokemons from "./pokemons/sagas";
import pokedexes from "./pokedex/sagas";
import search from "./search/sagas";

export default function* rootSaga(): any {
  return yield all([pokemons, pokedexes, search]);
}
