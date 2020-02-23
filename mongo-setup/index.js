const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const createuser = require("./api/createuser");
const getallusers = require("./api/getuser");
const getuser = require("./api/singleuser");

//================Body-Parser===========================//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//================mongoDB setup===========================//

const mongo = require("mongodb");
//boiler plate code is found at: https://www.w3schools.com/nodejs/nodejs_mongodb_create_db.asp
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, database) {
  if (err) throw err;
  const db = database.db("testdb");
  //PUT ROUTES HERE
  //below by passing db we have to pass it as a function rather than using app.post("/user", createuser);
  //because we want our database tied to our routes we need to place our routes inside of the MongoClient function

  app.post("/user", (req, res) => createuser(req, res, db));
  app.get("/allusers", (req, res) => getallusers(req, res, db));
  app.get("/singleuser", (req, res) => getuser(req, res, db));

  console.log("Database created!");
  //below will allow to close the app out when node is terminated via ctrl+c other means
  //process.on will provide a safe way of closing down the app by giving you a fail safe of shutting down in 30s if the first function did not close your program
  process.on("SIGTERM", function() {
    app.close(() => {
      db.close();
    });
    setTimeout(() => {
      console.error(
        "couldn't close connections in time, forecfully shutting down"
      );
      process.exit(1);
    }, 30 * 1000);
  });

  //================SERVER CONNECTION===========================//
  app.listen(port, console.log(`listening on localhost:${port}`));
});

//================mongoDB setup===========================//
