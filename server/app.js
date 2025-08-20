const express = require('express');
const app = express();

require('dotenv').config();

const cors = require('cors');
app.use(cors());

const dbConnection = require('./connection/db');
dbConnection();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const routes = require('./routes/routes');
app.use('/api/shorty',routes);

app.listen(process.env.PORT || 3000 , ()=>{
    console.log("Server has started running..");
})