import { combineReducers } from "redux";
import uxReducers from "./uxReducers";

export default combineReducers({
  ux: uxReducers
});
