/**
 * This is a query module for creating users within the system
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.connection} db
 * @return ()
 *
 *
 */

const fn = (req, res, db) => {
  const query = ` INSERT INTO characters(name, email, age) VALUES("${req.body.name}", "${req.body.email}", ${req.body.age})`;

  db.query(query, function(error, results, fields) {
    if (error) {
      res.send(error);
      throw error;
    }
    console.log("1 document inserted, mongo results:" + results);
    res.send("document has been inserted");
  });
};
module.exports = fn;
