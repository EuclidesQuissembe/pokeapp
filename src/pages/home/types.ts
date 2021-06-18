import { PokemonsResponse } from "../../store/ducks/pokemons/types";
export interface StateProps {
  pokemons: PokemonsResponse;
}

export interface DispatchProps {
  loadRequest(): void;
}

export type Props = StateProps & DispatchProps;
