const fn = (req, res, db) => {
  let type = req.query;

  db.collection("character")
    .find(type)
    .toArray(function(err, result) {
      if (err) {
        res.send(err);
        throw err;
      }
      console.log("1 document inserted, mongo results: " + result);
      res.send(result);
    });
};

module.exports = fn;
