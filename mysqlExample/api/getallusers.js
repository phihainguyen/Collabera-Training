/**
 * This is a query module for getting all Users from the database
 * @param {*} req
 * @param {*} res
 * @param {*} db
 */

const fn = (req, res, db) => {
  const query = ` SELECT * FROM characters`;

  db.query(query, function(error, results, fields) {
    if (error) {
      res.send(error);
      throw error;
    }
    console.log("1 document inserted, mongo results:" + results);
    res.send(results);
  });
};
module.exports = fn;
