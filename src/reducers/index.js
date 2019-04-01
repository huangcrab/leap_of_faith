import { combineReducers } from "redux";
import uxReducers from "./uxReducers";
import historyReducers from "./historyReducers";
import tokenReducers from "./tokenReducers";

export default combineReducers({
  token: tokenReducers,
  ux: uxReducers,
  history: historyReducers
});
