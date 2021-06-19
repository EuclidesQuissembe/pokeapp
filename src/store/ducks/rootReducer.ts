import { combineReducers } from "redux";

import pokedex from "./pokedex";
import pokemons from "./pokemons";

export default combineReducers({
  data: pokemons,
  pokedex,
});
