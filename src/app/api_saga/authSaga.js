import { put, call, takeLatest, select } from "redux-saga/effects";

import { SUBMIT_AUTH } from "../_redux/constants";
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
      url = `/users/registration/`;
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

      // const profile_url = `users/profile`;
      // const options = {
      //   method: "GET",
      // };
      // const user_response = yield call(request, profile_url, options);
      // yield put(allActions.authActions.setUser(user_response));
      yield put(allActions.authActions.redirectUser(true));
      // auth.setUserInfo(user_response, body.rememberMe);
    }
    if (payload.formType === "registerForm") {
      yield put(
        allActions.authActions.setMessage(
          "An e-mail has been sent. Please use that to reset your password."
        )
      );
      yield put(allActions.authActions.redirectUser(true));
    }
  }
}

export function* authWatcher() {
  yield takeLatest(SUBMIT_AUTH, submitAuthForm);
}
