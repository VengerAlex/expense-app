import axios, { AxiosRequestConfig } from "axios";
import AuthService from "../services/auth.service";

export const getAuthUrl = (string: string) => `/auth/${string}`;

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers!.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await AuthService.getNewTokens();

        return instance.request(originalRequest);
      } catch (error) {
        console.log("UNAUTHORIZED");
      }
    }

    throw error;
  },
);

export default instance;
