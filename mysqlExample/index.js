const express = require("express");
const mysql = require("mysql");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
const createuser = require("./api/createuser");
const getuser = require("./api/getuser");
const getallusers = require("./api/getallusers");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "sampleAPP_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post("/user", (req, res) => createuser(req, res, connection));
app.get("/allusers", (req, res) => getallusers(req, res, connection));
app.get("/singleuser", (req, res) => getuser(req, res, connection));
app.listen(port, console.log(`listening on https://localhost:${port}`));
