import { Sequelize } from "sequelize-typescript";
import { Users } from "../models/users";
const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "password",
  database: "binery",
  logging: false,
  models: [Users],
});

export default connection;
