import { createStore, Store } from "redux";
import { PokemonsState } from "./ducks/pokemons/types";

import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
  pokemons: PokemonsState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
