import axios, { getUserUrl } from "../api/index";
import { IUser } from "../utils/types";

class UserService {
  async getMe() {
    const response = await axios.get<IUser>(getUserUrl("self"));

    return response;
  }

  async changeInformation(username: string, displayName: string) {
    const response = await axios.patch<IUser>(getUserUrl("self"), {
      username,
      displayName,
    });

    return response;
  }
}

export default new UserService();
