const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
// const userClass = require("./exampleClass");
// const user = new userClass("sally", 12);
// console.log(user);

const sequelize = new Sequelize("sampleAPP_db", "root", "password", {
  host: "localhost",
  dialect: "mysql"
});
class User extends Model {}
User.init(
  {
    username: DataTypes.CHAR,
    birthday: DataTypes.DATE
  },
  { sequelize, modelName: "user" }
);

sequelize
  .sync()
  .then(() =>
    User.create({
      username: "janedoe",
      birthday: new Date(1980, 6, 20)
    })
  )
  .then(jane => {
    console.log(jane.toJSON());
  });

const animal = require("./classPractice");
const chicken = new animal("chicken", 12, true);
console.log(chicken);
