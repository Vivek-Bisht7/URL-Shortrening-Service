const schema = require('../models/dbModel');

const inputURL = (req,res)=>{
    const longURL = req.body.longURL;
    schema.create({longURL});
}

module.exports = {inputURL};