import { all } from "redux-saga/effects";
// import { commonWatcher } from "./commonSaga";
import { authWatcher } from "./authSaga";
// import { episodeWatcher } from "./episodeSaga";

export default function* rootSaga() {
    yield all([authWatcher()]);
}
