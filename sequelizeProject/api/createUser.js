//==========USING BCRYPT FOR HASHING OUR PASSWORD

const bcrypt = require("bcrypt");
const saltRounds = 10;

const fn = (req, res, model, callback) => {
  bcrypt
    .hash(req.body.password, saltRounds)
    .then(hash => {
      return model.create({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode
      });
    })
    .then(dbres => {
      console.log(dbres.toJSON());
      callback(dbres.toJSON());
    })
    .catch(err => {
      if (err) {
        res.send(err);
        throw err;
      }
    });
};
module.exports = fn;
