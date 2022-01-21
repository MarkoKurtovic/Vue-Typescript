import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://interview-mock.herokuapp.com/api/workers/",
  headers: {
    "Content-type": "text/html",
  },
});

export default apiClient;
