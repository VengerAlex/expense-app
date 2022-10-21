import axios, { URL_TEMPLATES } from "../api/index";
import { ICategory } from "../store/slices/category/category.interface";

class CategoryService {
  async getAll() {
    const response = await axios.get<ICategory[]>(URL_TEMPLATES.GET_CATEGORIES);

    return response;
  }

  async deleteOne(id: number) {
    const response = await axios.delete(URL_TEMPLATES.DELETE_CATEGORY(id));

    return response;
  }
}

export default new CategoryService();
