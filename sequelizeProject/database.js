const { Sequelize } = require("sequelize");

// Option 1: Passing parameters separately
const sequelize = new Sequelize("sampleAPP_db", "root", "password", {
  host: "localhost",
  dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

module.exports = sequelize;
