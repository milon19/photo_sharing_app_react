import { put, call, takeLatest } from "redux-saga/effects";

import { FETCH_MY_ALBUM } from "../_redux/constants";
import request from "../utils/requests";
import allActions from "../_redux/actions";

function* fetchMyAlbum({ id }) {
  const url = `/my-albums/${id}`;
  const options = {
    method: "GET",
  };
  const response = yield call(request, url, options);
  if (response.status === 403) {
    yield put(allActions.authActions.logoutUser());
    yield put(allActions.authActions.redirectUser(`/auth/login`));
  } else if (response.status === 401) {
    yield put(
      allActions.authActions.setMessage("You can't not see this Album")
    );
  } else {
    yield put(allActions.albumActions.setMyAlbum({ ...response }));
  }
}

export function* albumWatcher() {
  yield takeLatest(FETCH_MY_ALBUM, fetchMyAlbum);
}
