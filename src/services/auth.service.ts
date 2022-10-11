import axios, { getAuthUrl } from "../api/index";
import { ITokens } from "../store/reducers/user/user.interface";

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
}

export default new AuthService();
