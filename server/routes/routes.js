const express = require('express');
const router = express.Router();
const {inputURL} = require('../controllers/controllers');

router.post('/api' , inputURL);

module.exports = router;