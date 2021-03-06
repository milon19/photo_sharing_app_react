import {
  SET_MY_ALBUM,
  FETCH_MY_ALBUM,
  SUBMIT_ALBUM_FORM,
  SUBMIT_ALBUM_FORM_UPDATE,
  DELETE_ALBUM,
  UPLOAD_PHOTO,
  FETCH_HOME_PAGE_DATA,
  SET_HOME_PAGE_DATA,
  FETCH_ALBUM_DETAILS,
  SET_ALBUM_DETAILS,
} from "../constants";

export function setMyAlbum(payload) {
  return {
    type: SET_MY_ALBUM,
    payload,
  };
}

export function fetchMyAlbum(id) {
  return {
    type: FETCH_MY_ALBUM,
    id,
  };
}

export function submitAlbumForm(payload) {
  return {
    type: SUBMIT_ALBUM_FORM,
    payload,
  };
}

export function submitAlbumFormUpdate(payload, id) {
  return {
    type: SUBMIT_ALBUM_FORM_UPDATE,
    payload,
    id,
  };
}

export function deleteAlbum(id) {
  return {
    type: DELETE_ALBUM,
    id,
  };
}

export function uploadPhoto(payload, id) {
  return {
    type: UPLOAD_PHOTO,
    payload,
    id,
  };
}

export function fetchHomePageData() {
  return {
    type: FETCH_HOME_PAGE_DATA,
  };
}

export function setHomePageData(payload) {
  return {
    type: SET_HOME_PAGE_DATA,
    payload,
  };
}

export function fetchAlbumDetails(id) {
  return {
    type: FETCH_ALBUM_DETAILS,
    id,
  };
}

export function setAlbumDetails(payload) {
  return {
    type: SET_ALBUM_DETAILS,
    payload,
  };
}
