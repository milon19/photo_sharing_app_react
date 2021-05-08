import { SET_MY_ALBUM, FETCH_MY_ALBUM } from "../constants";

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
