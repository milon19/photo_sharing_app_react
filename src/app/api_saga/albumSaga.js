import { put, call, takeLatest } from "redux-saga/effects";

import {
  FETCH_MY_ALBUM,
  SUBMIT_ALBUM_FORM,
  SUBMIT_ALBUM_FORM_UPDATE,
  DELETE_ALBUM,
  UPLOAD_PHOTO,
  FETCH_HOME_PAGE_DATA,
  FETCH_ALBUM_DETAILS,
} from "../_redux/constants";
import request from "../utils/requests";
import allActions from "../_redux/actions";

function* fetchMyAlbum({ id }) {
  const url = `/my-albums/${id}/`;
  const options = {
    method: "GET",
  };
  const response = yield call(request, url, options);
  if (response.status === 403) {
    yield put(allActions.authActions.logoutUser());
    yield put(allActions.authActions.redirectUser(`/auth/login/`));
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
    yield put(allActions.authActions.redirectUser(`/auth/login/`));
  }
  yield put(allActions.authActions.fetchUserInfo());
  yield put(allActions.authActions.redirectUser(`/my-albums/${response.id}/`));
}

function* submitAlbumFormUpdate({ payload, id }) {
  const url = `/albums/${id}/`;
  const options = {
    method: "PATCH",
    data: payload,
    headers: { "Content-Type": "multipart/form-data" },
  };
  const response = yield call(request, url, options);

  if (response.status === 403) {
    yield put(allActions.authActions.logoutUser());
    yield put(allActions.authActions.redirectUser(`/auth/login/`));
  }
  yield put(allActions.authActions.fetchUserInfo());
  yield put(allActions.authActions.redirectUser(`/my-albums/${response.id}/`));
}

function* deleteAlbum({ id }) {
  const url = `/albums/${id}/`;
  const options = {
    method: "DELETE",
  };
  const response = yield call(request, url, options);

  if (response.status === 403) {
    yield put(allActions.authActions.logoutUser());
    yield put(allActions.authActions.redirectUser(`/auth/login/`));
  }
  yield put(allActions.authActions.fetchUserInfo());
  yield put(allActions.authActions.redirectUser(true));
}

function* uploadPhoto({ payload, id }) {
  const url = `/upload-photo/${id}/`;
  const options = {
    method: "POST",
    data: payload,
    headers: { "Content-Type": "multipart/form-data" },
  };
  const response = yield call(request, url, options);

  if (response.status === 403) {
    yield put(allActions.authActions.logoutUser());
    yield put(allActions.authActions.redirectUser(`/auth/login/`));
  }
  yield put(allActions.authActions.fetchUserInfo());
  yield put(allActions.authActions.redirectUser(`/my-albums/${id}/`));
}

function* getHomePageData() {
  const url = `/albums/`;
  const options = {
    method: "GET",
  };
  const response = yield call(request, url, options);

  if (response.status === 403) {
    yield put(allActions.authActions.logoutUser());
    yield put(allActions.authActions.redirectUser(`/auth/login/`));
  }
  yield put(allActions.albumActions.setHomePageData(response));
}

function* fetchAlbumDetails({ id }) {
  const url = `/albums/${id}/`;
  const options = {
    method: "GET",
  };
  const response = yield call(request, url, options);
  if (response.status === 403) {
    yield put(allActions.authActions.logoutUser());
    yield put(allActions.authActions.redirectUser(`/auth/login/`));
  } else if (response.status === 401) {
    yield put(
      allActions.authActions.setMessage("You can't not see this Album")
    );
  } else {
    yield put(allActions.albumActions.setAlbumDetails({ ...response }));
  }
}

export function* albumWatcher() {
  yield takeLatest(FETCH_MY_ALBUM, fetchMyAlbum);
  yield takeLatest(SUBMIT_ALBUM_FORM, submitAlbumForm);
  yield takeLatest(SUBMIT_ALBUM_FORM_UPDATE, submitAlbumFormUpdate);
  yield takeLatest(DELETE_ALBUM, deleteAlbum);
  yield takeLatest(UPLOAD_PHOTO, uploadPhoto);
  yield takeLatest(FETCH_HOME_PAGE_DATA, getHomePageData);
  yield takeLatest(FETCH_ALBUM_DETAILS, fetchAlbumDetails);
}
