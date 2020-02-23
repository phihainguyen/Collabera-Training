const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const scaffold = require("./api/scaffold.js");
const singleUser = require("./api/singleUser.js");
const listUser = require("./api/listUser.js");
const createuser = require("./api/createuser.js");
const jwt = require("express-jwt");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/users", scaffold);
//below is for singleUser.js
app.get("/users/:userid", singleUser);
app.get("/users?page=", listUser);

app.post("/users", createuser);
// app.get("*", error404);

app.get("/protected", jwt({ secret: "shhhhhhared-secret" }), function(
  req,
  res
) {
  if (!req.user.admin) return res.sendStatus(401);
  res.sendStatus(200);
});

app.listen(port, console.log(`listening on http://localhost:${port}`));
