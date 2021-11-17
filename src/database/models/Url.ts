import Sequelize from "sequelize";
import database from "../config";

const Url = database.define("url", {
  originalUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  shortUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Url;
