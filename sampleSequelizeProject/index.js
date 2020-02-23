const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const sequelize = require('./database')
//routes
const createUser = require('./api/createUser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//models
const User = require('./models/user')

//Put routes here
app.post('/user', (req, res) => createUser(req, res, User))

//shutdown procedure code
process.on('SIGTERM', function() {
  app.close(() => {
      connection.end()
  })
  setTimeout( () => {
      console.error('couldnt close connections in time, forcefully shutting down')
      process.exit(1)
  }, 30*1000)
})

sequelize.sync().then(() => {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})
//sequelize syncs the data
