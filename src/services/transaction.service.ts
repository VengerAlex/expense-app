import axios, { URL_TEMPLATES } from "../api/index";

class TransactionService {
  async getAll() {
    const response = await axios.get(URL_TEMPLATES.GET_TRANSACTIONS);

    return response;
  }
}

export default new TransactionService();
