const axios = require("axios");
const regex = /[!@#$%^&*(),.?:{}<>]/g;
const fn = (req, res) => {
  axios
    .post("https://reqres.in/api/users/", {
      name: req.body.name ? req.body.name.replace(regex, "") : "",
      job: req.body.job ? req.body.job.replace(regex, "") : ""
    })
    .then(resp => {
      res.send(resp.data);
    })
    .catch(err => {
      res.send(err);
    });
};
module.exports = fn;
