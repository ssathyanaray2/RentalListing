import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

// I always use createPool as it creates a pool of connections and closes them when not in use and also provides good performance.
const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
  });

  export default pool;