import axios from 'axios';
import { IProduct } from '../types/product';

const URL = 'https://fakestoreapi.com/products/';

export class ProductService {
  static async getAllProducts() {
    return await axios.get<IProduct[]>(URL).then((response) => response.data);
  }

  static async getSingleProduct(id: number) {
    return await axios.get<IProduct>(URL).then((response) => response.data);
  }

  static async getAllCategories() {
    return await axios
      .get<string[]>(`${URL}categories/`)
      .then((response) => response.data);
  }
}
