import { combineReducers } from "redux";
import serviceProjectsReducers from "./serviceProjectsReducers";

const reducers = combineReducers({
  service: serviceProjectsReducers,
});

export default reducers;
