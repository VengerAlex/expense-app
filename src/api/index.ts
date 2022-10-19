import axios, { AxiosRequestConfig } from "axios";
import AuthService from "../services/auth.service";
import { localstorageAuthService } from "../services/localstorage.service";

export const getAuthUrl = (string: string) => `/auth/${string}`;
export const getUserUrl = (string: string) => `/users/${string}`;

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localstorageAuthService.getAccessToken();

  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }

  return config;
});

// instance.interceptors.response.use(
//   (config) => config,
//   async (error) => {
//     const originalRequest = error.config;
//
//     if (
//       error.response.status === 401 &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         await AuthService.getNewTokens();
//
//         return instance.request(originalRequest);
//       } catch (error) {
//         await AuthService.logout();
//       }
//     }
//
//     throw error;
//   },
// );

export default instance;
