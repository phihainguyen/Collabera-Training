
const fn = (req, res, db) => {
    const myobj = { 
        email: req.body.email,
        name: req.body.name, 
        address: req.body.address 
    };
    db.collection("users").insertOne(myobj, function(err, result) {
        if (err) {
            res.send(err)
            throw err;
        }
        console.log("1 document inserted, mongo result: " + result);
        res.send("1 document inserted")
    });
}

module.exports = fn