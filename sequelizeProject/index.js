const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const sequelize = require("./database");
//session is important for maintaining a user's session when they login
const session = require("express-session");

app.use(session({ secret: "Shh, its a secret!" }));
//================== ROUTES=========================//
const createUser = require("./api/createUser");
const authenticate = require("./api/authenticate");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const authenticated = [];
//==================MODELS=========================//
const User = require("./models/user");

app.use("/css/style.css", express.static(path.join(__dirname, "css")));

//============USED TO SERVE PAGES TO BROWSER=================//

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/login.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/create.html"));
});
app.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname + "/views/login.html"))
);
app.get("/members", (req, res) => {
  if (session.authenticated === true) {
    return res.sendFile(path.join(__dirname + "/views/members.html"));
  } else {
    //the 301 status will allow you to redirect the page
    res.redirect(301, "/");
  }
});
//==================POST route=========================//

app.post("/signup", (req, res) => {
  createUser(req, res, User, () => {
    res.sendFile(path.join(__dirname + "/views/members.html"));
  });
});

app.post("/login", (req, res) => {
  authenticate(req, res, User, session, response => {
    //==============for authentications=========//
    if (response !== "error") {
      res.status(500).sendFile(path.join(__dirname + "views/login.html"));
    } else if (response === "noAuth") {
      res.status(401).sendFile(path.join(__dirname + "/views/login.html"));
    } else {
      res.redirect(301, "/members");
    }
  });
});

//=====================for logging out===================//
app.post("/logout", (req, res) => {
  session.authenticated = false;
  res.redirect(301, "/");
});

//==================API route=========================//
app.post("/api/user", (req, res) => {
  createUser(req, res, User, response => {
    res.send(response);
  });
});
//==================shutdown procedure code=========================//
process.on("SIGTERM", function() {
  app.close(() => {
    connection.end();
  });
  setTimeout(() => {
    console.error(
      "couldnt close connections in time, forcefully shutting down"
    );
    process.exit(1);
  }, 30 * 1000);
});

//==================sequelize syncs the data=========================//
sequelize.sync().then(() => {
  app.listen(port, console.log(`listening on https://localhost:${port}`));
});
