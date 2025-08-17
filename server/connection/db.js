const mongoose = require('mongoose');

const dbConnection = async ()=>{

    await mongoose.connect('mongodb://127.0.0.1:27017/db');
    console.log("Database connected successfully..");
    
}

module.exports = dbConnection;