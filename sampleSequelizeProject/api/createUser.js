const fn = (req, res, model) => {
    model.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(dbres => {
        console.log(dbres.toJSON());
        res.send(dbres.toJSON())
    }).catch((err) => {
        if (err) {
            res.send(err)
            throw err;
        }
    });
}

module.exports = fn