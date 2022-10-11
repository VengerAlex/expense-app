import axios, { getAuthUrl } from "../api/index";
import { ITokens } from "../store/reducers/user/user.interface";
import { IRegisterResponse } from "../store/reducers/auth/auth.interface";

class AuthService {
  async login(username: string, password: string) {
    const response = await axios.post<ITokens>(getAuthUrl("login"), {
      username,
      password,
    });

    if (response.data.accessToken) {
      localStorage.set("accessToken", response.data.accessToken);
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

  async logout() {
    const response = await axios.get(getAuthUrl("logout"));

    localStorage.remove("accessToken");

    return response;
  }
}

export default new AuthService();
