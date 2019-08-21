import { combineReducers } from "redux";
import user from "./reducers/auth";
import uploads from "./reducers/uploads";
import client from './reducers/user';

export default combineReducers({
  user,
  uploads,
  client
});
