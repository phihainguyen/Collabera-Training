const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')
class User extends Model {}

  User.init({
    username: DataTypes.CHAR,
    password: DataTypes.CHAR
  }, { sequelize, modelName: 'user' });

module.exports = User