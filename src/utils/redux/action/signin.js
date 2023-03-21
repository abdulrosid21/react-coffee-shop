/* eslint-disable import/prefer-default-export */
import axios from "../../axios";

export const signin = (data) => ({
  type: "LOGIN",
  payload: axios.post("users/login", data),
});
