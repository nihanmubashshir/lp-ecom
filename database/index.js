"use strict";
const { Client } = require("pg");

const { createProductTable } = require("./buildDb");
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "m_sh",
  password: "",
  database: "m_sh",
});
async function ConnectWithDB() {
  try {
    await client.connect();
    console.log("Database connection formed");
    await addProduct({ name: "test", description: "tes description" }, client);
  } catch (e) {
    console.error(`${e}`);
  }
}

async function addProduct({ name, description }, client) {
  /**
   * Takes name and description and create a product row returns the product id;
   */

  let query = `INSERT INTO product (id, name, description)
                VALUES (DEFAULT,'${name}', '${description}')
                RETURNING *`;
  try {
    const result = await client.query(query);
    console.log(result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error("Error executing query:", error);
    return undefined;
  }
}

const s = ConnectWithDB();
module.exports = { addProduct };
