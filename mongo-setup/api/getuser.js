const fn = (req, res, db) => {
  //   let type = req.query.type;
  //   if (type === "email" || type === "name" || type === "job" || type === "age")
  db.collection("characters")
    .find({})
    .toArray(function(err, result) {
      if (err) {
        res.send(err);
        throw err;
      }
      console.log("documents found, mongo results:" + result);
      res.send(result);
    });
};
module.exports = fn;
