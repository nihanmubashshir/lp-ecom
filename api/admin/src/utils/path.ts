import { validateRequest } from "zod-express-middleware";
import { UrlPattern } from "../types";
import express from "express";

/**
 * Takes an express app and an urlPattern,
 * url Pattern is a map from api endpoint to an object containing the validators and the handler function.
 * Template:
 * {
 *  'HTTP-VERB /endpoint_in_express_syntax' : {
 *  validatorSchema: schema for zod to validate the parameters, body and query.
 *  handler: A function that should return an object containing the status code and data to be sent to the browser.
 * }
 *}
 */

export default function urlHandler(
  app: express.Application,
  urlPattern: UrlPattern
): void {
  const patterns = Object.keys(urlPattern);

  if (!patterns.length) {
    throw new Error(
      "urlPattern needs to have at least one URL mapped to a handler"
    );
  }

  patterns.forEach((pattern) => {
    const [httpVerb, url] = pattern.split(" ");
    switch (httpVerb.toUpperCase()) {
      case "GET":
        app.get(
          url,
          validateRequest(urlPattern[pattern].validatorSchema),

          async (req, res) => {
            const params = req.params;
            const result = await urlPattern[pattern].handler(params);
            res.status(result.status);
            res.type("application/json");
            res.json(result.data);
          }
        );
        break;

      case "POST":
        app.use(express.json());

        app.post(
          url,
          validateRequest(urlPattern[pattern].validatorSchema),

          async (req, res) => {
            const params = req.params;
            const data = req.body;
            const result = await urlPattern[pattern].handler(params, data);
            res.status(result.status);
            res.type("application/json");
            res.json(result.data);
          }
        );
        break;

      case "PUT":
        throw new Error(`${httpVerb} not implemented yet`);
        break;

      case "DEL":
        throw new Error(`${httpVerb} not implemented yet`);
        break;
    }
  });
}
