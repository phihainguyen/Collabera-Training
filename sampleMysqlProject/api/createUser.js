
const fn = (req, res, db) => {
    const query = `
        INSERT INTO user (name, email, address)
        VALUES ('${req.body.name}', ${JSON.stringify(req.body.email)}, '${req.body.address}');
    `
    db.query(query, function (err, results, fields) {
        if (err) {
            res.send(err)
            throw err;
        }
        console.log("1 document inserted: " + results);
        res.send("1 document inserted")
      });

}

module.exports = fn