import { createProducts } from "./handlerFunctions/product";
import { UrlPattern, ProductCreationData, UrlMappedFunction } from "./types";
import z from "zod";

const Test: UrlMappedFunction = async (params, data) => {
  return {
    status: 200,
    data: data as Object,
  };
};

export const urlPattern: UrlPattern = {
  "POST /products/:id": {
    validatorSchema: {
      body: ProductCreationData,
      params: z.object({
        id: z
          .string()
          .nonempty("Product Id is required")
          .max(10)
          .regex(/^\d+$/, { message: "Product id should only be digits." }),
      }),
    },
    handler: createProducts,
  },
};
