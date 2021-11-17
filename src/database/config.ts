require("dotenv").config();
import { Sequelize } from "sequelize";

const host = process.env.DATABASE_URL as string;

const sequelize = new Sequelize(host, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export default sequelize;
