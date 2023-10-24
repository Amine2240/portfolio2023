const express = require('express');
const router = express.Router();
const clientcontroller = require('../controllers/postcontroller');


router.post('/client',clientcontroller);

module.exports = router;