const express = require('express');

const router = express.Router();
//admin/add-product
router.get('/add-product', (req, res, next) => {
    console.log("In admin file!");
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><br><input type="text" name="size"><br><button type="submit">Add Product</button></form></html>');

});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;