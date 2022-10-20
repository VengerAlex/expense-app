import axios, { URL_TEMPLATES } from "../api/index";
import { localstorageAuthService } from "./localstorage.service";
import {
  ILoginResponse,
  IRegisterThunkResponse,
} from "../store/slices/auth/auth.interface";

class AuthService {
  async register(username: string, password: string, displayName: string) {
    const response = await axios.post<IRegisterThunkResponse>(
      URL_TEMPLATES.REGISTER,
      { username, password, displayName },
    );

    return response.status;
  }

  async login(username: string, password: string) {
    const response = await axios.post<ILoginResponse>(URL_TEMPLATES.LOGIN, {
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

    const response = await axios.post(URL_TEMPLATES.REFRESH, {
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

  async changePassword(oldPassword: string, newPassword: string) {
    const response = await axios.patch(URL_TEMPLATES.CHANGE_PASSWORD, {
      oldPassword,
      newPassword,
    });

    return response;
  }
}

export default new AuthService();
