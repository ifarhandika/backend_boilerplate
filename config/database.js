import Sequelize from "sequelize"

export const db = new Sequelize("dbBase", "root", "Farhandika#11", {
  host: "localhost",
  dialect: "mysql",
})
