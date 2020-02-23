const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')
class User extends Model {}

  User.init({
    email: DataTypes.CHAR,
    password: DataTypes.CHAR,
    firstname: DataTypes.CHAR,
    lastname: DataTypes.CHAR,
    address: DataTypes.CHAR,
    city: DataTypes.CHAR,
    state: DataTypes.CHAR(2),
    zip: DataTypes.CHAR(5)
  }, { sequelize, modelName: 'user' });

module.exports = User