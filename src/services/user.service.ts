import axios, { getUserUrl } from "../api/index";

class UserService {
  async getMe() {
    const response = await axios.get(getUserUrl("self"));

    return response;
  }

  async changeInformation(username: string, displayName: string) {
    const response = await axios.patch(
      getUserUrl("self"),
      {
        username,
        displayName,
      },
      {
        headers: { "Content-type": "application/json; charset=UTF-8" },
      },
    );

    return response;
  }
}

export default new UserService();
