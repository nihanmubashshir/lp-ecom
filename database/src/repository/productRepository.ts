import type { Pool } from "pg";
import Repository from ".";

class ProductRepository extends Repository {
  constructor(pool: Pool) {
    super(pool);
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
