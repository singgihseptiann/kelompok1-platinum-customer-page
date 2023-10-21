import axios from "axios";

const handler = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_API_URL}`,
  timeout: 15000,
});

handler.interceptors.request.use(
  (config) => {
    if (config.url !== "/admin/auth/login") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      if (config.headers["Content-Type"] === "multipart/form-data") {
        config.headers["Content-Type"] = "multipart/form-data";
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { handler };
