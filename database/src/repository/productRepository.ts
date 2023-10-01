import type { Pool } from "pg";
import Repository from ".";

class ProductRepository extends Repository {
  constructor(pool: Pool) {
    super(pool);
  }

  async delete() {
    throw Error("Not implemented yet");
  }
  async update() {
    throw Error("Not implemented yet");
  }

  async retrieve({ id }: { id: string }) {
    try {
      const query = {
        text: "SELECT * from product where id = $1",
        values: [id],
      };

      const result = await this.pool.query(query);

      if (!result.rows[0]) {
        throw new Error(`No product was found with the id ${id}`);
      }
      return result.rows[0];
    } catch (error) {
      console.error("DATABSE ERROR: Error retrieving product:", error);
      throw error;
    }
  }

  async addProduct({
    title,
    description = undefined,
  }: {
    title: string;
    description?: string | undefined;
  }) {
    try {
      const query = {
        text: "INSERT INTO product (name, description) VALUES ($1, $2) RETURNING *",
        values: [title, description],
      };

      const result = await this.pool.query(query);
      return result.rows[0];
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  }
}

export default ProductRepository;
