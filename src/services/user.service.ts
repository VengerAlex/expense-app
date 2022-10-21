import axios, { URL_TEMPLATES } from "../api/index";
import { IUser } from "../utils/types";

class UserService {
  async getMe() {
    const response = await axios.get<IUser>(URL_TEMPLATES.GET_ME);

    return response;
  }

  async changeInformation(username: string, displayName: string) {
    const response = await axios.patch<IUser>(
      URL_TEMPLATES.CHANGE_INFORMATION,
      {
        username,
        displayName,
      },
    );

    return response;
  }
}

export default new UserService();
