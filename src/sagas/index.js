import { all, fork } from "redux-saga/effects";

import watcherSearchSaga from "./search";

export default function* root() {
  yield all([fork(watcherSearchSaga)]);
}
