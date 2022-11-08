import axios, { URL_TEMPLATES } from "../api/index";
import {
  ICategory,
  ICategoryDto,
} from "../store/slices/category/category.interface";

class CategoryService {
  async getAll(label?: string) {
    const searchedValue = label ? `?label[contains]=${label}` : "";

    const response = await axios.get<ICategory[]>(
      `${URL_TEMPLATES.GET_CATEGORIES}${searchedValue}`,
    );

    return response;
  }

  async create(dto: ICategoryDto) {
    const { data } = await axios.post<ICategoryDto, { data: ICategory }>(
      URL_TEMPLATES.CREATE_CATEGORY,
      dto,
    );

    return data;
  }

  async deleteOne(id: number) {
    const { data } = await axios.delete<number, { data: ICategory }>(
      URL_TEMPLATES.DELETE_CATEGORY(id),
    );

    return data;
  }

  async update(id: number, label: string) {
    const { data } = await axios.patch(URL_TEMPLATES.UPDATE_CATEGORY(id), {
      label,
    });

    return data;
  }
}

export default new CategoryService();
