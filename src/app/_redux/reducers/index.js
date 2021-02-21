import demoReducer from "./demoReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    demoReducer,
});

export default rootReducer;
