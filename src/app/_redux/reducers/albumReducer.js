import produce from "immer";

import { SET_MY_ALBUM } from "../constants";

const initialState = {
  myAlbum: null,
};

const albumReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_MY_ALBUM:
        draft.myAlbum = action.payload;
        break;
      default:
        break;
    }
  });
export default albumReducer;
