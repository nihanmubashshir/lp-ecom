import type { Pool } from "pg";

class ProductRepository {
  private pool: Pool;
  constructor(pool: Pool) {
    this.pool = pool;
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
