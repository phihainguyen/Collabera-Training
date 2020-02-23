const axios = require("axios");
const fn = (req, res) => {
  axios
    .get("https://reqres.in/api/users?page=" + req.query.page)
    .then(resp => {
      console.log(resp.data);
      //   res.send(resp.data.data);
    })
    .catch(err => {
      res.send(err);
    });
};
module.exports = fn;
