import { combineReducers } from "redux";

import register from "./register";
import login from "./signin";

export default combineReducers({
  register,
  login,
});
