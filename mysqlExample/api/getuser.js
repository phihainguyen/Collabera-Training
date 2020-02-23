/**
 * this is the Query Module for getting a specific user
 * @param {*} req
 * @param {*} res
 * @param {*} db
 */

const fn = (req, res, db) => {
  const queryArray = Object.keys(req.query);
  console.log(queryArray);
  console.log("this is the queryArray");
  let where = "";
  queryArray.map((item, index) => {
    const andstring = index < queryArray.length - 1 ? " AND " : "";
    console.log(req.query[item]);
    where += `${item} LIKE '${req.query[item]}' ${andstring}`;
  });

  const query = ` SELECT * FROM characters WHERE (${where})`;

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
