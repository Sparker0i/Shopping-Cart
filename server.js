var express = require('express')
var app = express()
var MongoClient= require('mongodb').MongoClient;

app.use('/public' , express.static(__dirname + '/public'));
app.use('/node_modules' , express.static(__dirname + '/node_modules'))

var dbo = null;

MongoClient.connect("mongodb://localhost:27017/", { useNewUrlParser: true } , function(err, db) {
    if (err) throw err;
    dbo = db.db("fk");
    dbo.collection("phones").find({}).toArray(function(err , res) {
        if (err) throw err;
        console.log(res)
    })
});

app.listen(9999 , function() {
    console.log("Server Running at Port 9999")
})

app.get('/' , function(req , res) {
    res.sendFile('main.html' , {'root' : __dirname + '/public'})
})

app.get('/phones' , function(req , result) {
    dbo.collection("phones").find({}).toArray(function(err , res) {
        if (err) throw err;
        result.set('Content-Type', 'application/json');
        result.send(res);
    })
})