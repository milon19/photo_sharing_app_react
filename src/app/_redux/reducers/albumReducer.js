import produce from "immer";

import {
  SET_MY_ALBUM,
  SET_HOME_PAGE_DATA,
  SET_ALBUM_DETAILS,
} from "../constants";

const initialState = {
  myAlbum: null,
  publicAlbum: [],
  albumDetails: {},
};

const albumReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_MY_ALBUM:
        draft.myAlbum = action.payload;
        break;
      case SET_HOME_PAGE_DATA:
        draft.publicAlbum = action.payload;
        break;
      case SET_ALBUM_DETAILS:
        draft.albumDetails = action.payload;
        break;
      default:
        break;
    }
  });
export default albumReducer;
