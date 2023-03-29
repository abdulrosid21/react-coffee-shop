import { combineReducers } from "redux";

import register from "./register";
import login from "./signin";
import user from "./userId";
import menus from "./menus";

export default combineReducers({
  register,
  login,
  user,
  menus,
});
