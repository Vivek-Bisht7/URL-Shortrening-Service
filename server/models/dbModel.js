const mongoose = require('mongoose');
const crypto = require('crypto');

const schema = new mongoose.Schema({
    longURL : {
        type : String,
        required : true,
    },
    shortCode : {
        type : String,
        default : ()=> crypto.randomBytes(2).toString('hex'),
        unique:true,
    }

},
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('DataBase' , schema);
