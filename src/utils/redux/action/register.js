import axios from "../../axios";

export const register = (data) => ({
  type: "REGISTER",
  payload: axios.post("users/addata", data),
});
