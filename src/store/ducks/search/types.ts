export enum SearchTypes {
  LOAD_REQUEST = "@search/LOAD_REQUEST",
  LAOD_SUCCESS = "@search/LOAD_SUCCESS",
  LOAD_FAILURE = "@search/LOAD_FAILURE",
}

export interface SearchData {
  id?: number;
  name?: string;
  types?: [
    {
      slot: number;
      type: {
        name: string;
      };
    }
  ];
  sprites?: {
    front_default: string;
  };
}

export interface SearchResult {
  pokemon: SearchData;
}

export interface SearchState {
  readonly data: SearchResult;
  readonly loading: boolean;
  readonly error: boolean;
}
