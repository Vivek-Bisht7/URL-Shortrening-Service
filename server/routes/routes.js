const express = require('express');
const router = express.Router();
const {inputURL,urlChanger,getViews} = require('../controllers/controllers');

router.post('/' , inputURL);
router.get('/:shortCode',urlChanger);
router.get('/checkViews/:shortCode',getViews);

module.exports = router;