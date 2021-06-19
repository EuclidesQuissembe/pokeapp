import { PokemonsState, Pagination } from "../../store/ducks/pokemons/types";
export interface StateProps {
  data: PokemonsState;
}

export interface DispatchProps {
  loadRequest(pagination: Pagination): void;
  addToCollection(name: string): void;
}

export type Props = StateProps & DispatchProps;
