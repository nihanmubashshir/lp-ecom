import { Product } from "@ecom/database";
import type { ProductData, UrlMappedFunction } from "../types";
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const createProducts: UrlMappedFunction<
  ProductData.ProductCreationData
> = async (params, data) => {
  let result;
  if (data) {
    try {
      result = await Product.addProduct(data);
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

export const retrieveProducts: UrlMappedFunction = async (params, data) => {
  return {
    status: 200,
    data: {},
  };
};
