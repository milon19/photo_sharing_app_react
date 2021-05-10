import { all } from "redux-saga/effects";
import { authWatcher } from "./authSaga";
import { albumWatcher } from "./albumSaga";

export default function* rootSaga() {
  yield all([authWatcher(), albumWatcher()]);
}
