import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-d2c7f/us-central1/api",
  baseURL: "https://api-wapsckc5lq-uc.a.run.app/",
});

export { axiosInstance };
