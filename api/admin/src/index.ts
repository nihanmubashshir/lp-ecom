import express from "express";
const PORT = 3333;
const app = express();

import urlHandler from "./utils/path";
import { UrlPattern } from "./types";

const createProducts = () => {
  console.log("not yet implemented");
  return [1];
};

const urlPattern: UrlPattern = {
  "GET /products/:id/data/:mx": createProducts,
};

urlHandler(app, urlPattern);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
