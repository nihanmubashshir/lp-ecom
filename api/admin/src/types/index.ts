import { RequestHandler } from "express";
import z, { ZodSchema } from "zod";

export const ProductCreationData = z
  .object({
    title: z.string().nonempty("Title is required"),
    description: z.string(),
  })
  .partial({
    description: true,
  });

export namespace Product {
  export type ProductCreationData = z.infer<typeof ProductCreationData>;
}

export type UrlMappedFunction = (
  params: any,
  data?: AnalyserNode
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
