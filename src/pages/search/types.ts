import { SearchState } from "../../store/ducks/search/types";

export interface StateProps {
  search: SearchState;
}

export interface DispatchProps {
  loadRequest: (q: string | null) => void;
}

export type Props = StateProps & DispatchProps;
