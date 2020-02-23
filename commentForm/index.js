const express = require("express");
const path = require("path");
const app = express();
const port = 9090;
const fs = require("fs");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const wr = JSON.stringify(req.body);
  // const time = new Date(dateString);

  fs.appendFile("comment.txt", `${wr} ${new Date()} \r\n`, function(err) {
    if (err) throw err;
    console.log("Updated!");
  });
  console.log(req.body);

  res.send(req.body);
});
app.listen(port, () => console.log(`listening on PORT ${port}`));
