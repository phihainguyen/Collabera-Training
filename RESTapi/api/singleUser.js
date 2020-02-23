const axios = require("axios");
const fn = (req, res) => {
  axios
    .get("https://reqres.in/api/users/" + req.params.userid)
    .then(resp => {
      console.log(resp);
      res.send(resp.data.data);
    })
    .catch(err => {
      res.send(err);
    });
};
module.exports = fn;
