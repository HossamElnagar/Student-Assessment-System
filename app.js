//create env
require("dotenv").config();

// require express
const express = require ("express")
//create sever app by express 
const app = express()
//require mongoose
const mongoose = require("mongoose");
//ceating db connection
async function dbConection(){
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("db connected successfully");
    }catch(err){
        console.log("server error")
    }
}
// call db connsection
dbConection()
//create port
const Port =  process.env.PORT || 3000;
//routes











//app listener
app.listen(Port,()=>{
    console.log(`the server in running at port ${Port}`)
})