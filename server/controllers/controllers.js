const Database = require('../models/dbModel');

const inputURL =async (req,res)=>{
    const longURL = req.body.longURL;
    await Database.create({longURL});
}

const sendShortCode = async (req,res)=>{
    const longURL = req.query.data;

    const data = await Database.findOne({longURL});
    res.send(data.shortCode);
    
}

const urlChanger = async (req,res)=>{
    const {shortCode} = req.params;

    const data = await Database.findOne({shortCode});

    res.send(data.longURL);
    
}

module.exports = {inputURL,sendShortCode,urlChanger};