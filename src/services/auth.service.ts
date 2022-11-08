import axios, { URL_TEMPLATES } from "../api/index";
import { localstorageAuthService } from "./localstorage.service";
import {
  IChangePassword,
  ILoginProps,
  ILoginResponse,
  INewTokenResponse,
  IRegisterData,
  IRegisterProps,
} from "../store/slices/auth/auth.interface";

class AuthService {
  async register(dto: IRegisterProps) {
    const { data, status } = await axios.post<IRegisterData>(
      URL_TEMPLATES.REGISTER,
      dto,
    );

    return { data, status };
  }

  async login(dto: ILoginProps) {
    const { data } = await axios.post<ILoginProps, { data: ILoginResponse }>(
      URL_TEMPLATES.LOGIN,
      dto,
    );

    if (data.accessToken && data.refreshToken) {
      localstorageAuthService.setAccessToken(data.accessToken);
      localstorageAuthService.setRefreshToken(data.refreshToken);
    }

    return data;
  }

  async getNewTokens() {
    const refreshToken = localstorageAuthService.getRefreshToken();

    const { data } = await axios.post<void, { data: INewTokenResponse }>(
      URL_TEMPLATES.REFRESH,
      {
        refreshToken,
      },
    );

    if (data.accessToken) {
      localstorageAuthService.setAccessToken(data.accessToken);
    }

    return data;
  }

  logout() {
    localstorageAuthService.clearStorage();
  }

  async changePassword(dto: IChangePassword) {
    await axios.patch<IChangePassword>(URL_TEMPLATES.CHANGE_PASSWORD, dto);
  }
}

export default new AuthService();
