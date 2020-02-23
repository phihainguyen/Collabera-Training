const bcrypt = require('bcrypt')
const fn = (req, res, model, callback) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {
        return model.create({
            email: req.body.email,
            password: hash,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.state
        })
    }).then(dbres => {
        console.log(dbres.toJSON());
        callback(dbres.toJSON())
    }).catch((err) => {
        if (err) {
            res.send(err)
            throw err;
        }
    });
    
}

module.exports = fn