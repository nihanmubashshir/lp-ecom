const createProductTable = async (client) => {
  let query = `CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(1000) NOT NULL,
    description TEXT
);
`;
  try {
    console.log(query);
    const result = await client.query(query);
    console.log("Query result:", result.rows);
  } catch (error) {
    console.error("Error executing query:", error);
  }
};

module.exports = {
  createProductTable,
};
