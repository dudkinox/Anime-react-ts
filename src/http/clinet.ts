import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.bilibili.tv/intl/gateway/web/v2/ogv/index",
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;
