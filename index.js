const express = require('express');
const app = express();
const hbs = require("express-handlebars");

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/express')

app.engine('hbs', hbs.engine({extname: '.hbs'}))
app.set("view engine", "hbs");

const User = require('./app/models/UserModel')

app.get('/', function(req, res) {
    res.render("home");
});

app.get('/mongoose', function(req, res) {
    User.find({})
    .lean()
    .then((users)=>{
        res.render("home", {
            name: users.name,
            username: users.username
        })
    })
});

app.listen(8080, function(){
    console.log("serwer node już działa!");
});