const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postRoute = require('./routes/users');
app.use('/users', postRoute);

//Routes
app.get('/', (req, res) => {
    res.send("Welcome to the user management system:)");
});

//Connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    {useUnifiedTopology: true,
    useNewUrlParser: true},
    () => {
    console.log("connect to db");
})

//Running in local
app.listen(3000);

//Running in AWS
//module.exports = app;