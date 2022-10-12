import axios, { getAuthUrl } from "../api/index";
import { ITokens } from "../store/reducers/user/user.interface";
import { IRegisterResponse } from "../store/reducers/auth/auth.interface";
import localstorageService from "./localstorage.service";

class AuthService {
  async login(username: string, password: string) {
    const response = await axios.post<ITokens>(getAuthUrl("login"), {
      username,
      password,
    });

    if (response.data.accessToken) {
      localstorageService.set("accessToken", response.data.accessToken);
      localstorageService.set("refreshToken", response.data.refreshToken);
    }

    return response;
  }

  async register(username: string, password: string, displayName: string) {
    const response = await axios.post<IRegisterResponse>(
      getAuthUrl("register"),
      { username, password, displayName },
    );

    return response;
  }

  async getNewTokens() {
    const response = await axios.post(getAuthUrl("refresh"), {
      withCredentials: true,
    });

    localstorageService.set("accessToken", response.data.accessToken);
  }
}

export default new AuthService();
