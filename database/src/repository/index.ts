import { Pool } from "pg";

class Repository {
  protected pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }
}

export default Repository;
