import { combineReducers } from "redux";

import register from "./register";
import login from "./signin";
import user from "./userId";
import menus from "./menus";
import cart from "./cart";
import address from "./cartAddress";
export default combineReducers({
  register,
  login,
  user,
  menus,
  cart,
  address,
});
