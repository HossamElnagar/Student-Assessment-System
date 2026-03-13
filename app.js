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
const authParent = require("./Routers/authParentRoutes")

const authTeacher = require("./Routers/authTeacherRoutes")

const authStudent =require("./Controllers/authStudentController");

app.use("/api/parent",authParent);
app.use("/api/techer",authTeacher);
app.use("/api/student",authStudent)

//app listener
app.listen(port,()=>{
    console.log(`the server is running at port${port}`)
})