const express = require('express');
const router = express.Router();
const {inputURL, sendShortCode , urlChanger} = require('../controllers/controllers');

router.post('/api' , inputURL);
router.get('/api',sendShortCode);
router.get('/api/:shortCode',urlChanger);

module.exports = router;