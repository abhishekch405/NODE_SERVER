const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("In the middleware!");
    next();

});
app.use((req, res, next) => {
    console.log("In another middleware!");
    res.send('<h1>Hello From Express</h1>');

})
app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);