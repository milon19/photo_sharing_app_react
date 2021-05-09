import { put, call, takeLatest } from "redux-saga/effects";

import { FETCH_MY_ALBUM, SUBMIT_ALBUM_FORM } from "../_redux/constants";
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

function* submitAlbumForm({ payload }) {
  const url = `/albums/`;
  const options = {
    method: "POST",
    data: payload,
    headers: { "Content-Type": "multipart/form-data" },
  };
  const response = yield call(request, url, options);

  if (response.status === 403) {
    yield put(allActions.authActions.logoutUser());
    yield put(allActions.authActions.redirectUser(`/auth/login`));
  }
  yield put(allActions.albumActions.fetchMyAlbum());
  yield put(allActions.authActions.redirectUser(`/my-albums/${response.id}`));
}

export function* albumWatcher() {
  yield takeLatest(FETCH_MY_ALBUM, fetchMyAlbum);
  yield takeLatest(SUBMIT_ALBUM_FORM, submitAlbumForm);
}
