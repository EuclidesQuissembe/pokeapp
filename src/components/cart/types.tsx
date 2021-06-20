import { PokedexState } from "../../store/ducks/pokedex/types";

export interface DispatchProps {
  loadFromDB: () => void;
}

export interface Props extends DispatchProps {
  data: PokedexState;
}
