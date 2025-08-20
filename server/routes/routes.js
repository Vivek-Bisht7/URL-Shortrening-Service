const express = require('express');
const router = express.Router();
const {inputURL,urlChanger} = require('../controllers/controllers');

router.post('/' , inputURL);
router.get('/:shortCode',urlChanger);

module.exports = router;