const express = require('express');

const router = express.Router();
const contactusControllers = require('../controllers/contactus.js')
router.get('/', contactusControllers.getcontactus);
router.post('/success', contactusControllers.postcontactus);


module.exports = router