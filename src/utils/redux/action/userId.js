import axios from "../../axios";

export const updateImage = (image) => ({
  type: "IMAGE",
  payload: axios.patch("users/image-upload", image),
});
export const getDataUser = () => ({
  type: "USER",
  payload: axios.get("users/"),
});
export const updateProfile = (data) => ({
  type: "PROFILE",
  payload: axios.patch("users/editdata", data),
});

export const updatePassword = (data) => ({
  type: "UPDATE_PWD",
  payload: axios.patch("users/edit-password", data),
});
