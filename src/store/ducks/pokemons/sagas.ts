import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";

import { PokemonsTypes } from "./types";
import { loadSuccess, loadFailure } from "./actions";

function* load({ payload }: any): any {
  try {
    const response = yield call(api.post, "/", {
      query: `
        query($limit: Int, $offset: Int) {
          pokemons(limit: $limit, offset: $offset) {
            count
            next
            previous
            status
            nextOffset
            prevOffset
            message
            results {
              id
              url
              name
              image
              artwork
              dreamworld
            }
          }
        }
      `,
      variables: {
        limit: payload.limit,
        offset: payload.offset,
      },
    });

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default takeLatest(PokemonsTypes.LOAD_REQUEST, load);
