import { Sequelize } from "sequelize-typescript";
import { Users } from "../models/users";
import { EmailVerificationCode } from "../models/emailVerificationCode";
const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "password",
  database: "binery",
  logging: false,
  models: [Users, EmailVerificationCode],
});

export default connection;
