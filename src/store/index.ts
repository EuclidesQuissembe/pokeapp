import { DefaultTheme } from "styled-components";
import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";

import { PokedexState } from "./ducks/pokedex/types";
import { PokemonsState } from "./ducks/pokemons/types";
import { SearchState } from "./ducks/search/types";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
  data: PokemonsState;
  pokedex: PokedexState;
  search: SearchState;
  theme: DefaultTheme;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
