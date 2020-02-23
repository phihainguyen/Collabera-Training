const bcrypt = require('bcrypt')

const fn = (req, res, model, session, callback) => {
    model.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbres => {
        if (!dbres) {
            callback('error')
        }
        else {
            let userResponse = dbres.toJSON();
            bcrypt.compare(req.body.password, userResponse.password).then((result) => {
                if (result === true) {
                    session.authenticated = true
                    callback(userResponse)
                } else {
                    session.authenticated = false
                    callback('noauth')
                }
            }).catch((err) => {
                session.authenticated = false
                callback('error')
            })
        }
    }).catch((err) => {
        if (err) {
            res.send(err)
            throw err;
        }
    });
    
}

module.exports = fn