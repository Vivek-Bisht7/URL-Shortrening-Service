const mongoose = require('mongoose');
const crypto = require('crypto');
const { type } = require('os');

const schema = new mongoose.Schema({
    longURL : {
        type : String,
        required : true,
    },
    shortCode : {
        type : String,
        default : ()=> crypto.randomBytes(2).toString('hex'),
        unique:true,
    },
    visits : {
        type : Number,
        default : 0,
    }

},
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('DataBase' , schema);
