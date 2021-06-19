import { all } from "redux-saga/effects";

import pokemons from "./pokemons/sagas";
import pokedexes from "./pokedex/sagas";

export default function* rootSaga(): any {
  return yield all([pokemons, pokedexes]);
}
