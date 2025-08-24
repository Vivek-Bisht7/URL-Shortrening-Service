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

        try{
            await Database.findOneAndUpdate({shortCode:shortCode},{$inc:{visits:1}},{new:true});
        }
        catch(err){
            console.log(err.message);
            
        }

            res.send(data.longURL);
    }
    catch(err){
        return res.status(400).json({message:err.message});
    }    
}

const getViews = async (req,res)=>{
    const {shortCode} = req.params;

    if(!shortCode){
        res.status(400).json({message:"Enter a valid short URL"});
    }
    

    try{
        const data = await Database.find({shortCode});
        res.send(data[0].visits);
    }
    catch(e){
        console.log(e.message);
        
    }
    
}

module.exports = {inputURL,urlChanger,getViews};