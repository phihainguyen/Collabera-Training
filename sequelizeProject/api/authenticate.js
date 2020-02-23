//==========USING BCRYPT FOR CHECKING OUR PASSWORD
const bcrypt = require("bcrypt");
const fn = (req, res, model, callback) => {
  model
    .findOne({
      where: {
        email: req.body.email
      }
    })
    .then(dbres => {
      if (!dbres) {
        callback("error");
      } else {
        //this is for assaulting your password to make it hard for hacking

        let userResponse = dbres.toJSON();
        bcrypt
          .compare(req.body.password, userResponse.password)
          .then(result => {
            if (result === true) {
              callback(userResponse);
            } else {
              callback("noAuth");
            }
          })
          .catch(err => {
            callback("error");
          });
      }
    })

    //     .catch
    //     if (userResponse.password === req.body.password) {

    //     } else {
    //       callback("error");
    //     }
    //   }
    // })
    .catch(err => {
      if (err) {
        res.send(err);
        throw err;
      }
    });
};

module.exports = fn;
