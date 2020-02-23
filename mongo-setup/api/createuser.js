//this is an exmple of a setup for the post route connecting the mongo database

const fn = (req, res, db) => {
  const myobj = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    job: req.body.job
  };

  db.collection("characters").insertOne(myobj, function(err, result) {
    if (err) {
      res.send(err);
      throw err;
    }
    console.log("1 document inserted, mongo results: " + result);
    res.send(result);
  });
};
module.exports = fn;
