/* eslint-disable import/prefer-default-export */
import axios from "../../axios";

export const user = () => ({
  type: "USER",
  payload: axios.get("users/id"),
});
