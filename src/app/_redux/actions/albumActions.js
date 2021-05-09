import { SET_MY_ALBUM, FETCH_MY_ALBUM, SUBMIT_ALBUM_FORM } from "../constants";

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
