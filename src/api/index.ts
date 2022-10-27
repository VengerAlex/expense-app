import axios, { AxiosRequestConfig } from "axios";
import AuthService from "../services/auth.service";
import { localstorageAuthService } from "../services/localstorage.service";

const AuthUrlRoute = "/auth";
const UserUrlRoute = "/users";
const CategoryUrlRoute = "/categories";
const TransactionUrlRoute = "/transactions";

export const URL_TEMPLATES = {
  LOGIN: `${AuthUrlRoute}/login`,
  REGISTER: `${AuthUrlRoute}/register`,
  REFRESH: `${AuthUrlRoute}/refresh`,
  CHANGE_PASSWORD: `${AuthUrlRoute}/changePassword`,

  CHANGE_INFORMATION: `${UserUrlRoute}/self`,
  GET_ME: `${UserUrlRoute}/self`,

  GET_CATEGORIES: CategoryUrlRoute,
  CREATE_CATEGORY: `${CategoryUrlRoute}`,
  DELETE_CATEGORY: (id: number) => `${CategoryUrlRoute}/${id}`,
  UPDATE_CATEGORY: (id: number) => `${CategoryUrlRoute}/${id}`,

  GET_TRANSACTIONS: TransactionUrlRoute,
  CREATE_TRANSACTIONS: TransactionUrlRoute,
};

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
        AuthService.logout();
      }
    }

    throw error;
  },
);

export default instance;
