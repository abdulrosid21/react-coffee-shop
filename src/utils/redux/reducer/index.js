import { combineReducers } from "redux";

import register from "./register";
import login from "./signin";
import user from "./userId";

export default combineReducers({
  register,
  login,
  user,
});
