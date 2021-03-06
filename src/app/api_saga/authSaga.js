import { put, call, takeLatest, select } from "redux-saga/effects";

import { SUBMIT_AUTH, FETCH_USER_INFO, UPDATE_USER } from "../_redux/constants";
import request from "../utils/requests";
import auth from "../settings/auth";
import allActions from "../_redux/actions";

function* submitAuthForm({ payload }) {
  let url;
  let body;

  switch (payload.formType) {
    case "loginForm":
      url = `/token/`;
      body = {
        email: payload.email,
        password: payload.password,
      };
      break;
    case "registerForm":
      url = `/registration/`;
      body = {
        username: payload.username,
        email: payload.email,
        password: payload.password,
      };
      break;
    default:
      break;
  }

  const options = {
    method: "POST",
    body: body,
  };

  const response = yield call(request, url, options);

  if (response.status === 400 || response.status === 401) {
    let data = response.data;
    let r = [];
    for (var [i, j] of Object.entries(data)) {
      console.log(`${i}: ${j}`);
      r.push(`${j}`);
    }
    yield put(allActions.authActions.setFormErrors(r));
  } else {
    if (payload.formType === "loginForm") {
      auth.setToken(response.access, payload.rememberMe);

      const profile_url = `/profiles/`;
      const options = {
        method: "GET",
      };
      const user_response = yield call(request, profile_url, options);
      yield put(allActions.authActions.setUser(user_response));
      yield put(allActions.authActions.redirectUser(true));
      auth.setUserInfo(user_response, body.rememberMe);
    }
    if (payload.formType === "registerForm") {
      yield put(
        allActions.authActions.setMessage(
          "Registration Successful. Login Here."
        )
      );
      yield put(allActions.authActions.redirectUser(true));
    }
  }
}

function* getUserInfo() {
  const profile_url = `/profiles`;
  const options = {
    method: "GET",
  };
  const response = yield call(request, profile_url, options);
  if (response.status === 403) {
    yield put(allActions.authActions.logoutUser());
    yield put(allActions.authActions.redirectUser(`/auth/login`));
  } else {
    auth.clearUserInfo();
    auth.setUserInfo(response, true);
    yield put(allActions.authActions.setUser(response));
    yield put(allActions.authActions.setProfileForm(response.profile));
  }
}

function* profileUpdate({ payload }) {
  const user = yield select((state) => state.authReducer.user);
  const request_url = `/profiles/${user.profile.id}/`;
  let options;

  options = {
    method: "PATCH",
    data: payload,
    headers: { "Content-Type": "multipart/form-data" },
  };

  yield call(request, request_url, options);

  yield put(allActions.authActions.fetchUserInfo());
  yield put(allActions.authActions.redirectUser(true));
  yield put(allActions.authActions.setMessage(""));
}

export function* authWatcher() {
  yield takeLatest(SUBMIT_AUTH, submitAuthForm);
  yield takeLatest(FETCH_USER_INFO, getUserInfo);
  yield takeLatest(UPDATE_USER, profileUpdate);
}
