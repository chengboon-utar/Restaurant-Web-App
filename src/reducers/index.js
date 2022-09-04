import authReducer from "./auth";
import counterReducer from "./counter";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    auth: authReducer,
    count: counterReducer
});

export default allReducers;