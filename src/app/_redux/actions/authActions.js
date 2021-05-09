import {
  SUBMIT_AUTH,
  SET_USER,
  CHANGE_AUTH_FORM,
  RESET_AUTH_FORM,
  SET_FORM_ERRORS,
  RESET_AUTH_FORM_ERRORS,
  SET_MESSAGE,
  RESET_MESSAGE,
  REDIRECT_AUTH,
  LOGOUT_USER,
  SET_PUBLIC_USER_INFO,
  SET_PROFILE_FORM,
  FETCH_USER_INFO,
  FETCH_PUBLIC_USER_INFO,
  UPDATE_USER,
} from "../constants";

export function submitAuthForm(payload) {
  return {
    type: SUBMIT_AUTH,
    payload,
  };
}

export function setUser(payload) {
  return {
    type: SET_USER,
    payload,
  };
}

export function changeAuthForm(payload) {
  return {
    type: CHANGE_AUTH_FORM,
    payload,
  };
}

export function resetAuthForm(payload) {
  return {
    type: RESET_AUTH_FORM,
    payload,
  };
}

export function setFormErrors(payload) {
  return {
    type: SET_FORM_ERRORS,
    payload,
  };
}

export function resetFormErrors(payload) {
  return {
    type: RESET_AUTH_FORM_ERRORS,
    payload,
  };
}

export function setMessage(payload) {
  return {
    type: SET_MESSAGE,
    payload,
  };
}

export function resetMessage() {
  return {
    type: RESET_MESSAGE,
  };
}

export function redirectUser(payload) {
  return {
    type: REDIRECT_AUTH,
    payload,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

export function setPublicUserInfo(payload) {
  return {
    type: SET_PUBLIC_USER_INFO,
    payload,
  };
}

export function setProfileForm(payload) {
  return {
    type: SET_PROFILE_FORM,
    payload,
  };
}

export function fetchUserInfo() {
  return {
    type: FETCH_USER_INFO,
  };
}

export function fetchPublicUserInfo(payload) {
  return {
    type: FETCH_PUBLIC_USER_INFO,
    payload,
  };
}

export function updateUser(payload) {
  return {
    type: UPDATE_USER,
    payload,
  };
}
