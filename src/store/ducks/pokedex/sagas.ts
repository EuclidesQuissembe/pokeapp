import { all, call, takeEvery, put } from "redux-saga/effects";
import api from "../../../services/api";

import { loadFailure, loadSuccess } from "./actions";

import { Constants } from "../../../utils/constants";
import { Pokedex } from "./types";
import { PokedexTypes } from "./types";
import { addToCollectionSuccess } from "./actions";

function* load() {
  try {
    const response = localStorage.getItem(Constants.POKEDEXES);

    if (response) {
      const pokedexes: Pokedex[] = JSON.parse(response);

      yield put(loadSuccess(pokedexes));
    }
  } catch (err) {
    yield put(loadFailure());
  }
}

function* addToCollection({ payload }: any): any {
  try {
    const response = yield call(api.post, "/", {
      query: `
        query pokemon($name: String!) {
          pokemon(name: $name) {
            id
            name
            sprites {
              front_default
            }
            moves {
              move {
                name
              }
            }
            types {
              type {
                name
              }
            }
          }
        }
      `,
      variables: {
        name: payload,
      },
    });

    yield put(addToCollectionSuccess(response.data.data));
  } catch (err) {}
}

export default all([
  takeEvery(PokedexTypes.LOAD_REQUEST, load),
  takeEvery(PokedexTypes.ADD_TO_COLLECTION, addToCollection),
]);
