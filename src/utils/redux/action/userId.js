/* eslint-disable import/prefer-default-export */
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