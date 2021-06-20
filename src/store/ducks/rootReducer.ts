import { combineReducers } from "redux";

import pokedex from "./pokedex";
import pokemons from "./pokemons";
import search from "./search";
import theme from "./theme";

export default combineReducers({
  data: pokemons,
  pokedex,
  search,
  theme,
});
