const path = require('path');
const Product = require('../models/product');

//const arr=[];
exports.getAddProducts = (req, res, next) => {
    console.log("In admin file!");
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
}

exports.getPostProducts = (req, res, next) => {
    //console.log('This is req.body', req.body);
    const newprod = new Product(req.body.title);
    console.log(newprod);
    newprod.save();
    console.log("Product Fetchall", Product.fetchall((products) => { console.log(products) }));
    res.redirect('/');
}

exports.getshop = (req, res, next) => {
    console.log("In shop!");
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
}
