import { call, takeLatest, put } from "redux-saga/effects";

import api from "../../../services/api";

import { SearchTypes } from "./types";
import { loadFailure, loadSuccess } from "./actions";

function* load({ payload }: any): any {
  try {
    const schema = {
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
    };

    const response = yield call(api.post, "/", schema);

    yield put(loadSuccess(response.data.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default takeLatest(SearchTypes.LOAD_REQUEST, load);
