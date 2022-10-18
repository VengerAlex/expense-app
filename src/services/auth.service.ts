import axios, { getAuthUrl } from "../api/index";
import { localstorageAuthService } from "./localstorage.service";
import {
  IRegisterThunkResponse,
  ITokens,
} from "../store/reducers/auth/auth.interface";

class AuthService {
  async register(username: string, password: string, displayName: string) {
    const response = await axios.post<IRegisterThunkResponse>(
      getAuthUrl("register"),
      { username, password, displayName },
    );

    return response;
  }

  async login(username: string, password: string) {
    const response = await axios.post<ITokens>(getAuthUrl("login"), {
      username,
      password,
    });

    if (response.data.accessToken && response.data.refreshToken) {
      localstorageAuthService.setAccessToken(response.data.accessToken);
      localstorageAuthService.setRefreshToken(response.data.refreshToken);
    }

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

  async logout() {
    const response = await axios.get(getAuthUrl("logout"));

    localstorageAuthService.clearStorage();

    return response;
  }

  async changePassword(oldPassword: string, newPassword: string) {
    const response = await axios.patch(getAuthUrl("changePassword"), {
      oldPassword,
      newPassword,
    });

    console.log(response);

    return response;
  }
}

export default new AuthService();
