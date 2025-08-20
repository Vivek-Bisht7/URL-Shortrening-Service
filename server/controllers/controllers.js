const Database = require('../models/dbModel');

const inputURL =async (req,res)=>{
    const longURL = req.body.longURL;

    if(!longURL){
        return res.status(400).json({message:"Long URL is required"});
    }
    
    const found = await Database.findOne({longURL});

    if(!found){
        const data = await Database.create({longURL});
        return res.send(data.shortCode);
    }
    else{
        return res.send(found.shortCode);    
    }
}

const urlChanger = async (req,res)=>{
    const {shortCode} = req.params;

    try{
        const data = await Database.findOne({shortCode});

        if(!data){
            return res.status(404).json({message:"Invalid URL"});
        }

        res.send(data.longURL);
    }
    catch(err){
        return res.status(400).json({message:err.message});
    }    
}

module.exports = {inputURL,urlChanger};