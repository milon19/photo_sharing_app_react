import authReducer from "./authReducer";
import albumReducer from "./albumReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  authReducer,
  albumReducer,
});

export default rootReducer;
