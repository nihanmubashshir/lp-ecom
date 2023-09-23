import express from "express";
import urlHandler from "./utils/path";
import { urlPattern } from "./urlPattern";
const PORT = 3333;
const app = express();
urlHandler(app, urlPattern);

import { Product } from "@ecom/database";

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
