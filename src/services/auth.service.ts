import axios, { getAuthUrl } from "../api/index";
import { ITokens } from "../store/reducers/user/user.interface";
import { IRegisterResponse } from "../store/reducers/auth/auth.interface";
import { localstorageAuthService } from "./localstorage.service";

class AuthService {
  async login(username: string, password: string) {
    const response = await axios.post<ITokens>(getAuthUrl("login"), {
      username,
      password,
    });

    if (response.data.accessToken) {
      localstorageAuthService.setAccessToken(response.data.accessToken);
      localstorageAuthService.setRefreshToken(response.data.refreshToken);
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
    const refreshToken = localstorageAuthService.getRefreshToken();

    const response = await axios.post(getAuthUrl("refresh"), {
      refreshToken,
    });

    if (response.data.accessToken) {
      localstorageAuthService.setAccessToken(response.data.accessToken);
      localstorageAuthService.setRefreshToken(response.data.refreshToken);
    }

    return response;
  }

  logout() {
    localstorageAuthService.clearStorage();
  }
}

export default new AuthService();
