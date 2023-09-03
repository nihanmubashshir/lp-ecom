import { UrlPattern } from "../types";
import express from "express";

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
    console.log(httpVerb, url);
    switch (httpVerb.toUpperCase()) {
      case "GET":
        app.get(url, (req, res) => {
          const params = req.params;
          const result = urlPattern[pattern](params);
          res.status(200);
          res.type("application/json");
          res.json(result);
        });
        break;

      case "POST":
        throw new Error(`${httpVerb} not implemented yet`);
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
