const fn = (req, res, model, callback) => {
  model
    .create({
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.state
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
