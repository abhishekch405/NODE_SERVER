const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not Found</h1>')
})
app.listen(4000);
// const server = http.createServer(app);
// server.listen(3000);


//npm install --save body-parser
//npm install nodemon --save-dev