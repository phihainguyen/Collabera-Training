
const fn = (req, res, db) => {
    const query = `
        SELECT * from user
        WHERE 1;
    `
    db.query(query, function (err, results, fields) {
        if (err) {
            res.send(err)
            throw err;
        }
        res.send(results)
      });

}

module.exports = fn