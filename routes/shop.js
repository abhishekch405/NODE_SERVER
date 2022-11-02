const path = require('path');
const express = require('express');

const router = express.Router();
const shopControllers = require('../controllers/products.js')
router.get('/', shopControllers.getshop);

module.exports = router