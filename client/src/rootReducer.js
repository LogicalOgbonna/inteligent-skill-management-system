import { combineReducers } from "redux";
import user from "./reducers/auth";
import uploads from "./reducers/uploads";

export default combineReducers({
  user,
  uploads
});
