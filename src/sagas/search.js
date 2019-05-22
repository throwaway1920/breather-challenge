import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE
} from "../actions/types";

export default function* watcherSearchSaga() {
  yield takeLatest(SEARCH_REQUEST, workerSearchSaga);
}

function* workerSearchSaga({ payload }) {
  try {
    const response = yield call(() => search(payload));
    const results = response.data.hits;

    yield put({ type: SEARCH_SUCCESS, payload: { results } });
  } catch (error) {
    yield put({ type: SEARCH_FAILURE, payload: { error } });
  }
}

const search = ({ filter }) =>
  axios.get(`http://hn.algolia.com/api/v1/search?query=${filter}&tags=story`);
