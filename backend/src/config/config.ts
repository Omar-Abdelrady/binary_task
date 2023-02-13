import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const {
  PORT,
  NODE_ENV,
  PGPASSWORD,
  PGPORT,
  PGUSER,
  PGDATABASE,
  PGDATABASE_TEST,
  PGHOST,
  DB_DRIVER,
  JWT_SECRET,
} = process.env;
export default {
  jwt_secret: JWT_SECRET,
  port: PORT,
  host: PGHOST,
  dbport: PGPORT,
  database: NODE_ENV === "dev" ? PGDATABASE : PGDATABASE_TEST,
  user: PGUSER,
  db_driver: DB_DRIVER,
  password: PGPASSWORD,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
