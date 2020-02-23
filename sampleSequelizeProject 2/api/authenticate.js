const fn = (req, res, model, callback) => {
    model.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbres => {
        if (!dbres) {
            callback('error')
        }
        else {
            let response = dbres.toJSON();
        if (response.password === req.body.password) { 
            callback(response)
            } else {
                callback('error')
            }
        }
        
    }).catch((err) => {
        if (err) {
            res.send(err)
            throw err;
        }
    });
    
}

module.exports = fn