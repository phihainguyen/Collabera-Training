const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;
const sequelize = require("./database");
const session = require("express-session");
//routes
const createUser = require("./api/createUser");
const authenticate = require("./api/authenticate");
app.use(session({ secret: "Shh, its a secret!" }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//models
const User = require("./models/user");

//Put routes here
//get
//Something you wouldnt do. try to figure out how to use express.static instead
app.get("/css/custom.css", (req, res) =>
  res.sendFile(path.join(__dirname + "/css/custom.css"))
);

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname + "/views/login.html"))
);
app.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname + "/views/login.html"))
);
app.get("/register", (req, res) =>
  res.sendFile(path.join(__dirname + "/views/create.html"))
);
app.get("/members", (req, res) => {
  if (session.authenticated === true) {
    return res.sendFile(path.join(__dirname + "/views/members.html"));
  } else {
    res.redirect(301, "/");
  }
});

//post
app.post("/register", (req, res) => {
  createUser(req, res, User, () => {
    res.sendFile(path.join(__dirname + "/views/members.html"));
  });
});

app.post("/login", (req, res) => {
  authenticate(req, res, User, session, response => {
    if (response === "error") {
      res.status(500).sendFile(path.join(__dirname + "/views/login.html"));
    } else if (response === "noauth") {
      res.status(401).sendFile(path.join(__dirname + "/views/login.html"));
    } else {
      res.redirect(301, "/members");
    }
  });
});

app.post("/logout", (req, res) => {
  session.authenticated = false;
  res.redirect(301, "/");
});

//api
app.post("/api/user", (req, res) => {
  createUser(req, res, User, response => {
    res.send(response);
  });
});

//shutdown procedure code
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

sequelize.sync().then(() => {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
//sequelize syncs the data
