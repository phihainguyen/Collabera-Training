const express = require("express");
const app = express();
const path = require("path");
const { html, export2 } = require("./html-view");
//or another method would be, but js may not be supporting this for all browser but react it would be something else
// import { html } from "./html-view";

//app.set is setting a middleware for the rendering engine which is very common for express because it has lots of middleware
const port = 3000;
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => res.render("example"));
app.get("/route1", (req, res) => res.send("hello from route 1"));
app.get("/unit/:val", (req, res) => res.send(html(req.params)));
app.get("/html", (req, res) => res.send(export2()));

app.get(
  "/example/b",
  function(req, res, next) {
    console.log("the response will be sent by the next function ...");
    next();
  },
  function(req, res) {
    const str = "hello I am passing something through";
    res.send(html(str));
  }
);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
