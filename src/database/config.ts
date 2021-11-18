require("dotenv").config();
import { Sequelize } from "sequelize";

const testEnv = process.env.NODE_ENV;
const host = testEnv ? "" : (process.env.DATABASE_URL as string);

const sequelize = new Sequelize(host, {
  host: host,
  dialect: testEnv === "test" ? "sqlite" : "postgres",
  storage: testEnv === "test" ? "./__tests__/database.sqlite" : "",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export default sequelize;
