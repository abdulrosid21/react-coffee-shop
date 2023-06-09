/* eslint-disable no-param-reassign */
import axios from "axios";

const instance = axios.create({
  // baseURL: process.env.REACT_APP_URL_DEPLOY,
  baseURL: "http://localhost:3001/",
});

instance.interceptors.request.use(
  (config) => {
    config.headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
