const path = require('path')
exports.getAddProducts = (req, res, next) => {
    console.log("In admin file!");
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
}

exports.getPostProducts = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}

exports.getshop = (req, res, next) => {
    console.log("In shop!");
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
}
