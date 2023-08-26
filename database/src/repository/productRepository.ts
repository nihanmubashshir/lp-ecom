import type { Pool } from "pg";

class ProductRepository {
  private pool: Pool;
  constructor(pool: Pool) {
    this.pool = pool;
  }

  async addProduct(title: string, description: string) {
    let query = `INSERT INTO product (id, name, description)
    VALUES (DEFAULT,'${title}', '${description}')
    RETURNING *`;

    return this.pool.query(query);
  }
}

export default ProductRepository;
