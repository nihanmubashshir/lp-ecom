import { RequestHandler } from "express";
import z, { ZodSchema } from "zod";
/**
 * TODO: Make better checks for id and make sure only numbers are acceptable.
 */

export const ProductRetrieve = z.object({
  id: z.string().nonempty("Id is required"),
});

export const ProductCreationData = z
  .object({
    title: z.string().nonempty("Title is required"),
    description: z.string(),
  })
  .partial({
    description: true,
  });

export namespace ProductData {
  export type ProductCreationData = z.infer<typeof ProductCreationData>;
}

export type UrlMappedFunction<T = any> = (
  params: any,
  data?: T
) => Promise<{
  data: Object;
  status: number;
  message?: string;
}>;

export interface UrlPattern {
  [key: string]: {
    validatorSchema: RequestSchemas;
    handler: UrlMappedFunction;
  };
}

export interface RequestSchemas {
  params?: ZodSchema;
  query?: ZodSchema;
  body?: ZodSchema;
}
