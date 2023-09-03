import express from "express";
const PORT = 3333;
const app = express();

import urlHandler from "./utils/path";
import { UrlMappedFunction, UrlPattern } from "./types";
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const createProducts: UrlMappedFunction = async (params, data) => {
  console.log(params, data);

  await delay(30);
  return {
    status: 200,
    data: data as Object,
  };
};

const urlPattern: UrlPattern = {
  "POST /products/:id": createProducts,
};

urlHandler(app, urlPattern);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
