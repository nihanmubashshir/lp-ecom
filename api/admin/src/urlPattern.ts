import Product from "./handlerFunctions/product";
import { UrlPattern, ProductCreationData, UrlMappedFunction } from "./types";
import { Product as productRepository } from "@ecom/database";
import z from "zod";

const Test: UrlMappedFunction = async (params, data) => {
  return {
    status: 200,
    data: data as Object,
  };
};

export const urlPattern: UrlPattern = {
  "POST /products/": {
    validatorSchema: {
      body: ProductCreationData,
    },
    handler: new Product(productRepository).createProducts,
  },
};
