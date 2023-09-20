import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();
import ProductRepository from "./repository/productRepository";

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT as string),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD || "",
  database: process.env.DATABASE_DBNAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

const Product = new ProductRepository(pool);
/**
 * SOLID
 * IOC containers
 * Depenedency Injection containers
 * Function Currying
 */
