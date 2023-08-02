import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-MICROCMS-API-KEY": "eIZwHMlB1KzfiMOKBEngXprjRORSw8WKkDk3",
  },
  // timeout: 5000
});

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default api;
