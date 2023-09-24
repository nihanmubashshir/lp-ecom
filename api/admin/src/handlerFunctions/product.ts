import type { ProductData, UrlMappedFunction } from "../types";
import type ProductRepository from "@ecom/database/dist/repository/productRepository";
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

class Product {
  repository: ProductRepository;
  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  createProducts: UrlMappedFunction<ProductData.ProductCreationData> = async (
    params,
    data
  ) => {
    let result;
    if (data) {
      try {
        result = await this.repository.addProduct(data);
      } catch (e) {
        console.error("Error Making Products", e);
        return {
          status: 500,
          data: {},
        };
      }
    }
    return {
      status: 200,
      data: result as Object,
    };
  };
  retrieveProducts: UrlMappedFunction = async (params, data) => {
    return {
      status: 200,
      data: {},
    };
  };
}

export default Product;
