import { Sequelize, DataTypes } from "sequelize"
import { db } from "../../config/database.js"

export const usersModel = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.fn("current_timestamp"),
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  active_status: {
    type: DataTypes.ENUM({
      values: ["1", "-1"],
    }),
    allowNull: false,
    defaultValue: "1",
  },
})
