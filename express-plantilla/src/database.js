import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "test",
  connectionLimit: 10,
});

export default pool;
