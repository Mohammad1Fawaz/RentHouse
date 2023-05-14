const mongoose = require('mongoose');

if(process.env.NODE_ENV !=="PRODUCTION"){
    require("dotenv").config({
        path:"./config/.env",
    });
}


const connectDatabase = () =>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log('MongoDb connected successfull ...');
        
})
}
       

module.exports = connectDatabase;
