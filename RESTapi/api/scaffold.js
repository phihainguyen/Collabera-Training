const axios = require("axios");
const fn = (req, res) => {
  axios.get("https://reqres.in/api/users").then(resp => {
    console.log(resp.data);
    res.send(resp.data);
  });
};
module.exports = fn;
