import axios from "axios";

const request = axios.create({
  baseURL: "https://650aee4adfd73d1fab09363e.mockapi.io/",
  timeout: 10000,
});

export default request;
