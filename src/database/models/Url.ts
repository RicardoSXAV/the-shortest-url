import Sequelize, { Model } from "sequelize";
import database from "../config";

interface UrlAttributes extends Model {
  originalUrl: string;
  shortUrl: string;
}

const Url = database.define<UrlAttributes>("url", {
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
