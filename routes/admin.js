const express = require('express');
const path = require('path')
const router = express.Router();
const productControllers = require('../controllers/products.js')
//admin/add-product
router.get('/add-product', productControllers.getAddProducts);

router.post('/add-product', productControllers.getPostProducts);

module.exports = router;