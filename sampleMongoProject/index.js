const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const mongo = require('mongodb')

const createUser = require('./api/createUser')
const getUsers = require('./api/getUsers')
const getUser = require('./api/getUser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";


MongoClient.connect(url, (err, database) => {
    if (err) throw err;
    const db = database.db('test_database')
    //Put routes here
    app.post('/user', (req, res) => createUser(req, res, db))
    app.get('/users', (req, res) => getUsers(req, res, db))
    app.get('/user', (req, res) => getUser(req, res, db))
    
    console.log("Database created!");

    //Close the app out when node is terminated via ctrl+c or other means
    process.on('SIGTERM', function() {
        app.close(() => {
            db.close()
        })
        setTimeout( () => {
            console.error('couldnt close connections in time, forcefully shutting down')
            process.exit(1)
        }, 30*1000)
    })

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
});
