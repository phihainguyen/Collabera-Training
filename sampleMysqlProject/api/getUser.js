
const fn = (req, res, db) => {
    const queryArray = Object.keys(req.query)
    let where = ''
    queryArray.map((item, index) => {
        const andstring = index <= (queryArray.length - 1) ? ' AND ' : ''
        where += `${item} LIKE '${req.query[item]}'`
    })
    // Note that ternary colon up there setting the blank string as default, that's a little
    // tricky
    const query = `
        SELECT * FROM user 
        WHERE ${where};
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