import { Sequelize } from "sequelize";


const dataBase = new Sequelize('appsys', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: "mysql",
  define: {
    timestamps: true
  }
})

export default dataBase