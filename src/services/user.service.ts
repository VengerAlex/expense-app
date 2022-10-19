import axios, { getUserUrl } from "../api/index";

class UserService {
  async getMe() {
    const response = await axios.get(getUserUrl("self"));

    return response;
  }

  async changeInformation(username: string, displayName: string) {
    const response = await axios.patch(getUserUrl("self"), {
      username,
      displayName,
    });

    console.log(response, "RESPONSE");

    return response;
  }
}

export default new UserService();
