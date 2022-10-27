import axios, { URL_TEMPLATES } from "../api/index";
import {
  ITransaction,
  ITransactionDto,
} from "../store/slices/transaction/transaction.interface";

class TransactionService {
  async getAll() {
    const response = await axios.get(URL_TEMPLATES.GET_TRANSACTIONS);

    return response;
  }

  async create(dto: ITransactionDto) {
    const { data } = await axios.post<ITransactionDto, { data: ITransaction }>(
      URL_TEMPLATES.CREATE_TRANSACTIONS,
      dto,
    );

    return data;
  }
}

export default new TransactionService();
