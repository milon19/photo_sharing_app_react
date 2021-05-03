import produce from "immer";

import {
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
} from "../constants";
import auth from "../../settings/auth";

const initialState = {
  user: auth.getUserInfo(),
  publicUser: null,
  errors: [],
  message: "",
  redirect: false,
};

const authReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_USER:
        draft.user = action.payload;
        break;
      case SET_PROFILE_FORM:
        draft.profileForm = action.payload;
        break;
      case CHANGE_AUTH_FORM:
        draft[action.payload.type][action.payload.key] = action.payload.value;
        break;
      case SET_FORM_ERRORS:
        draft.errors = action.payload;
        break;
      case RESET_AUTH_FORM_ERRORS:
        draft.errors = [];
        break;
      case RESET_AUTH_FORM:
        if (action.payload?.type) {
          draft[action.payload.type] = initialState[action.payload.type];
        } else {
          draft.loginForm = initialState.loginForm;
          draft.registerForm = initialState.registerForm;
        }
        break;
      case SET_MESSAGE:
        draft.message = action.payload;
        break;
      case RESET_MESSAGE:
        draft.message = "";
        break;
      case REDIRECT_AUTH:
        draft.redirect = action.payload;
        break;
      case LOGOUT_USER:
        draft.user = null;
        draft.message = "";
        auth.clearAppStorage();
        break;
      case SET_PUBLIC_USER_INFO:
        draft.publicUser = action.payload;
        break;
      default:
        break;
    }
  });
export default authReducer;
