import { combineReducers } from "redux";
import uxReducers from "./uxReducers";
import historyReducers from "./historyReducers";

export default combineReducers({
  ux: uxReducers,
  history: historyReducers
});
