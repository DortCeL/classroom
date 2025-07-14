const express = require('express');
const app = express();

// these middleware run before EVERY request
app.use(function(req,res,next){
    console.log('middleware cholse');
    next();
});


app.use(function( req, res, next ) {
    console.log()
})


app.get('/', function(req,res) {
    res.send('Hello World');
});

app.get('/profile', function(req, res) {
    res.send('ALIF');
})

app.listen(3000)
