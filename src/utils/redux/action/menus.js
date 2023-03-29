import axios from "../../axios";

export const getDetailMenu = (id) => ({
  type: "MENUS_DETAIL",
  payload: axios.get(`menus/${id}`),
});
