const path = require('path')
const express = require('express');


const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')
const contactRoutes = require('./routes/contactus')
const errorcontroller = require('./controllers/error.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

app.use('/contactus', contactRoutes);

app.use('/', shopRoutes);


app.use(errorcontroller.error)
app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);


//npm install --save body-parser
//npm install nodemon --save-dev