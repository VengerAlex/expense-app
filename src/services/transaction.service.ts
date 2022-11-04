import axios, { URL_TEMPLATES } from "../api/index";
import {
  ITransaction,
  ITransactionDto,
} from "../store/slices/transaction/transaction.interface";
import { SORT } from "../utils/types";

class TransactionService {
  async getAll(
    dateOrder: SORT,
    idOrder: SORT,
    searchValue: string | null,
    categoryId: string | null,
  ) {
    const params = new URLSearchParams();
    params.append("_sort", "date");
    params.append("_order", dateOrder);
    params.append("_sort", "id");
    params.append("_order", idOrder);

    if (searchValue) {
      params.append("label[contains]", searchValue);
    }
    if (categoryId) {
      params.append("categoryId", categoryId);
    }

    const response = await axios.get(`${URL_TEMPLATES.GET_TRANSACTIONS}`, {
      params,
    });

    return response;
  }

  async create(dto: ITransactionDto) {
    const { data } = await axios.post<ITransactionDto, { data: ITransaction }>(
      URL_TEMPLATES.CREATE_TRANSACTIONS,
      dto,
    );

    return data;
  }

  async delete(id: number) {
    const { data } = await axios.delete<number, { data: ITransaction }>(
      URL_TEMPLATES.DELETE_TRANSACTIONS(id),
    );

    return data;
  }
}

export default new TransactionService();
