const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    longURL : {
        type : String,
        required : true,
    },

},
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('LongURL' , schema);
